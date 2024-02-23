export const debounce = (callback: (...args: any[]) => void, wait: number): ((...args: any[]) => void) => {
  let timeoutId: number

  return (...args: any[]) => {
    window.clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      callback(...args)
    }, wait)
  }
}