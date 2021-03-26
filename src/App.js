import React, { useEffect, useState } from 'react'

// importing components
import GuessNumber from './GuessNumber'
import MinAndMaxComponent from './MinAndMaxComponent'

// Importing my functions
import { checkGuess } from './functions'


function App() {
  const [generatedNumber, setGeneratedNumber] = useState(undefined)
  const [guessedNumber, setGuessedNumber] = useState(undefined)
  const [guessCounter, setGuessCounter] = useState([])
  const [msg, setMsg] = useState('')

  // Start the checking when guessedNum is assigned a value
  useEffect(() => {
    console.log('useEffect: ')
    checkGuess({
      generatedNumber,
      guessedNumber,
      guessCounter,
      setMsg,
      setGuessCounter,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guessedNumber])

  return (
    <div>
      <h2>Create a random number!</h2>
      <MinAndMaxComponent setGeneratedNumber={setGeneratedNumber} />
      <br />
      <GuessNumber
        setGuessedNumber={setGuessedNumber}
        guessedNumber={guessedNumber}
      />
      {
        // printing out a paragraph with message and guessed numbers.
        msg && (
          <p>
            {msg} Your guesses: [{guessCounter.join(', ')}]
          </p>
        )
      }
    </div>
  )
}

export default App
