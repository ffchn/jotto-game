import React from 'react'
import { shallow } from 'enzyme'

import { findByTestArr, findByTestAttr } from '../test/utils'
import GuessedWords from './GuessedWords'

const defaultProps = {
  guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
}

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props }
  return shallow(<GuessedWords {...setupProps} />)
}

describe('guessed words component', () => {
  describe('if there are no words guessed', () => {
    let wrapper
    beforeEach(() => {
      wrapper = setup({ guessedWords: [] })
    })

    it('should render with no errors', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words')
      expect(component.length).toBe(1)
    })

    it('renders instructions to guess a word', () => {
      const instructions = findByTestAttr(wrapper, 'guess-instructions')
      expect(instructions.text().length).not.toBe(0)
    })
  })

  describe('if there are words guessed', () => {
    const guessedWords = [
      { guessedWord: 'train', letterMatchCount: 3 },
      { guessedWord: 'agile', letterMatchCount: 1 },
      { guessedWord: 'party', letterMatchCount: 5 },
    ]

    let wrapper
    beforeEach(() => {
      wrapper = setup({ guessedWords })
    })

    it('should render with no errors', () => {
      const component = findByTestAttr(wrapper, 'component-guessed-words')
      expect(component.length).toBe(1)
    })

    it('renders `guessed words` section', () => {
      const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words')
      expect(guessedWordsNode.length).toBe(1)
    })

    it('correctly displays number of guessed words', () => {
      const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word')
      expect(guessedWordNodes.length).toBe(guessedWords.length)
    })
  })
})
