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

  
  const classes = useStyles()
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md">
        <h1>CarSpect</h1>
        <Grid container spacing={3}>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid xs={12} sm={12} md={6} item>
            <TextField id="standard-basic" label="AUDI, BMW ..." />
            <TextField id="standard-basic" label="ABC123 ..." />
              <Button variant="contained" color="primary" fullWidth>
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
