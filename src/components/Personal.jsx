import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Header from './Header'
import Toolbar from "@material-ui/core/Toolbar";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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

export default function Personal() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Header></Header>
      <CssBaseline />
      <AppBar position="center">
        <Typography variant="h6" position="center" color="inherit">
          • Personal Information:
        </Typography>
      </AppBar>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Name"
                name="Name"
                autoComplete="Name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="Department"
                name="Department"
                variant="outlined"
                required
                fullWidth
                id="Department"
                label="Department"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Position"
                label="Position"
                name="Position"
                autoComplete="Position"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="BUE Email"
                label="BUE Email"
                name="BUE Email"
                autoComplete="BUE Email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Mobile 1"
                label="Mobile 1"
                name="Mobile 1"
                autoComplete="Mobile 1"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Mobile 2"
                label="Mobile 2"
                name="Mobile 2"
                autoComplete="Mobile 2"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Ext"
                label="Ext"
                name="Ext"
                autoComplete="Ext"
              />
            </Grid>

            <Grid item xs={12}></Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            href="/status"
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
