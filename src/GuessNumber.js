import React, { useState } from 'react'

const GuessNumber = ({ setGuessedNumber }) => {
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
           Guess the number: <input onChange={handleChange} name='guessedInpEl' />{' '}
         </label>
         <button>Guess</button>
       </form>
     )
   }
   export default GuessNumber