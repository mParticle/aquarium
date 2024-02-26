export const debounce = (callback: (...args: unknown[]) => void, wait: number): ((...args: unknown[]) => void) => {
  let timeoutId: number

  return (...args: unknown[]) => {
    window.clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      callback(...args)
    }, wait)
  }
}
