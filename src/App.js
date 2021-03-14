import { Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from '@material-ui/core';

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

const carSpect = [{model:'BMW',regNr:'ABC123'}]
const carSpect2 = [{model:'Toyota',regNr:'ATY323'}]



// TODO 1.0 
  // Create a function that takes two parameters: "model, regNr"
  // Add the value from the parameters to the end of the array: carSpect by a es6 HOF
  
  // ANCHOR - This is the Add Function
  function addCar (model, regNr){
    carSpect.push({model, regNr})
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
      callCarMsg= `${removedCar.model} ${removedCar.regNr} Come to port one!`
      } else {
        callCarMsg = 'No cars to call!'
      }
      console.log(callCarMsg)
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
        addCar(formData.model, formData.regNr)
        console.log(carSpect)
      }
      
      function handleCallBtn() {
        callCar()
      }

function App() {


  const classes = useStyles()
  
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md">
        <h1>CarSpect</h1>
        <Grid container spacing={3}>
          <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
            <Grid xs={12} sm={12} md={6} item>
            <TextField id="standard-basic" name='model' label="AUDI, BMW ..." />
            <TextField id="standard-basic" name='regNr' label="ABC123 ..." />
            <Button onClick={handleCallBtn} variant="contained" color="primary" fullWidth>
                Call Car
            </Button>
            <Button type='submit' variant="contained" color="primary" fullWidth>
                Add
            </Button>
            </Grid>
          </form>
          </Grid>
      </Container>
    </div>
  );
}

export default App;
