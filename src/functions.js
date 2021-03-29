export function checkGuess({generatedNumber,guessedNumber, guessCounter, setMsg, setGuessCounter}) {
     // If the random number match the guessed number do this
     if (generatedNumber === guessedNumber) {
       console.log(
         ` Right guess! %c You entered the right number on the ${guessCounter.length} guess!`,
         'color:green'
       )
       setMsg(`You entered the right number on round ${guessCounter.length}!`)
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