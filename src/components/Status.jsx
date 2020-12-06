import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
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

export default function Statue() {
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
          Current Postgraduate Status
        </Typography>
      </AppBar>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <h1>Status</h1>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={
              <Typography variant="h6" color="initial">
                Diploma:
              </Typography>
            }
          />{" "}
          <br></br>
          <ColoredLine color="grey" />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={
              <Typography variant="h6" color="initial">
                Master:
              </Typography>
            }
          />
          <Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="In Probation"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Preparing Proposal"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Registered in Thesis"
            />
          </Grid>
          <ColoredLine color="grey" />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={
              <Typography variant="h6" color="initial">
                PhD:
              </Typography>
            }
          />
          <Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Pre-Courses"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="In Probation "
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Preparing Proposal"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Registered in Thesis"
            />
          </Grid>
                  <ColoredLine color="gray" />
        </form>

        <form className={classes.form} noValidate>
          <h2>Start Date:</h2>
          <Grid>
            <TextField
              variant="outlined"
              size="small"
              required
              id="Day"
              label="Day"
              name="Day"
              autoComplete="Day"
            />
            <TextField
              variant="outlined"
              size="small"
              required
              id="Month"
              label="Month"
              name="Month"
              autoComplete="Month"
            />
            <TextField
              variant="outlined"
              size="small"
              required
              id="Year"
              label="Year"
              name="Year"
              autoComplete="Year"
            />
          </Grid>
          <h2>Expected Graduation Date:</h2>
          <Grid>
            <TextField
              variant="outlined"
              size="small"
              required
              id="Day"
              label="Day"
              name="Day"
              autoComplete="Day"
            />
            <TextField
              variant="outlined"
              size="small"
              required
              id="Month"
              label="Month"
              name="Month"
              autoComplete="Month"
            />
            <TextField
              variant="outlined"
              size="small"
              required
              id="Year"
              label="Year"
              name="Year"
              autoComplete="Year"
            />
          </Grid>
          <br></br>
          <br></br>
          <TextField
            variant="outlined"
            size="big "
            required
            fullWidth
            id="Department"
            label="Department"
            name="Department"
            autoComplete="Department"
          />
          <br></br>
          <br></br>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="Faculty"
            label="Faculty"
            name="Faculty"
            autoComplete="Faculty"
          />
          <br></br>
          <br></br>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="University"
            label="University"
            name="University"
            autoComplete="University"
          />
          <br></br>
          <br></br>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="Requested Research Day off"
            label="Requested Research Day off"
            name="Requested Research Day off"
            autoComplete="Requested Research Day off"
          />
        </form>

        <form className={classes.form} noValidate>
          <h2>Applicant’s Signature</h2>
          <br></br>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="Please Sign Here"
            label="Please Sign Here"
            name="Please Sign Here"
            autoComplete="Please Sign Here"
          />
        </form>
        <form className={classes.form} noValidate>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            href="/CR"
          >
            Next
          </Button>
          <Grid container justify="flex-end"></Grid>
        </form>
      </div>
      <Box mt={5}></Box>
    </div>
  );
}
