import { formatString, getInitials, getOS, validString } from './utils'
import { expect, describe, it, beforeEach, vi } from 'vitest'

describe('Testing utils', () => {
  describe('Testing getInitials', () => {
    it.each([
      ['Ren & Stimpy', 'RS'],
      ['Ren & Stimpy-Wein', 'RS'],
      ['Ren & Stimpy- Wein', 'RW'],
      ['Ren & Stimpy - Wein', 'RW'],
      ['R. N. Stimpy', 'RS'],
      ['1Ren Stimpy', '1RS'],
      ['Ren', 'R'],
      ['* Ren & Stimpy', 'RS'],
      ['234* Ren & Stimpy', 'RS'],
    ])('it should take "%s" and return "%s"', (words, expectedInitials) => {
      // act
      const actualInitials = getInitials(words)

      // assert
      expect(actualInitials).toBe(expectedInitials)
    })
  })

  describe('Testing getOS', () => {
    beforeEach(() => {
      vi.stubGlobal('navigator', { userAgent: '' })
    })

    it('it should return "Windows" when the user agent includes "Win"', () => {
      // arrange
      const navigatorOverride: Partial<Navigator> = {
        userAgent: 'Windows',
      }
      global.navigator = { ...global.navigator, ...navigatorOverride }

      // act
      const actualOS = getOS()

      // assert
      expect(actualOS).toBe('Windows')
    })

    it('it should return "Macintosh" when the user agent includes "Mac"', () => {
      // arrange
      const navigatorOverride: Partial<Navigator> = {
        userAgent: 'Macintosh',
      }
      global.navigator = { ...global.navigator, ...navigatorOverride }

      // act
      const actualOS = getOS()

      // assert
      expect(actualOS).toBe('Macintosh')
    })
  })
  describe('formatString()', () => {
    it('should return the string when no limit given', () => {
      const str = 'test string'
      const result = formatString(str)
      expect(result).toBe(str)
    })
    it('should return the trimmed string when no limit given and spaces included', () => {
      const str = 'test string  '
      const result = formatString(str)
      expect(result).toBe('test string')
    })
    it('should return the shortened string when limit given', () => {
      const str = 'test string'
      const limit = 5
      const result = formatString(str, limit)
      expect(result).toBe('test...')
    })
    it('should return an empty string when input is undefined', () => {
      const str = undefined
      const result = formatString(str)
      expect(result).toBe('')
    })
    it('should return the string input when limit is not an integer', () => {
      const str = 'test string'
      const result = formatString(str)
      expect(result).toBe(str)
    })
    it('should return the string input when limit is undefined', () => {
      const str = 'test string'
      const limit = undefined
      const result = formatString(str, limit)
      expect(result).toBe(str)
    })
    it('should return the string input when limit is not an integer', () => {
      const str = 'test string'
      const limit = 3.23
      const result = formatString(str, limit)
      expect(result).toBe(str)
    })
    it('should return the string input when limit is less than 0', () => {
      const str = 'test string'
      const limit = -5
      const result = formatString(str, limit)
      expect(result).toBe(str)
    })
  })

  describe('validString()', () => {
    it('should return true when string is valid', () => {
      const str = 'test string'
      const result = validString(str)
      expect(result).toBe(true)
    })
    it('should return false when string is empty', () => {
      const str = ''
      const result = validString(str)
      expect(result).toBe(false)
    })
    it('should return false when string is only spaces', () => {
      const str = ' \n\t'
      const result = validString(str)
      expect(result).toBe(false)
    })
    it('should return false when string is undefined', () => {
      const str = undefined
      const result = validString(str)
      expect(result).toBe(false)
    })
  })
})
