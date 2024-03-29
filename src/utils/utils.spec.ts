import { getInitials, getOS } from './utils'
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
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      global.navigator = {
        userAgent: 'Windows',
      } as Navigator

      // act
      const actualOS = getOS()

      // assert
      expect(actualOS).toBe('Windows')
    })

    it('it should return "Macintosh" when the user agent includes "Mac"', () => {
      // arrange
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
      global.navigator = {
        userAgent: 'Macintosh',
      } as Navigator

      // act
      const actualOS = getOS()

      // assert
      expect(actualOS).toBe('Macintosh')
    })
  })
})
