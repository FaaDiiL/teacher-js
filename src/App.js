import React, { useState } from "react";

function App() {
  const [inputNr, setInputNr] = useState(null);
  const [inputGenerator, setInputGenerator] = useState(null);

  function randomInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randomGenerator() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let nrOne = e.target[0].value;
    let nrTwo = e.target[1].value;

    setInputNr(randomInteger(nrOne, nrTwo));
    console.log(inputNr);
  };

  const handleChange = (e) => {
    /* e.target.form[0].value; */
  };

  const handleDigits = (e) => {
    e.preventDefault();
    let setNr = e.target[0].value;
    if (setNr === inputNr) {
      setInputGenerator(setNr);
    }
  };

  return (
    <>
      <div>
        <h1>Math</h1>

        <form onSubmit={handleSubmit}>
          <label htmlFor="minimi">minimi:</label>
          <input type="number" id="minimi" />
          <label htmlFor="maximi">maximi:</label>
          <input type="number" id="maximi" />
          <button type="submit">Add</button>
        </form>
        <div>
          <h1>My randomized nr: {inputNr}</h1>
        </div>
        <form onSubmit={handleDigits}>
          <input onChange={handleChange} type="number" name="guess" />
          <button type="submit">Guess</button>
          <h1>You guessed: {inputGenerator}</h1>
        </form>
      </div>
    </>
  );
}

export default App;
