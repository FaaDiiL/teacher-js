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


function App() {
  
    let carSpect = [{model:'AUDI', regNr:'ASD234'}];

  function addCar(model, regNR) {
    carSpect.push({model, regNR})
  }

  addCar('Mercedes', 'LOF658')
  console.log(carSpect)

  const handleSubmit = (e) => {
    e.preventDefault()
 let model = e.target[0].value
 let regNr = e.target[1].value
 addCar(model, regNr)
  }
   // TODO 1.0
    // Create a function that remove the first element from an array
    // The removed element will return values
    // use the values and create a string like: `(BMW ABC123) come to port 1`
    // Log the new array

  const handleNext = () => {
    let obj = carSpect.shift()
    console.log(`Car ${obj.model} with reg nr ${obj.regNr} is next`)
    console.log(carSpect)
  }
handleNext()
  
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
