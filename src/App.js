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
function App() {
  
  function registerCar(model,regNr,port=carSpect){
    // port.push({model,regNr})
    
    port.push({model,regNr})

  }
  function handleSubmit(e) {
    e.preventDefault()
    const elementArr = [...e.currentTarget.querySelectorAll('*[name]')];
    // console.log('elementArr: ',elementArr)


    const formData = elementArr.reduce((prev, next) => {
      const inputName = next.getAttribute('name');//model
      const inputValue = next.value;//'dsadsa'
    
      prev[inputName] = inputValue;
      console.log('Prev: ',prev)
      return prev;
    }, {});
    // console.log(formData.model)
    let model = formData.model
    let regNr = formData.regNr
    // registerCar(model,regNr)
    registerCar(model,regNr)
    console.log(carSpect)

  }
  const classes = useStyles()

  function callCar(){
    let obj = carSpect.shift()
    console.log(`${obj.model} with registration number ${obj.regNr} come to port 1`)
    console.log(carSpect)
    console.log(carSpect2)
  }
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
