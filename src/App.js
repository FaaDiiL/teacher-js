import React,{ useEffect, useState } from 'react'

export const MinAndMaxComponent = ({setGeneratedNumber}) => {
  const [minRangeInpVal, setMinRangeInpVal]=useState('')
  const [maxRangeInpVal, setMaxRangeInpVal]=useState('')

  const CreateRandomNumber = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  // console.log(` RandomNum: %c${CreateRandomNumber(1,10)}`, "color:green")
  const handleSubmit = (e)=> {
    e.preventDefault()
    setGeneratedNumber(CreateRandomNumber(minRangeInpVal, maxRangeInpVal))
  }

  const handleChange = (e)=> {
    switch (e.target.name) {
      case 'minRangeInpEl':
        setMinRangeInpVal(e.target.value)
        break;
      case 'maxRangeInpEl':
        setMaxRangeInpVal(e.target.value)
        break;
    
      default:
        break;
    }
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Minimum: <input onChange={handleChange} name='minRangeInpEl' /> </label>
      <label>Maximum: <input onChange={handleChange} name='maxRangeInpEl' /> </label>
      <button>Add</button>
    </form>
  )
}

export const GuessNumber = ({setGuessedNum}) => {
  const [userGuess, setUserGuess] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    setGuessedNum(userGuess)
  }
  const handleChange = (e)=>{
    setUserGuess(e.target.value)
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Minimum: <input onChange={handleChange} name='guessedInpEl' /> </label>
      <button>Guess</button>
    </form>
  )
}

function App() {
  const [generatedNumber, setGeneratedNumber] = useState(undefined)
  const [guessedNum, setGuessedNum] = useState(undefined)
  const [guessCounter, setGuessCounter] = useState(undefined)
  
  
  const [msg, setMsg] = useState('')

  
  // console.log(` generatedNumber: %c${generatedNumber}`, "color:blue")
  // console.log(` guessedNum: %c${guessedNum}`, "color:green")

  // Start the 
  useEffect( () => {
    
    checkGuess()
      
  },[guessedNum])
  
  function checkGuess() {
    // If the random number match the guessed number do this
    if(generatedNumber == guessedNum){
      console.log(` Right guess! %c You entered the right number on the ${guessedNum}`, "color:green")
      setMsg( `You entered the right number on the ${guessedNum}`)
    } 
    // else If the random number is larger then the guessed number do this
    else if(generatedNumber>guessedNum){
      console.log(`%c ${guessedNum} was to low!`, "color:red")
    
      setMsg(`${guessedNum} was to low.`)
    }
    // else If the random number is larger then the guessed number do this
    else if(generatedNumber < guessedNum){
      console.log(`%c ${guessedNum} is to heigh.`, "color:red")

      setMsg(`${guessedNum} is to heigh.`)
    }
  }
  

  return (
    <div>
    <h2>Create a random number!</h2>
      <MinAndMaxComponent setGeneratedNumber={setGeneratedNumber}  />
      <br />
      <GuessNumber setGuessedNum={setGuessedNum} guessedNum={guessedNum} />
    </div>
  )
}

export default App

