import React from 'react';
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
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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

export default function DC() {
  
  const classes = useStyles();
  
  return (
    
    <div className={classes.root}>
      <Header></Header> 
      <CssBaseline />
      <AppBar position="center">
          <Typography variant="h6" position="center" color="inherit">
                DEAN'S CHECK LIST
          </Typography>
      </AppBar>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
        <AppBar position="center">
        <Toolbar position="center">
          <Typography variant="h6" position="center" color="inherit">
          Eligibility of Applicant
          </Typography>
        </Toolbar>
      </AppBar>
        <Card mt={5} >   
          <Typography variant="h6" position="center" color="inherit">
            BUE Academic Staff?
          </Typography>
          </Card>
        <br></br>
        <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Yes"
            />  <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="No"
          /> 
        </form>
        <form className={classes.form} noValidate>
        <Card mt={5} >   
          <Typography variant="h6" position="center" color="inherit">
            Full time?
          </Typography>
          </Card>
        <br></br>
        <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Yes"
            />  <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="No"
          /> 
        </form>
        <form className={classes.form} noValidate>
        <Card mt={5} >   
          <Typography variant="h6" position="center" color="inherit">
            Duties delegated while attending the conference?
          </Typography>
          </Card>
        <br></br>
        <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Yes"
            />  <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="No"
          /> 
        </form>
        <form className={classes.form} noValidate>
        <AppBar position="center">
        <Toolbar position="center">
          <Typography variant="h6" position="center" color="inherit">
           Conference
          </Typography>
        </Toolbar>
      </AppBar>
        <Card mt={5} >   
          <Typography variant="h6" position="center" color="inherit">
          Conference is prestigious, highly ranked?
          </Typography>
          </Card>
        <br></br>
        <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Yes"
            />  <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="No"
          /> 
        </form>
        <form className={classes.form} noValidate>
        <Card mt={5} >   
          <Typography variant="h6" position="center" color="inherit">
          Paper carries BUE Affiliation?
          </Typography>
          </Card>
        <br></br>
        <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Yes"
            />  <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="No"
          /> 
          
          <br></br>
          
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            href = "/dash"
          >
            Finish
          </Button>
          <Grid container justify="flex-end">
          </Grid>
        </form>
      </div>
      <Box mt={5}>
      </Box>
    </div>
  );

}