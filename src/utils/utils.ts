export function getInitials(str: string = ''): string {
  const getInitialsRegex = new RegExp(
    "(?:[\\W\\d]*\\b)*" +   // Ignore non-word abd number characters that may exist at the beginning of the word
    "([A-Za-z])\\w*\\b" +   // Get the first alpha character of the first word
    "(?:" +                 // Conditionally capture a second initial candidate
    ".*" +                    // Ignore everything in between
    "\\s(\\w)[\\w-]*$" +      // Until the last word, where we include the first letter of a hyphenated word
    ")?"                    // Ignore second candidate if missing it and capture a single initial 
    , "i");
  return str.replace(getInitialsRegex, "$1$2")?.toUpperCase();
}

export function createSvgDataBlobFromText(
  text: string,
  { height = 30, width = 30, color = "white" }: { height?: number, width?: number; color?: string } = {}
): string {
  const dataBlob = 'data:image/svg+xml,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <foreignObject width="${width}px" height="${height}px">
        <div xmlns="http://www.w3.org/1999/xhtml"
          style="color: ${color}; text-align: center; vertical-align: middle; line-height: ${height}px;"
        >
        ${text}
        </div>
      </foreignObject>
    </svg>`
  )
  
  return dataBlob;
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