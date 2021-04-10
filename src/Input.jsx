import React from 'react'

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('')

  const handleInputChange = (e) => {
    setCurrentGuess(e.target.value)
  }

  return (
    <div data-test='component-input'>
      <form>
        <input
          type='text'
          data-test='text-field'
          value={currentGuess}
          onChange={handleInputChange}
        />
        <button data-test='submit-button'>Guess</button>
      </form>
    </div>
  )
}

export default Input
