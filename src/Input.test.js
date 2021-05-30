import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input'

import { findByTestAttr } from '../test/utils'

// const mockSetCurrentGuess = jest.fn()

// jest.mock('react', () => ({
//   ...jest.requireActual('react'),
//   useState: (initialState) => [initialState, mockSetCurrentGuess]
// }))

const setup = (success = false, secretWord = 'party') => {
  return shallow(<Input success={success} secretWord={secretWord} />)
}

describe('input component', () => {
  describe('render', () => {
    describe('success is true', () => {
      let wrapper
      beforeEach(() => {
        wrapper = setup(true)
      })

      it('should render the input component without error', () => {
        const component = findByTestAttr(wrapper, 'component-input')
        expect(component.length).toBe(1)
      })

      it('should hide the text field', () => {
        const textField = findByTestAttr(wrapper, 'text-field')
        expect(textField.exists()).toBe(false)
      })

      it('should hide the submit button', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button')
        expect(submitButton.exists()).toBe(false)
      })
    })

    describe('success is false', () => {
      let wrapper
      beforeEach(() => {
        wrapper = setup(false)
      })

      it('should render the input component without error', () => {
        const component = findByTestAttr(wrapper, 'component-input')
        expect(component.length).toBe(1)
      })

      it('should show the text field', () => {
        const textField = findByTestAttr(wrapper, 'text-field')
        expect(textField.exists()).toBe(true)
      })

      it('should show the submit button', () => {
        const submitButton = findByTestAttr(wrapper, 'submit-button')
        expect(submitButton.exists()).toBe(true)
      })
    })
  })

  describe('state controlled input field', () => {
    let mockSetCurrentGuess = jest.fn()
    let wrapper
    let originalUseState

    beforeEach(() => {
      mockSetCurrentGuess.mockClear()
      originalUseState = React.useState
      React.useState = jest.fn(() => ['', mockSetCurrentGuess])
      wrapper = setup()
    })

    afterEach(() => {
      React.useState = originalUseState
    })

    it('should render the input with empty string', () => {
      const textField = findByTestAttr(wrapper, 'text-field')
      expect(textField.length).toBe(1)
    })

    it('should update state with value on input change', () => {
      const textField = findByTestAttr(wrapper, 'text-field')

      const mockEvent = { target: { value: 'train' } }
      textField.simulate('change', mockEvent)
      expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
    })

    it('should clear the input after submitting', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button')
      submitButton.simulate('click', { preventDefault() {} })

      expect(mockSetCurrentGuess).toHaveBeenCalledWith('')
    })
  })
})
