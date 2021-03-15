import {
  Button,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";

import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  body: {
    margin: "0 auto",
  },
}));

function App() {
  const [string, setString] = useState("");
  const [cars, setCars] = useState([
    {
      model: "Porsche",
      regNr: "456123",
    },
    {
      model: "bmw",
      regNr: "123abc",
    },
    {
      model: "AUDI",
      regNr: "123LTY",
    },
  ]);

  function toNewPort() {
    let newPort = cars.shift();
    /* setString(`${} go to to Port 77`); */
    setString(`${newPort.model} ${newPort.regNr} Go to port 1`);
    if (cars.length === 0) {
      setString("Go home bitch your done 4 2dääY!");

      setTimeout(() => {
        setString("");
      }, 3200);
    }
  }

  function putToArr(model, regNr) {
    /* carspect.push({ model: model, regNr: regNr }); */
    setCars([...cars, { model: model, regNr: regNr }]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let model = e.target[0].value;
    let regNr = e.target[1].value;
    putToArr(model, regNr);

    console.log(...cars);
  };

  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="md">
        <h1>CarSpect</h1>
        <Grid container spacing={3}>
          <form
            onSubmit={handleSubmit}
            className={classes.root}
            noValidate
            autoComplete="off"
          >
            <Grid xs={12} sm={12} md={6} item>
              <TextField id="standard-basic" label="AUDI, BMW ..." />
              <TextField id="standard-basic" label="ABC123 ..." />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Add
              </Button>
              <Button
                onClick={toNewPort}
                variant="contained"
                color="primary"
                fullWidth
              >
                call next car
              </Button>
            </Grid>
          </form>
          <h3>{string}</h3>
          <ul>
            {cars.map((car, i) => (
              <li key={i}>
                {car.model} {car.regNr}
              </li>
            ))}
          </ul>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
