export function getInitials(str: string = ''): string {
  const words = str.split(' ')

  const firstTwoLetters = words.reduce((total, word) => {
    if (total.length > 2) return total // first two letters and a space
    const _isLetter = (s: string): boolean => !!s.match(/[a-z]/i)
    const firstLetter = word.split('').find(_isLetter)
    if (firstLetter) total += firstLetter + ' '
    return total
  }, '')

  return firstTwoLetters.toUpperCase().trim()
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