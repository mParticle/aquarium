import { getInitials } from './utils'

describe('Testing getInitials', () => {
  it.each([
    ['Ren & Stimpy', 'RS'],
    ['Ren & Stimpy-Wein', 'RS'],
    ['Ren & Stimpy- Wein', 'RW'],
    ['Ren & Stimpy - Wein', 'RW'],
    ['R. N. Stimpy', 'RS'],
    ['1Ren Stimpy', 'RS'],
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
