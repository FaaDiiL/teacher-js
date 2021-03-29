import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Highscore from "./Highscore";
import App from "./App";

function Landing() {
  return (
    <>
      <Router>
        <Link to="/newgame">
          <button>Start New Game</button>
        </Link>
        <Link to="/highscore">
          <button>High Score</button>
        </Link>

        <Switch>
          <Route path="/newgame">
            <App />
          </Route>
          <Route path="/highscore">
            <Highscore />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Landing;
