import React, { useEffect, useState } from 'react'

export const MinAndMaxComponent = ({ setGeneratedNumber }) => {
  const [minRangeInpVal, setMinRangeInpVal] = useState('')
  const [maxRangeInpVal, setMaxRangeInpVal] = useState('')

  const CreateRandomNumber = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // console.log(` RandomNum: %c${CreateRandomNumber(1,10)}`, "color:green")
  const handleSubmit = (e) => {
    e.preventDefault()
    setGeneratedNumber(CreateRandomNumber(minRangeInpVal, maxRangeInpVal))
  }

  const handleChange = (e) => {
    switch (e.target.name) {
      case 'minRangeInpEl':
        setMinRangeInpVal(e.target.value)
        break
      case 'maxRangeInpEl':
        setMaxRangeInpVal(e.target.value)
        break

      default:
        break
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Minimum: <input onChange={handleChange} name='minRangeInpEl' />{' '}
      </label>
      <label>
        Maximum: <input onChange={handleChange} name='maxRangeInpEl' />{' '}
      </label>
      <button>Add</button>
    </form>
  )
}

export const GuessNumber = ({ setGuessedNumber }) => {
  const [userGuess, setUserGuess] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setGuessedNumber(userGuess)
    e.target[0].value = ''
  }
  const handleChange = (e) => {
    setUserGuess(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Minimum: <input onChange={handleChange} name='guessedInpEl' />{' '}
      </label>
      <button>Guess</button>
    </form>
  )
}

function App() {
  const [generatedNumber, setGeneratedNumber] = useState(undefined)
  const [guessedNumber, setGuessedNumber] = useState(undefined)
  const [guessCounter, setGuessCounter] = useState([])
  const [msg, setMsg] = useState('')

  // Start the checking when guessedNum is assigned a value
  useEffect(() => {
    checkGuess()
  }, [guessedNumber])

  function checkGuess() {
    // If the random number match the guessed number do this
    if (generatedNumber == guessedNumber && guessedNumber != undefined) {
      console.log(
        ` Right guess! %c You entered the right number on the ${guessCounter.length} guess!`,
        'color:green'
      )
      setMsg(`You entered the right number on round ${guessCounter.length}!`)
      setGuessCounter([])
    }
    // else If the random number is greater then the guessed number do this
    else if (generatedNumber > guessedNumber) {
      setGuessCounter([...guessCounter, guessedNumber])
      console.log(`%c ${guessedNumber} was to low!`, 'color:red')

      setMsg(`${guessedNumber} was to low.`)
    }

    // else If the random number is less then the guessed number do this
    else if (generatedNumber < guessedNumber) {
      setGuessCounter([...guessCounter, guessedNumber])

      console.log(`%c ${guessedNumber} is to heigh.`, 'color:red')

      setMsg(`${guessedNumber} is to heigh.`)
    }
  }

  return (
    <div>
      <h2>Create a random number!</h2>
      <MinAndMaxComponent setGeneratedNumber={setGeneratedNumber} />
      <br />
      <GuessNumber setGuessedNumber={setGuessedNumber} guessedNumber={guessedNumber} />
      {
        // printing out a paragraph with message and guessed numbers.
        msg && <p>{msg} Your guesses: [{guessCounter.join(', ')}]</p>
      }
    </div>
  )
}

export default App
