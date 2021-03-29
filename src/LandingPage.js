import React from 'react'
import {useHistory} from 'react-router-dom'


function LandingPage() {     
     const history = useHistory();
     return (
          <>
               <button onClick={() =>  history.push('/min-max') }>Start Game</button>          
               <button onClick={() => history.push('/heigh-score') }>Heigh Score</button>          
          </>
     )
}

export default LandingPage
