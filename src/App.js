import { Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { useState} from 'react'


const carSpect2 = [{model:'Toyota',regNr:'ATY323'}]



function App() {
const [carSpect, setCarSpect] = useState([{model:'BMW',regNr:'ABC123'},{model:'BMW',regNr:'ABC123'}])
// TODO 1.0 add a useState for messages that will take a string
const [ carMsg, setCarMsg] = useState('')

// TODO 1.0 
  // Create a function that takes two parameters: "model, regNr"
  // Add the value from the parameters to the end of the array: carSpect by a es6 HOF
  
  // ANCHOR - This is the Add Function
  function addCar (model, regNr){
    setCarSpect([...carSpect, {model, regNr}])
  }
  // addCar('honda', 'her345')
  // console.log(carSpect)
  
  // ANCHOR - This is the CallFunction
    // Create a function called callCar with no parameters
    // Remove the first item from the array and use its return values to write a msg like
    // NOTE 'model', 'regNr' drive to port 1.
    
    function callCar (){
      let callCarMsg 
      if(carSpect.length > 0 ){
        let removedCar = carSpect.shift()
        // Initialize the state with the message.¨
        
        callCarMsg= `${removedCar.model} ${removedCar.regNr} Come to port one!`
        setCarSpect([...carSpect])
      } else {
        callCarMsg = 'No cars to call!'
      }
      setCarMsg(callCarMsg)
    }
  

    // TODO Register Car on Submit
      // Create a function handleSubmit with e as parameter
      // Ling the function with the form.
      // add type submit on the btn submit
      // add name tag to the two input fields
      // create an array that store all e.currentTarget with the attribute name
      function handleSubmit(e){
        e.preventDefault()
        let formTextFields = [...e.currentTarget.querySelectorAll('[name]')]
        // console.log(formTextFields)

        let formData = formTextFields.reduce((prev, next) => {
          let inputName = next.getAttribute('name')
          let inputValue = next.value

         prev[inputName] = inputValue
         return prev
        }, {})
        
        if(formData.model !== '' && formData.regNr !== ''){
          addCar(formData.model, formData.regNr)
        }else{
          console.log('You need to put in some Credentials')
        }
      }
      
      function handleCallBtn() {
        callCar()
      }



  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));

  return (
    <Container align='center' width='80%'>
        <h1>CarSpect</h1>
        <Grid container direction="row" justify="center" alignItems="flex-start">
          <form onSubmit={handleSubmit}  noValidate autoComplete="off">
            <Grid xs={12} sm={12} md={6} item>
              <TextField id="standard-basic" name='model' label="Car brand" />
            </Grid>
            <Grid xs={12} sm={12} md={6} item>
              <TextField id="standard-basic" name='regNr' label="Registration Nr" />
            </Grid>
            <Grid xs={12} sm={12} md={6} item>

            <Button onClick={handleCallBtn} variant="contained" color="primary" fullWidth>
                Call Car
            </Button>
            </Grid>
            <Grid xs={12} sm={12} md={6} item>
            <Button type='submit' variant="contained" color="primary" fullWidth>
                Add
            </Button>
            </Grid>
          </form>
          {/** Pute the state here! */}
          <h2>{carMsg}</h2>
          <ul>
          {carSpect.map((car, i)=> (
            <li key={car.regNr}>{`${i+1}. ${car.model} ${car.regNr}`}</li>
          )  )}

          </ul>
        </Grid>
    </Container>
  );
}

export default App;
