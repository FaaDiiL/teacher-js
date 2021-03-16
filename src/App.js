import { Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import { ChromeReaderModeOutlined } from '@material-ui/icons';
import React, {useState} from 'react'
import firebase from 'firebase' 
import {writeVehiclesData } from './firebase/firebase'


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  body:{
    margin: '0 auto',
  }
}));

// TODO 1.0 Create a empty array called carSpect

// TODO 2.0 create a function that holds two parameters 
// TODO 2.1 first: model & second: regNr 
// TODO 3.0 inside the function codeBlock insert the parameters to an object
// TODO 3.0 save them to the array


 // TODO 1.0
    //Create Function that collect the data from the two inputs on (add-btn click)
    
 
  // TODO 1.2
  // Insert the values to the first function you created
  

  
  
  


function App() {
  firebase.database();
  writeVehiclesData('Volvo', 'HPT345')
  const [carSpect, setCarSpect] = useState([{model: 'BMW', regNr: 'FED321'}])
  const [carSpectMsg, setCarSpectMsg] = useState('')
  

  function carSpectIn (model, regNr) {
    let sameRegNr = false
    carSpect.forEach(car => {
      if(car.regNr === regNr){
        console.log('This registration number already exist.')
        sameRegNr = true
      }
    })
    if(!sameRegNr) {
      setCarSpect([...carSpect, {model, regNr}])
    }
    
  }
    // TODO 1.0
    // Create a function that remove the first element from an array
    // The removed element will return values
    // use the values and create a string like: `(BMW ABC123) come to port 1`
    // Log the new array
 
  function carSpectOut() {
    let removeVehicle = carSpect.shift()
    if(carSpect.length > 0){
      setCarSpectMsg(`${removeVehicle.model} ${removeVehicle.regNr} Come to Port 1`)
    }else {setCarSpectMsg('No cars to call!')}
    setTimeout(() => {
      setCarSpectMsg(null)
    }, 4000);
  }


  function handleSubmit (e) {
    e.preventDefault()
    let model= e.target[0].value
    let regNr = e.target[1].value
    carSpectIn(model, regNr)
    console.log(carSpect)
    
  }
  
  const classes = useStyles()
  return (
    <div>
      <CssBaseline /> 
      <Container maxWidth="md">
        <h1>CarSpect</h1>
        <Grid container spacing={3}>
          <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <Grid xs={12} sm={12} md={6} item>
            <TextField id="standard-basic" label="AUDI, BMW ..." />
            <TextField id="standard-basic" label="ABC123 ..." />
            <Button onClick={carSpectOut} variant="contained" color="primary" fullWidth>
                CALL CAR
              </Button>
              <Button type='submit' variant="contained" color="primary" fullWidth>
                Add
              </Button>
            </Grid>
          </form>
          <h3>{carSpectMsg}</h3>
          <ul>
            {
              carSpect.map((carSpect, i) => (
                <li key={i}> {carSpect.model} {carSpect.regNr} </li>
              )
              )
            }
          </ul>
          </Grid>
      </Container>
    </div>
  );
}

export default App;
