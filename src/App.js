import React, {useState} from 'react';
import { Button, Container, CssBaseline, Grid, makeStyles, TextField } from '@material-ui/core';


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
  const [carSpect, setCarSpect] = useState([{model:'AUDI', regNr:'ASD234'},{model:'AUDI', regNr:'ASD235'},{model:'AUDI', regNr:'ASD236'}]);
  const [callNext, setCallNext] = useState('')
 

  function addCar(model, regNr) {
    /* carSpect.push({model, regNR}) */

    setCarSpect([...carSpect,{model, regNr}])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
 let model = e.target[0].value
 let regNr = e.target[1].value
 addCar(model, regNr)
 console.log(carSpect)
  }
   // TODO 1.0
    // Create a function that remove the first element from an array
    // The removed element will return values
    // use the values and create a string like: `(BMW ABC123) come to port 1`
    // Log the new array

  const handleNext = () => {
  
   if (carSpect.length > 0) {
    let obj = carSpect.shift()
    setCallNext(`Car ${obj.model} with reg nr ${obj.regNr} is next`)
   } 
   else {
     setCallNext('No more cars left')
     
     setTimeout(() => {
      setCallNext(null)
     }, 3000)
     
   }
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
            <Button onClick={handleNext} variant="contained" color="primary" fullWidth>
                Call Car
              </Button>
              <Button type='submit' variant="contained" color="primary" fullWidth>
                Add
              </Button>
              
            </Grid>
          </form>
          <h3>{callNext}</h3>
          <ul>
            {carSpect.map((car)=>(
              <li key={car.regNr}>({car.model} {car.regNr})</li>
            ))}
          </ul>
          </Grid>
      </Container>
    </div>
  );
}

export default App;
