import React, {useState, useEffect} from 'react'

function Form({setGeneratedNumber}){
    const [minInputVal, setMinInputVal]= useState('')
    const [maxInputVal, setMaxInputVal]= useState('')
    let randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1 ) + min); 
    
    function handleSubmit(e) {
      e.preventDefault()

    setGeneratedNumber(randomNumber(minInputVal, maxInputVal))
    
  }

  function handleChange(e) {
    switch (e.target.name) {
      case 'minInput':
        setMinInputVal(e.target.value)
        break;

        case 'maxInput':
          setMaxInputVal(e.target.value)
          break;
    
      default:
        break;


    }
  }
  
  return ( 
  
      <form onSubmit={handleSubmit}> 
      {/* <div style={{textAlign:'center', backgroundColor:'salmon', margin:100,padding:20}}>  */}
        <input onChange={handleChange} style={{padding:5, margin:10, borderWidth:2}} type='text' name='minInput' placeholder='Add min value' /> 
        <input onChange={handleChange} style={{padding:5, margin:10, borderWidth:2}} type='text' name='maxInput' placeholder='Add max value' />
        <button style={{margin:10, color:'black', borderWidth:'thick'}}> ADD </button>
        {/* </div> */}
      </form>
 
  )
}

function GuessForm ({setGuessInputVal}) {
  
  
  
  function handleSubmit(e) {
    e.preventDefault()
    setGuessInputVal(parseInt(e.target[0].value))
  }

    



  return (
    <form onSubmit={handleSubmit}>
          {/* <div style={{ margin:50}}>  */}
            <p style={{color:'white', textAlign:'center'}}>
              We have selected a random number between 1 - 100. See if you can guess it.
            </p> 
            <input style={{padding:5, margin:10, borderWidth:2}} type='text' name='GuessInput' placeholder='Add your Guess' /> 
            <button style={{margin:10, color:'black', borderWidth:'thick'}} name='GuessBtn'> Guess </button>
          {/* </div>  */}
    </form>
  )
}



function App() {
 
  const [guessInputVal, setGuessInputVal]= useState(undefined)
  const [generatedNumber, setGeneratedNumber]= useState(undefined)
  const [msg, setMsg]= useState('')

  useEffect(()=> {
   startGame()

  },[guessInputVal])
  console.log(generatedNumber)
  
 function startGame() {
        if(generatedNumber !== undefined && generatedNumber == guessInputVal  ){
          setMsg(`Congratulation !! You guessed it right ${guessInputVal} was the right guess!` )
        }
      }
 
// if(guessInputVal == generatedNumber){
  //     <h2> Congratulation !! You guessed it right ${userGuess} was the right guess! </h2>
  //   }else if(guessInputVal !== generatedNumber ){
  //     <h2> OOPS Sorry! Try Again</h2>
  //   }else {
      
  //   }

console.log(guessInputVal)

  return (
    <div>
      <Form setGeneratedNumber={setGeneratedNumber}/> 
      <GuessForm setGuessInputVal={setGuessInputVal} />
      <h2>{msg}</h2>
    </div>
  )
}

export default App
