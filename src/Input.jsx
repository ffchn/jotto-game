import React from 'react'

const Input = ({ secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState('')

  const handleInputChange = (e) => {
    setCurrentGuess(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    //TODO: update guessedWords
    //TODO: check against secretword and update success if needed

    setCurrentGuess('')
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
        <button data-test='submit-button' onClick={submit}>
          Guess
        </button>
      </form>
    </div>
  )
}

export default Input
