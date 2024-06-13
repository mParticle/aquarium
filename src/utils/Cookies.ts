import { type RequireOneOrNone } from 'type-fest'

export function get(key: string): string | null {
  const cookies = getAll()
  return cookies?.[key] ? cookies[key] : null
}

export function getAll(): Record<string, string> {
  return _parse(document.cookie)
}

export function getObject(key: string): string | null {
  const value = get(key)
  return value ? JSON.parse(value) : value
}

export type CookieOptions = RequireOneOrNone<
  {
    path?: string
    domain?: string
    secure?: boolean
    expiresISOString: string
    permanent: boolean
  },
  'expiresISOString' | 'permanent'
>

export function put(key: string, value: string | null, options: CookieOptions = {}): void {
  let str = `${_encode(key)}=${value != null ? _encode(value) : ''}`
  if (options.path) str += `; path=${options.path}`
  if (options.domain) str += `; domain=${options.domain}`
  // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing
  if (options.permanent || options.expiresISOString)
    str += `; expires=${calculateExpires(value, options.permanent, options.expiresISOString)}`
  if (options.secure) str += '; secure'
  document.cookie = str
}

/**
 * This code came from the aurelia-cookie plugin initially and the way they remove a cookie
 * is by calling the put method with a null value and the same options as the cookie that needs to be removed.
 *
 * This null value makes the cookie expire immediately by setting the expires attribute to a date in the past.
 * I'm keeping the same logic, but we should consider using a more robust library for cookie management.
 *
 * If we don't set the expires option, the cookie Expires property in the browser becomes "Session", which
 * doesn't seem to have a predictable behaviour across different browsers.
 *
 * @see https://stackoverflow.com/questions/4132095/when-does-a-cookie-with-expiration-time-at-end-of-session-expire
 */
function calculateExpires(value: string | null, permanent?: boolean, expires?: string): string {
  const defaultExpires = 'Thu, 01 Jan 1970 00:00:01 GMT'

  if (value === null) {
    return defaultExpires
  }

  if (permanent) {
    return 'Sat, 31 Dec 2044 23:59:59 GMT'
  }

  return expires ?? defaultExpires
}

export function putObject(key: string, value: Record<string, unknown>, options: CookieOptions = {}): void {
  put(key, JSON.stringify(value), options)
}

export function remove(key: string, options: CookieOptions = {}): void {
  put(key, null, options)
}

export function removeAll(): void {
  const cookies = getAll()
  Object.keys(cookies).forEach(key => {
    remove(key)
  })
}

function _decode(value: string): string | null {
  try {
    return decodeURIComponent(value)
  } catch (e) {
    return null
  }
}

function _encode(value: string | number | boolean): string | null {
  try {
    return encodeURIComponent(value)
  } catch (e) {
    return null
  }
}

function _parse(str: string): Record<string, string> {
  const obj: Record<string, string> = {}
  const pairs = str.split(/ *; */)
  if (pairs[0] === '') return obj
  for (let i = 0, j = pairs.length; i < j; i += 1) {
    const pair = pairs[i].split('=')
    const key = _decode(pair[0])
    const value = _decode(pair[1])
    if (key && value) {
      obj[key] = value
    }
  }
  return obj
}
