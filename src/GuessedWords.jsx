import React from 'react'


const GuessedWords = ({ secretWord, success, guessedWords }) => {
  return (
    <div data-test='component-guessed-words'>
      {guessedWords.length <= 0 ? (
        <span data-test='guess-instructions'>
          Try to guess the secret word!
        </span>
      ) : (
        <div data-test='guessed-words'>
          <h3>Guessed Words</h3>
          <table>
            <thead>
              <tr>
                <th>Word</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map((guess, index) => (
                <tr data-test='guessed-word' key={`guessed-words-row-${index}`}>
                  <td>{guess.guessedWord}</td>
                  <td>{guess.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default GuessedWords
