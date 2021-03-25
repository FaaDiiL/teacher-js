import React, { useState } from 'react'


function Game({val1, val2, setUserGuess}) {
    const [guessVal, setGuessVal] = useState("")

    const handleInput = (e) => {
        setGuessVal(parseInt(e.target.value))
    } 
    const handleSubmit = (e) => {
        e.preventDefault()
        setUserGuess(guessVal)
        
       /*  console.log(e.target.value) */
    }

    return (
        <>
            <h1>Henllo Motherfucker!</h1>
            <h3>Talet du ska gissa på är från {val1} och {val2}</h3>
            <label>Skriv din gissning här:</label>
            <form onSubmit={handleSubmit}>
            <input type='number' onChange={handleInput} />
            <button type='submit'>GISSA</button>
            </form>
        </>
    )
}

export default Game
