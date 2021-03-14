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
function App() {

  function registerCar(model,regNr,port=carSpect){
    port.push({model,regNr})
  }
  function handleSubmit(e) {
    e.preventDefault()
    let model = e.target[0].value
    let regNr = e.target[1].value
    registerCar(model,regNr)
    console.log(carSpect)
  }
  const classes = useStyles()

  function callCar(){
    let obj = carSpect.shift()
    console.log(`${obj.model} with registration number ${obj.regNr} come to port 1`)
    console.log(carSpect)
  }
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
          </Grid>
      </Container>
    </div>
  );
}

export default App;
