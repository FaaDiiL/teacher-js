import React, { useState, useEffect } from "react";

import Game from "./Game";

function App(props) {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [msg, setMsg] = useState("")

 const [generatedNumber, setGeneratedNumber] = useState("")
 const [userGuess, setUserGuess] = useState("")

  let randomNumber = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function handleInput1(e) {
    setVal1(e.target.value);
  }
  function handleInput2(e) {
    setVal2(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setGeneratedNumber(randomNumber(val1, val2));
  }

 function test1() {
   if (userGuess < generatedNumber) {
    setMsg('Din gissning är för låg');
  }else if(userGuess > generatedNumber){
    setMsg('Din gissning är för hög');
  }else if (userGuess === generatedNumber){
    setMsg('Grattis! Du gissade rätt!');
  }
}
useEffect(()=>{
  test1()
},[userGuess])



  return (
    <>
      <form onSubmit={handleSubmit}>
        <lable>Välj ett minimum nummer här:</lable>
        <input type="number" onChange={handleInput1} />
        <label>Välj ett högsta nummer här:</label>
        <input type="number" onChange={handleInput2} />
        <button type="submit">Starta spelet</button>
      </form>
      <Game val1={val1} val2={val2} setUserGuess={setUserGuess} userGuess={userGuess}/>
      <h2>{msg}</h2>
    </>
  );
}

export default App;
