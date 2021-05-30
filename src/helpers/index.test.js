import { getLetterMatchCount } from './'

describe('getLetterMatchCount', () => {
  const secretWord = 'party'

  it('should return the correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord)
    expect(letterMatchCount).toBe(0)
  })

  it('should return the correct count when there are 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord)
    expect(letterMatchCount).toBe(3)
  })

  it('should return the correct count when there are duplicate letters on the guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord)
    expect(letterMatchCount).toBe(3)
  })
})
