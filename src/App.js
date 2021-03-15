import { Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react'

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

function App() {
  const [carSpect, setCarSpect] = useState([{model:'BMW',regNr:'ABC123'},{model:'Toyota',regNr:'ACB145'},{model:'Mazda',regNr:'RTG163'},{model:'VolksWagen',regNr:'IGR834'}])
  const [callMessage, setCallMessage] = useState('')

  function registerCar(model,regNr,port=carSpect){
    setCarSpect([...carSpect, {model,regNr}])
  }

  function callCar(e) {
    if(carSpect.length > 0){
      let calledCar = carSpect.shift()
      setCarSpect([...carSpect])
      setCallMessage(`${calledCar.model} ${calledCar.model} come to port 1`)
    }else {
      setCallMessage('No cars to call!')
      
      setTimeout(()=>{
        setCallMessage(null)
      },3000);
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    let model = e.target[0].value
    let regNr = e.target[1].value
    registerCar(model,regNr)
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
            <Button onClick={callCar} variant="contained" color="primary" fullWidth>
                Call Car
            </Button>
            <Button type={'submit'}variant="contained" color="primary" fullWidth>
                Add
            </Button>
            </Grid>
          </form>
          <h3>{callMessage}</h3>
          <ul>
            {
              carSpect.map((car)=>(
                <li key={car.regNr}>{car.model} {car.regNr} </li>
              ))
            }
          </ul>
          </Grid>
      </Container>
    </div>
  );
}

export default App;
