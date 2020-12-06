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
import Details from './modal'
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

export default function SR() {
  
  const classes = useStyles();
  
  return (
    
    <div className={classes.root}>
      <Header></Header> 
      <CssBaseline />
      <AppBar position="center">
          <Typography variant="h6" position="center" color="inherit">
          Faculty of Informatics & Computer Science Research Data											

          </Typography>
      </AppBar>
      
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
        <AppBar position="center" color="inherit">  
          <Typography variant="h6" position="center" color="inherit">
              Survey Form
          </Typography>
        </AppBar>
        <br></br>
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
                autoComplete="Degree (M.Sc. / PhD)"
                name="Degree (M.Sc. / PhD)"
                variant="outlined"
                required
                fullWidth
                id="Degree (M.Sc. / PhD)"
                label="Degree (M.Sc. / PhD)"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Title"
                label="Title"
                name="Title"
                autoComplete="Title"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="University / Faculty"
                label="University / Faculty"
                name="University / Faculty"
                autoComplete="University / Faculty"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Start Date"
                label="Start Date"
                name="Start Date"
                autoComplete="Start Date"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Expected Completion Date"
                label="Expected Completion Date"
                name="Expected Completion Date"
                autoComplete="Expected Completion Date"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Internal Supervisor"
                label="Internal Supervisor"
                name="Internal Supervisor"
                autoComplete="Internal Supervisor"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Area of Research"
                label="Area of Research"
                name="Area of Research"
                autoComplete="Area of Research"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Title"
                label="Title"
                name="Title"
                autoComplete="Title"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Research Objectives"
                label="Research Objectives"
                name="Research Objectives"
                autoComplete="Research Objectives"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Notes"
                label="Notes"
                name="Notes"
                autoComplete="Notes"
              />
            </Grid>
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button size="large" color="primary">
            <Details/>
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