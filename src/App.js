import React, { useEffect, useState} from 'react'
import HeighScore from './HeighScore'
// importing components
import GuessNumber from './GuessNumber'
import MinAndMaxComponent from './MinAndMaxComponent'
import LandingPage from './LandingPage'
// Importing my functions
import { checkGuess } from './functions'
import {Route, Switch, useHistory } from 'react-router-dom'

function App() {
  const [generatedNumber, setGeneratedNumber] = useState(undefined)
  const [guessedNumber, setGuessedNumber] = useState({undefined})
  const [guessCounter, setGuessCounter] = useState([])
  const [msg, setMsg] = useState('')

  // Start the checking when guessedNum is assigned a value
  useEffect(() => {
    if(guessedNumber){

      checkGuess({
        generatedNumber,
        guessedNumber,
        guessCounter,
        setMsg,
        setGuessCounter,
        useHistory
      })

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [guessedNumber])

  return (
    <>
      <h2>Random Number Guess Game!</h2>
    <Switch>
      <Route exact path="/" component={LandingPage}></Route>

      <Route path="/min-max">
        <MinAndMaxComponent setGeneratedNumber={setGeneratedNumber} />
      </Route>

      <Route path="/heigh-score">
        <HeighScore />
        <br />
      </Route>

      <Route path="/guess-number">
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
      </Route>
    </Switch>
    </>
  )
}

export default App
