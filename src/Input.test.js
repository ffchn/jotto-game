import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input'

import { findByTestAttr } from '../test/utils'

const setup = (secretWord = 'party') => {
  return shallow(<Input secretWord={secretWord} />)
}

describe('input component', () => {
  it('should render the input component without error', () => {
    const wrapper = setup()
    const component = findByTestAttr(wrapper, 'component-input')
    expect(component.length).toBe(1)
  })
  it('should render the text field', () => {
    const wrapper = setup()
    const textField = findByTestAttr(wrapper, 'text-field')
    expect(textField.length).toBe(1)
  })

  it('should render a submit button', () => {
    const wrapper = setup()
    const button = findByTestAttr(wrapper, 'submit-button')
    expect(button.length).toBe(1)
  })

  describe('state controlled input field', () => {
    it('should render the input with empty string', () => {
      const wrapper = setup()
      const textField = findByTestAttr(wrapper, 'text-field')
      expect(textField.length).toBe(1)
    })

    it('should update state with value on input change', () => {
      const mockSetCurrentGuess = jest.fn()
      React.useState = jest.fn(() => ['', mockSetCurrentGuess])

      const wrapper = setup()
      const textField = findByTestAttr(wrapper, 'text-field')

      const mockEvent = { target: { value: 'train' } }
      textField.simulate('change', mockEvent)
      expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
    })
  })
})
