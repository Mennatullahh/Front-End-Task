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

export default function AppData() {
  
  const classes = useStyles();
  
  return (
    
    <div className={classes.root}>
      <Header></Header> 
      <CssBaseline />
      <AppBar position="center">
          <Typography variant="h6" position="center" color="inherit">
            Applicant Data
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
                autoComplete="Title"
                name="Title"
                variant="outlined"
                required
                fullWidth
                id="Title"
                label="Title"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Department"
                label="Department"
                name="Department"
                autoComplete="Department"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Faculty"
                label="Faculty"
                name="Faculty"
                autoComplete="Faculty"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Date of appointment"
                label="Date of appointment"
                name="Date of appointment"
                autoComplete="Date of appointment"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Date of PhD"
                label="Date of PhD"
                name="Date of PhD"
                autoComplete="Date of PhD"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="BUE E-mail"
                label="BUE E-mail"
                name="BUE E-mail"
                autoComplete="BUE E-mail"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="mob"
                label="Mobile"
                name="Mobile"
                autoComplete="Mobile"
              />
            </Grid>
            
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            href = "/ResearchOutput"
          >
            Next
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