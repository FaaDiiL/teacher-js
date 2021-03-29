
export function checkGuess({generatedNumber,guessedNumber, guessCounter, setMsg, setGuessCounter , useHistory}) {
  // If the random number match the guessed number do this
     if (generatedNumber === guessedNumber && generatedNumber) {
       console.log(
         ` Right guess! %c You entered the right number on the ${guessCounter.length} guess!`,
         'color:green'
       )
       setMsg(`${generatedNumber} is the right number! You did it on round ${guessCounter.length}!`)
       setTimeout(() => {
         window.location = `/`;
       }, 10000);
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