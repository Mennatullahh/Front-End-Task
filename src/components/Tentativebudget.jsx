import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Header from './Header'
import { Card } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '80%', 
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

export default function TB() {
  
  const classes = useStyles();
  
  return (
    
    <div className={classes.root}>
      <Header></Header> 
      <CssBaseline />
      <AppBar position="center">
          <Typography variant="h6" position="center" color="inherit">
            Tentative budget
          </Typography>
      </AppBar>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
        <Card mt={5} >   
        <Typography variant="h6" position="left" color="primary">
            Registration 
        </Typography>
        </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Registration"
                label="Registration"
                name="Registration"
                autoComplete="Registration"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Cost (£)"
                label="Cost (£)"
                name="Cost (£)"
                autoComplete="(£)"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Cost (€)"
                label="Cost (€)"
                name="Cost (€)"
                autoComplete="(€)"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Cost ($)"
                label="Cost ($)"
                name="Cost ($)"
                autoComplete="($)"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                name="TitExchange Rate (EGP)"
                variant="outlined"
                required
                fullWidth
                id="Exchange Rate (EGP)"
                label="Exchange Rate (EGP)"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Cost (EGP)"
                label="Cost (EGP)"
                name="Cost (EGP)"
                autoComplete="Cost (EGP)"
              />
            </Grid>
            <br></br>
            

          </Grid>
        </form>
        <form className={classes.form} noValidate>
        <Card mt={5}>
        <Typography variant="h6" position="left" color="primary">
        Accommodation 
        </Typography>
        </Card>
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Accommodation"
                label="Accommodation"
                name="Accommodation"
                autoComplete="Accommodation"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Cost (£)"
                label="Cost (£)"
                name="Cost (£)"
                autoComplete="(£)"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Cost (€)"
                label="Cost (€)"
                name="Cost (€)"
                autoComplete="(€)"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Cost ($)"
                label="Cost ($)"
                name="Cost ($)"
                autoComplete="($)"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                name="TitExchange Rate (EGP)"
                variant="outlined"
                required
                fullWidth
                id="Exchange Rate (EGP)"
                label="Exchange Rate (EGP)"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Cost (EGP)"
                label="Cost (EGP)"
                name="Cost (EGP)"
                autoComplete="Cost (EGP)"
              />
            </Grid>
          </Grid>
        </form>
        <form className={classes.form} noValidate>

        <Card mt={5} >
        <Typography variant="h6" position="left" color="primary">
        Airfare 
        </Typography>
        </Card>
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Airfare"
                label="Airfare"
                name="Airfare"
                autoComplete="Airfare"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Cost (£)"
                label="Cost (£)"
                name="Cost (£)"
                autoComplete="(£)"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Cost (€)"
                label="Cost (€)"
                name="Cost (€)"
                autoComplete="(€)"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Cost ($)"
                label="Cost ($)"
                name="Cost ($)"
                autoComplete="($)"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                name="TitExchange Rate (EGP)"
                variant="outlined"
                required
                fullWidth
                id="Exchange Rate (EGP)"
                label="Exchange Rate (EGP)"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Cost (EGP)"
                label="Cost (EGP)"
                name="Cost (EGP)"
                autoComplete="Cost (EGP)"
              />
            </Grid>
            <br></br>

          </Grid>

        </form>
        <form className={classes.form} noValidate>
        <Card mt={5} >
            <Typography variant="h6" position="left" color="primary">
                Total 
            </Typography>
            </Card>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Total (EGP)"
                label="Total (EGP)"
                name="Total (EGP)"
                autoComplete="Total (EGP)"
              />
            </Grid></form>
            <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            href = "/BA"
          >
            Next
          </Button>
          <Grid container justify="flex-end">
          </Grid>

        
      </div>
      <Box mt={5}>
      </Box>
    </div>
  );

}