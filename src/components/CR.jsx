import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Card } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import Header from './Header'
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "65%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function CR() {
  const classes = useStyles();
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5,
      }}
    />
  );
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header></Header> 
      <AppBar position="center">
        <Typography variant="h6" position="center" color="inherit">
          Signatures
        </Typography>
      </AppBar>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <h1>Supervisors Recommendations:</h1>
          <h3>
            {" "}
            <i>(In case you are registered in thesis) </i>{" "}
          </h3>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="Name 1"
            label="Name 1"
            name="Name 1"
            autoComplete="Name 1"
          />
          <Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Agree"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Refused/Not Needed"
            />
          </Grid>
          <h3>Signature</h3>
          <TextField
            variant="outlined"
            required
            id="Please Sign Here"
            label="Please Sign Here"
            name="Please Sign Here"
            autoComplete="Please Sign Here"
          />
          <br></br>
          <br></br>
          <ColoredLine color="grey" />
          <br></br>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="Name 2"
            label="Name 2"
            name="Name 2"
            autoComplete="Name 2"
          />
          <Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Agree"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Refused/Not Needed"
            />
          </Grid>
          <h3>Signature</h3>
          <TextField
            variant="outlined"
            required
            id="Please Sign Here"
            label="Please Sign Here"
            name="Please Sign Here"
            autoComplete="Please Sign Here"
          />
          <br></br>
          <br></br>
          <ColoredLine color="grey" />
          <br></br>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="Name 3"
            label="Name 3"
            name="Name 3"
            autoComplete="Name 3"
          />
          <Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Agree"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Refused/Not Needed"
            />
          </Grid>
          <h3>Signature</h3>
          <TextField
            variant="outlined"
            required
            id="Please Sign Here"
            label="Please Sign Here"
            name="Please Sign Here"
            autoComplete="Please Sign Here"
          />
          <br></br>
          <br></br>
          <br></br>
          <ColoredLine color="blue" />
        </form>
        <br></br>
        <Paper elevation="3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120vh",
            }}
          >
            <h2>
            Specialization Coordinator Recommendation:
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120vh",
            }}
          >
            <Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Agree"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Refused/Not Needed"
              />
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120vh",
            }}
          >
            {" "}
            <h3>Signature</h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120vh",
            }}
          >
            <TextField
              variant="outlined"
              required
              id="Please Sign Here"
              label="Please Sign Here"
              name="Please Sign Here"
              autoComplete="Please Sign Here"
            />
          </div>
          <br></br>
        </Paper>
        <br></br>
        <br></br>
        <Paper elevation="3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120vh",
            }}
          >
            <h2>
            Vice Dean for Teaching and Learning Recommendation:
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120vh",
            }}
          >
            <Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Agree"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Refused/Not Needed"
              />
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120vh",
            }}
          >
            {" "}
            <h3>Signature</h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120vh",
            }}
          >
            <TextField
              variant="outlined"
              required
              id="Please Sign Here"
              label="Please Sign Here"
              name="Please Sign Here"
              autoComplete="Please Sign Here"
            />
          </div>
          <br></br>
        </Paper>
        <br></br>
        <br></br>
        <Paper elevation="3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120vh",
            }}
          >
            <h2>
              Prof. Samy Ghoniemy: Vice Dean, Postgraduate Studies & Research
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120vh",
            }}
          >
            <Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Agree"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Refused/Not Needed"
              />
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120vh",
            }}
          >
            {" "}
            <h3>Signature</h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120vh",
            }}
          >
            <TextField
              variant="outlined"
              required
              id="Please Sign Here"
              label="Please Sign Here"
              name="Please Sign Here"
              autoComplete="Please Sign Here"
            />
          </div>
          <br></br>
        </Paper>
        <br></br>
        <br></br>
        <Paper elevation="3">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120vh",
            }}
          >
            <h2>
              Prof. Omar Karam: Dean, Faculty of Informatics & Computer Science
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120vh",
            }}
          >
            <Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Agree"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Refused/Not Needed"
              />
            </Grid>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120vh",
            }}
          >
            {" "}
            <h3>Signature</h3>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "120vh",
            }}
          >
            <TextField
              variant="outlined"
              required
              id="Please Sign Here"
              label="Please Sign Here"
              name="Please Sign Here"
              autoComplete="Please Sign Here"
            />
          </div>
          <br></br>
        </Paper>
        <ColoredLine color="blue" />

        <form className={classes.form} noValidate>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            href="/dash"
          >
            Finish
          </Button>
          <Grid container justify="flex-end"></Grid>
        </form>
      </div>
      <Box mt={5}></Box>
    </div>
  );
}
