import React from 'react'
import { getLetterMatchCount } from './helpers'

const Input = ({ success, secretWord, guessedWords }) => {
  const [currentGuess, setCurrentGuess] = React.useState('')

  const handleInputChange = (e) => {
    setCurrentGuess(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()

    const matchingCount = getLetterMatchCount(currentGuess, secretWord)

    // guessedWords.push({
    //   guessedWord: currentGuess,
    //   letterMatchCount: matchingCount,
    // })
    //TODO: update guessedWords
    //TODO: check against secretword and update success if needed

    setCurrentGuess('')
  }

  return (
    <div data-test='component-input'>
      {!success && (
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
      )}
    </div>
  )
}

export default Input
