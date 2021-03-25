import React,{ useEffect, useState } from 'react'


export const MinAndMaxComponent = () => {
  
  

  return (
    <form>
      <label>Minimum: <input name='minRangeInpEl' /> </label>
      <label>Maximum: <input name='maxRangeInpEl' /> </label>
      <button>Add</button>
    </form>
  )
}

export const GuessNumber = () => {

  return (
    <>

      <label>Minimum: <input name='guessedInpEl' /> </label>
      <button>Guess</button> 
    </>
  )
}

function App() {
  
  return (
    <div>
    <h2>Create a random number!</h2>
      <MinAndMaxComponent />
      <p>The number you entered is between: __ and __.</p>
      <GuessNumber />
    </div>
  )
}

export default App

