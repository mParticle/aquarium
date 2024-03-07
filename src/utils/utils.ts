export function getInitials(str: string = ''): string {
  const getInitialsRegex = new RegExp(
    '(?:[\\W\\d]*\\b)*' + // Ignore non-word abd number characters that may exist at the beginning of the word
      '([A-Za-z])\\w*\\b' + // Get the first alpha character of the first word
      '(?:' + // Conditionally capture a second initial candidate
      '.*' + // Ignore everything in between
      '\\s(\\w)[\\w-]*$' + // Until the last word, where we include the first letter of a hyphenated word
      ')?', // Ignore second candidate if missing it and capture a single initial
    'i',
  )
  return str.replace(getInitialsRegex, '$1$2')?.toUpperCase()
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

type OSNames = 'Windows' | 'Macintosh' | 'Linux' | 'Android' | 'iOS' | 'Unknown OS'

export const getOS = (): OSNames => {
  if (navigator.userAgent.includes('Win')) return 'Windows'
  if (navigator.userAgent.includes('Mac')) return 'Macintosh'
  if (navigator.userAgent.includes('Linux')) return 'Linux'
  if (navigator.userAgent.includes('Android')) return 'Android'
  if (navigator.userAgent.includes('like Mac')) return 'iOS'

  return 'Unknown OS'
}
