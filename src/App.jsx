import Congrats from './Congrats'
import GuessedWords from './GuessedWords'

import './App.css'

const App = () => {
  return (
    <div className='App'>
      <h1>Jotto Game</h1>
      <Congrats success={false} />
      <GuessedWords
        guessedWords={[
          {
            guessedWord: 'train',
            letterMatchCount: 3,
          },
        ]}
      />
    </div>
  )
}

export default App
