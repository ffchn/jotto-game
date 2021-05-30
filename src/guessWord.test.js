import React from 'react'
import { mount } from 'enzyme'

import App from './App'
import { findByTestArr, findByTestAttr } from '../test/utils'

const setup = (state = {}) => {
  //TODO: apply state
  const wrapper = mount(<App {...state} />)

  const textField = findByTestAttr(wrapper, 'text-field')
  textField.simulate('change', { target: { value: 'train' } })

  const submitButton = findByTestAttr(wrapper, 'submit-button')
  submitButton.simulate('click', { preventDefault() {} })

  return wrapper
}

describe('main component', () => {
  describe('no words guessed', () => {
    let wrapper

    beforeEach(() => {
      wrapper = setup({ secretWord: 'party', success: false, guessedWords: [] })
    })

    it('should show guessed words table with no rows', () => {
      const guessedWords = findByTestAttr(wrapper, 'guessed-word')

      expect(guessedWords).toHaveLength(0)
    })
  })

  describe('some words guessed', () => {
    let wrapper

    beforeEach(() => {
      wrapper = setup({
        secretWord: 'party',
        success: false,
        guessedWords: [
          {
            guessedWord: 'agile',
            letterMatchCount: 1,
          },
          {
            guessedWord: 'pardon',
            letterMatchCount: 3,
          },
          {
            guessedWord: 'party',
            letterMatchCount: 5,
          },
        ],
      })
    })

    it('should render 3 guess rows', () => {
      const guessedWords = findByTestAttr(wrapper, 'guessed-word')
      expect(guessedWords).toHaveLength(3)
    })

    it('should still show the guess input', () => {
      const textField = findByTestAttr(wrapper, 'text-field')
      expect(textField.exists()).toBe(true)
    })
  })

  describe.skip('guessed secret word', () => {
    let wrapper

    beforeEach(() => {
      wrapper = setup({
        secretWord: 'party',
        success: false,
        guessedWords: [
          {
            guessedWord: 'agile',
            letterMatchCount: 1,
          },
        ],
      })

      const textField = findByTestAttr(wrapper, 'text-field')
      const mockEvent = { target: { value: 'party' } }

      textField.simulate('change', mockEvent)

      const submitButton = findByTestAttr(wrapper, 'submit-button')
      submitButton.simulate('click', { preventDefault() {} })
    })

    it('should hide the text field', () => {
      const textField = findByTestAttr(wrapper, 'text-field')
      expect(textField.exists()).toBe(false)
    })

    it('should show congrats', () => {
      const congrats = findByTestAttr(wrapper, 'congrats-message')
      expect(congrats.exists()).toBe(true)
    })
  })
})
