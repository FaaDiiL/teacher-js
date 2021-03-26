import styled from 'styled-components'
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti'

const StyledWrapper = styled.div`
font-family: Arial, Helvetica, sans-serif;
& > *{
  margin: 40px 20px;
}
button, input{
  padding: 10px;
  border-radius: 5px;
  border: 1px solid darkslategrey;
}
button{
  margin: 0 10px;
  background: aquamarine;
  border: none;
}
`


const App = () => {
  const [rand, SetRand] = useState("")
  const [min, SetMin] = useState("")
  const [max, SetMax] = useState("")
  const [guess, SetGuess] = useState("")
  const [fail, SetFail] = useState([])
  const [renderfail, SetRenderfail] = useState([])
  const [failmsg, SetFailmsg] = useState("")
  const [celebrate, SetCelebrate] = useState(false)



  const handleCollect = (e) => {
    switch (e.target.name) {
      case "minimum":
        SetMin(Math.ceil(e.target.value))
        break;
      case "maximum":
        SetMax(Math.floor(e.target.value))
        break;
      case "guess":
        SetGuess(e.target.value)
        break;

      default:
        break;
    }
  }

  const handleRandomize = (e) => {
    e.preventDefault()
    SetRand(Math.floor(Math.random() * (max - min + 1) + min))
  }

  const handleGuess = () => {
    if (guess > rand) {
      SetFail([...fail, guess])
      SetFailmsg("Your guess is too high")
    } else if (guess < rand) {
      SetFail([...fail, guess])
      SetFailmsg("Your guess is too low")
    } else {
      SetCelebrate(true)
      SetFailmsg("TLIILIILILIILILIIIII It works")
    }
  }

  useEffect(() => {
    SetRenderfail(fail)
  }, [fail])


  useEffect(() => {
    setTimeout(() => {
      SetCelebrate(false)
    }, 6000)
  }, [celebrate])


  return (
    <>
      {celebrate && <Confetti />}
      <StyledWrapper>

        <h1>Number Guessination</h1>

        <form>
          <input onChange={handleCollect} name="minimum" id="minnum" type="number" placeholder="Min number" />
          <input onChange={handleCollect} name="maximum" id="maxnum" type="number" placeholder="Max number" />
          <button onClick={handleRandomize}>Randomize</button>
        </form>
        <div>
          <label>Your Guess </label><br />
          <input onChange={handleCollect} name="guess" type="number" />
          <button onClick={handleGuess} >Guess</button>
          <div>{failmsg}</div>

        </div>
        <div>Failed guesses: {renderfail && (<span>{renderfail.join(" - ")}</span>)} </div>
        <div>{rand}</div>

      </StyledWrapper>
    </>
  );
}

export default App;