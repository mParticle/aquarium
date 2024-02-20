export function getInitials(str: string = ''): string {
  const getInitialsRegex = new RegExp(
    "^(\\w)\\w*\\b" +     // Get the first letter of the first word
    ".*" +                // Ignore everything in between
    "\\s(\\w)[\\w-]*$"    // Until the last word, where we include the first letter of a hyphenated word
    , "i");
  return str.replace(getInitialsRegex, "$1$2")?.toUpperCase();
}

export const debounce = (callback: (...args: any[]) => void, wait: number): ((...args: unknown[]) => void) => {
  let timeoutId: number

  return (...args: unknown[]): void => {
    window.clearTimeout(timeoutId)
    timeoutId = window.setTimeout(() => {
      callback(...args)
    }, wait)
  }
}