import React, { useState } from "react";
import styled from "styled-components";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const StyledChatOne = styled.div`
  height: 400px;
  width: 500px;
  background-color: lightgrey;
`;

const StyledChatTwo = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 400px;
  width: 500px;
  background-color: lightblue;
`;

function App() {
  const ACTIONS = {};

  const [chat, setChat] = useState([]);

  //write something on the board
  const handleSubmit = () => {};

  return (
    <>
      <StyledBody>
        <h1>Chatroom</h1>
        <StyledChatOne>
          <form>
            <label htmlFor="text1">write something</label>
            <input type="text" id="text1" />
            <button type="submit">send</button>
          </form>
          <h1></h1>
        </StyledChatOne>
        <StyledChatTwo>
          <form>
            <label htmlFor="text2">write something</label>
            <input type="text" id="text2" />
            <button type="submit">send</button>
          </form>
          <h1></h1>
        </StyledChatTwo>
      </StyledBody>
    </>
  );
}

export default App;
