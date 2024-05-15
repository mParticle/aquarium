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

export function put(key: string, value: string | null, options: any /* TODO fix any */ = {}): void {
  let expires = options.expires
  if (value == null) expires = 'Thu, 01 Jan 1970 00:00:01 GMT'
  if (typeof expires === 'string') expires = new Date(expires)
  let str = `${_encode(key)}=${value != null ? _encode(value) : ''}`
  if (options.path) str += `; path=${options.path}`
  if (options.domain) str += `; domain=${options.domain}`
  if (options.expires) str += `; expires=${expires.toUTCString()}`
  if (options.secure) str += '; secure'
  document.cookie = str
}

export function putObject(key: string, value: Record<string, unknown>, options = {}): void {
  put(key, JSON.stringify(value), options)
}

export function remove(key: string, options = {}): void {
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
