import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Game from "./Game";
import Landing from "./Landing";

function App(props) {
  const [val1, setVal1] = useState("");
  const [val2, setVal2] = useState("");
  const [msg, setMsg] = useState("");

  const [generatedNumber, setGeneratedNumber] = useState("");
  const [userGuess, setUserGuess] = useState("");
  const [count, setCount] = useState(0);

  let randomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

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
      setMsg("Din gissning är för låg");
    } else if (userGuess > generatedNumber) {
      setMsg("Din gissning är för hög");
    } else if (userGuess === generatedNumber && userGuess !== 0) {
      setMsg(`Grattis! Du gissade rätt! Du klarade på chans nr ${count}`);
    } else {
      console.log("Hej");
    }
  }
  useEffect(() => {
    test1();
  }, [userGuess]);

  return (
    <Router>
      <Switch>
        <Route path="/newgame">
        <form onSubmit={handleSubmit}>
          <lable>Välj ett minimum nummer här:</lable>
          <input type="number" onChange={handleInput1} />
          <label>Välj ett högsta nummer här:</label>
          <input type="number" onChange={handleInput2} />
          <Link to="/game"><button type="submit">Starta spelet</button></Link>
        </form>
        </Route>
        <Route path="/game">
          <Game
            val1={val1}
            val2={val2}
            setUserGuess={setUserGuess}
            userGuess={userGuess}
            count={count}
            setCount={setCount}
          />
          <h2>{msg}</h2>
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
