import Congrats from './Congrats'
import GuessedWords from './GuessedWords'

import Input from './Input'
import './App.css'

const App = ({ success = false, secretWord = 'party', guessedWords = [] }) => {
  return (
    <div data-test='component-app' className='App'>
      <h1>Jotto</h1>
      <Congrats success={success} />
      <Input
        success={success}
        secretWord={secretWord}
        guessedWords={guessedWords}
      />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  )
}

export default App
