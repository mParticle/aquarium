import { describe, it, expect } from 'vitest'

// =============================================================================
// CLAIM 1: `void init()` swallows promise rejections (line 75)
//
// The init() function has try/finally but no catch. `void init()` discards
// the rejection. Does a loadData rejection become an unhandled rejection?
// =============================================================================
describe('Claim 1: void init() swallows promise rejections', () => {
  it('try/finally without catch re-throws after finally block, but void discards the rejection', async () => {
    const error = new Error('loadData failed')

    async function init(): Promise<void> {
      try {
        await Promise.reject(error)
      } finally {
        /* isLoading = false */
      }
    }

    // `void init()` converts the rejected promise to `undefined`, discarding
    // the rejection. This causes an unhandled promise rejection at runtime.
    // We can prove this by listening for the unhandledrejection event in the
    // test environment (Node emits 'unhandledRejection' on process).
    const unhandledRejections: unknown[] = []
    const handler = (reason: unknown) => {
      unhandledRejections.push(reason)
    }

    process.on('unhandledRejection', handler)

    // This is exactly what Cascader.tsx line 75 does
    void init()

    // Give microtask queue time to process the rejection
    await new Promise(resolve => setTimeout(resolve, 50))

    process.off('unhandledRejection', handler)

    // VERDICT: The rejection IS swallowed by `void`. The error propagates as
    // an unhandled promise rejection. The `finally` block runs (isLoading=false)
    // but the error has nowhere to go.
    //
    // In a browser, this would fire `window.onunhandledrejection`.
    // In Node/vitest, it fires `process.on('unhandledRejection')`.
    expect(unhandledRejections).toHaveLength(1)
    expect(unhandledRejections[0]).toBe(error)
  })

  it('adding a catch would prevent the unhandled rejection', async () => {
    const error = new Error('loadData failed')
    let caughtError: unknown = null

    async function initFixed(): Promise<void> {
      try {
        await Promise.reject(error)
      } catch (e) {
        caughtError = e
      } finally {
        // isLoading = false
      }
    }

    const unhandledRejections: unknown[] = []
    const handler = (reason: unknown) => {
      unhandledRejections.push(reason)
    }

    process.on('unhandledRejection', handler)

    void initFixed()
    await new Promise(resolve => setTimeout(resolve, 50))

    process.off('unhandledRejection', handler)

    // With a catch block, the rejection is handled
    expect(unhandledRejections).toHaveLength(0)
    expect(caughtError).toBe(error)
  })
})

// =============================================================================
// CLAIM 2: Debounced loadData fire-and-forget (line 96)
//
// `void props.loadData?.(value)` inside the debounce callback silently
// swallows rejections. Same pattern as Claim 1 but inside a debounce.
// =============================================================================
describe('Claim 2: Debounced loadData fire-and-forget swallows rejections', () => {
  it('void on rejected promise in sync context produces unhandled rejection — same pattern as init()', async () => {
    // The exact pattern from Cascader line 96:
    //   void props.loadData?.(value)
    //
    // This is called inside debounce's setTimeout callback, which is non-async.
    // When loadData rejects, the `void` operator discards the promise, and
    // there is no .catch() or await to handle the rejection.
    //
    // This is structurally identical to Claim 1 — `void <rejected promise>` —
    // just without the try/finally wrapper. The rejection has nowhere to go.

    const error = new Error('debounced loadData failed')

    // Demonstrate: a rejected promise with no handler IS an unhandled rejection.
    // We wrap in an async IIFE to get the same `void` semantics as the real code.
    // The `void` keyword evaluates the expression and discards the result.
    async function simulateDebounceCallback(): Promise<void> {
      const loadData = (): Promise<void> => Promise.reject(error)
      // This is what the debounce callback does — fire and forget
      void loadData()
    }

    const unhandledRejections: unknown[] = []
    const handler = (reason: unknown) => {
      unhandledRejections.push(reason)
    }

    process.on('unhandledRejection', handler)

    void simulateDebounceCallback()

    await new Promise(resolve => setTimeout(resolve, 50))

    process.off('unhandledRejection', handler)

    // VERDICT: CONFIRMED — same as Claim 1. `void` on a rejected promise
    // in a sync or async context produces an unhandled rejection.
    // The debounce wrapper doesn't change the fundamental issue.
    expect(unhandledRejections).toHaveLength(1)
    expect(unhandledRejections[0]).toBe(error)
  })
})

// =============================================================================
// CLAIM 3: `as string` hides array-vs-string bug (line 163)
//
// ```tsx
// const displayValue = (selectedOption
//   ? getSearchValue(selectedOption)
//   : selectedValue.slice(-1)) as string
// ```
//
// Claim: `selectedValue.slice(-1)` returns an array, not a string.
// The `as string` cast hides this. What actually gets rendered?
// =============================================================================
describe('Claim 3: as string hides array-vs-string type mismatch', () => {
  it('Array.slice(-1) returns an array, not a string — proving the type claim', () => {
    // selectedValue is typed as Array<number | string>
    const selectedValue: Array<number | string> = ['foo', 'bar', 'baz']

    const result = selectedValue.slice(-1)

    // .slice(-1) returns the last element wrapped in an array
    expect(Array.isArray(result)).toBe(true)
    expect(result).toEqual(['baz'])

    // TypeScript `as string` does NOT convert the value at runtime
    const castResult = result as unknown as string
    expect(Array.isArray(castResult)).toBe(true) // still an array!
    expect(typeof castResult).toBe('object') // not 'string'
  })

  it('single-element array renders as its string content in React/JSX (toString coercion)', () => {
    // When React receives an array as a child or input value, it calls toString()
    // For a single-element string array: ['baz'].toString() === 'baz'
    const singleElementArray = ['baz']
    expect(singleElementArray.toString()).toBe('baz')

    // For multi-element arrays: ['foo','bar'].toString() === 'foo,bar'
    const multiElementArray = ['foo', 'bar']
    expect(multiElementArray.toString()).toBe('foo,bar')
  })

  it('selectedValue.slice(-1) with numbers coerces via toString too', () => {
    const numericValue: Array<number | string> = [1, 2, 42]
    const sliced = numericValue.slice(-1)

    expect(sliced).toEqual([42])
    expect(sliced.toString()).toBe('42')
  })

  it('the bug manifests when selectedValue is empty — slice(-1) returns empty array', () => {
    const emptyValue: Array<number | string> = []
    const sliced = emptyValue.slice(-1)

    expect(sliced).toEqual([])
    expect(sliced.toString()).toBe('')

    // For empty selectedValue, the component shows '' which matches
    // what would happen with an actual empty string.
    // This specific case is "harmlessly wrong" — but it's still a type error.
  })

  it('VERDICT: the cast IS a real type bug but has limited runtime impact due to toString coercion', () => {
    // The `as string` on line 163 lies to TypeScript.
    // Runtime: antd Input's value prop accepts `InputHTMLAttributes<HTMLInputElement>['value']`
    // which is `string | number | readonly string[] | undefined`.
    //
    // So passing a `string[]` actually works because the HTML input element
    // calls .toString() on array values, and single-element arrays like ['baz']
    // stringify to 'baz'.
    //
    // HOWEVER: if the user passes `value={[1, 2]}` (numeric array with 2+ items)
    // and no option is selected, displayValue becomes [2] and renders as "2".
    // This is correct behavior by accident, not by design.
    //
    // The proper fix would be: `selectedValue.slice(-1)[0] ?? ''`
    const selectedValue = ['parent', 'child']
    const broken = selectedValue.slice(-1) // ['child'] — array, not string
    const fixed = selectedValue.slice(-1)[0] ?? '' // 'child' — actual string

    expect(Array.isArray(broken)).toBe(true)
    expect(typeof fixed).toBe('string')
    expect(broken.toString()).toBe(fixed) // same visual output, different types
  })
})

// =============================================================================
// CLAIM 4: useCallback with pre-built function (lines 93-100)
//
// Claim: passing a pre-built debounce result to useCallback is incorrect —
// should be useMemo. Does this actually cause a runtime bug?
// =============================================================================
describe('Claim 4: useCallback with pre-built debounce function', () => {
  it('useCallback(fn, deps) vs useMemo(() => fn, deps) — the semantic difference', () => {
    // useCallback(fn, deps) is equivalent to useMemo(() => fn, deps)
    // per React docs: https://react.dev/reference/react/useCallback
    //
    // The Cascader code does:
    //   useCallback(
    //     props.loadData
    //       ? debounce((value) => { void props.loadData?.(value) }, 500)
    //       : () => {},
    //     [props.loadData]
    //   )
    //
    // The expression `debounce(...)` is evaluated BEFORE being passed to
    // useCallback. On every render, a NEW debounced function is created and
    // passed as the first arg. useCallback ignores it if deps haven't changed.
    //
    // This is wasteful but NOT a functional bug because:
    // - The returned function IS stable (same reference while deps unchanged)
    // - The debounce internal state (timeout) lives in the RETURNED closure
    // - Extra debounce() calls create garbage but don't affect behavior

    let debounceInvocations = 0
    const createdFunctions: Array<() => string> = []

    const mockDebounce = () => {
      const id = debounceInvocations++
      return () => `debounced-${id}`
    }

    // Simulate useCallback(debounce(...), deps) across 5 renders
    // On each render, debounce() is called (wasteful), but useCallback
    // returns the cached result from the first render.
    let cachedFn: (() => string) | null = null
    const deps = ['stable-dep']
    let prevDeps = deps

    for (let render = 0; render < 5; render++) {
      const newFn = mockDebounce() // called every render!
      createdFunctions.push(newFn)

      // Simulate useCallback's memoization: cache on first call, return cached if deps stable
      if (cachedFn === null || deps !== prevDeps) {
        cachedFn = newFn
        prevDeps = deps
      }
    }

    // debounce was called 5 times (wasteful)
    expect(debounceInvocations).toBe(5)
    expect(createdFunctions).toHaveLength(5)

    // But useCallback keeps returning the first one
    expect(cachedFn!()).toBe('debounced-0')

    // All 5 created functions are distinct (4 are garbage)
    expect(createdFunctions[0]()).toBe('debounced-0')
    expect(createdFunctions[4]()).toBe('debounced-4')
    expect(createdFunctions[0]).not.toBe(createdFunctions[4])
  })

  it('useMemo would be more correct — avoids re-executing debounce on every render', () => {
    // With useMemo(() => debounce(...), [deps]):
    //   - The factory only runs when deps change
    //   - No wasted debounce() calls
    //
    // With useCallback(debounce(...), [deps]):
    //   - debounce() runs every render
    //   - Result is discarded if deps unchanged
    //   - Functionally identical output
    //
    // VERDICT: This is a performance smell, NOT a runtime bug.
    // The claim that it "should be useMemo" is CORRECT for efficiency,
    // but INCORRECT that it causes actual buggy behavior.

    // Prove with a concrete simulation:
    let debounceCallCount = 0
    const mockDebounce = () => {
      debounceCallCount++
      return () => {}
    }

    // useCallback pattern (current code): debounce runs every "render"
    debounceCallCount = 0
    for (let render = 0; render < 10; render++) {
      mockDebounce()
    }
    expect(debounceCallCount).toBe(10) // wasteful

    // useMemo pattern (proposed fix): debounce runs once
    debounceCallCount = 0
    let memoized: (() => void) | null = null
    for (let render = 0; render < 10; render++) {
      if (memoized === null) {
        memoized = mockDebounce()
      }
    }
    expect(debounceCallCount).toBe(1) // efficient
  })
})
