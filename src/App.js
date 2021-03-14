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

  const carSpect = [
    {
      model: 'Porsche',
      regNr: '456123'
    },
    {
      model: 'bmw',
      regNr: '123abc'
    },
    {
      model: 'AUDI',
      regNr: '123LTY'
    }
  ]
  
  function toNewPort(){
    
    let newPort = carSpect.shift()
    
    console.log(`${newPort.model} ${newPort.regNr} come to port 1`)
    
  }
 
  toNewPort()
  

  let newSpect = []

  function putToArr (model, regNr, carSpect = carSpect){
    carSpect.push({model: model, regNr: regNr})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let model = e.target[0].value
    let regNr = e.target[1].value 
   newSpect = {model: model, regNr: regNr}
 console.log(newSpect)

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
