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

export default function MennaApproval() {
  
  const classes = useStyles();
  
  return (
    
    <div className={classes.root}>
      <Header></Header> 
      <CssBaseline />
      <AppBar position="center">
          <Typography variant="h6" position="center" color="inherit">
            Business Leave & Approval Trail
          </Typography>
      </AppBar>
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
        <AppBar position="center">
        <Toolbar position="center">
          <Typography variant="h6" position="center" color="inherit">
            Business leave
          </Typography>
        </Toolbar>
        </AppBar>
        <br></br>
          <Grid container spacing={2} >
          <Grid item xs={12} xs = {6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="To"
                label="To"
                name="To"
                autoComplete="To"
              />
            </Grid>
            <Grid item xs={12} xs = {6}>
              <TextField
                autoComplete="From"
                name="From"
                variant="outlined"
                required
                fullWidth
                id="From"
                label="From"
                autoFocus
              />
            </Grid>
            <br></br>
            <AppBar position="center">
            <Toolbar position="center">
            <Typography variant="h6" position="center" color="inherit">
                Approval Trail
            </Typography>
            </Toolbar>
            </AppBar>
            <br></br>

            <Grid item xs={12}>
            </Grid>
          </Grid>
        </form>
        <br></br>
        <form className={classes.form} noValidate>
        <Card mt={5} >   
        <Typography variant="h6" position="left" color="primary">
            Head of Department 
        </Typography>
        </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12} sm = {3}>
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
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id="Signature"
                label="Signature"
                name="Signature"
                autoComplete="Signature"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id="Date"
                label="Date"
                name="Date"
                autoComplete="Date"
              />
            </Grid>
            <Grid item xs={12} sm = {3}>
              <TextField
                name="Comment"
                variant="outlined"
                required
                fullWidth
                id="Comment"
                label="Comment"
                autoFocus
              />
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Approved"
            />  <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Declined"
          />
            <br></br>
          </Grid>
        </form>
        <form className={classes.form} noValidate>
        <Card mt={5} >   
        <Typography variant="h6" position="left" color="primary">
             Vice Dean for R&PG, if any
        </Typography>
        </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12} sm = {3}>
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
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id="Signature"
                label="Signature"
                name="Signature"
                autoComplete="Signature"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id="Date"
                label="Date"
                name="Date"
                autoComplete="Date"
              />
            </Grid>
            <Grid item xs={12} sm = {3}>
              <TextField
                name="Comment"
                variant="outlined"
                required
                fullWidth
                id="Comment"
                label="Comment"
                autoFocus
              />
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Approved"
            />  <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Declined"
          />
            <br></br>
          </Grid>
        </form>
        <form className={classes.form} noValidate>
        <Card mt={5} >   
        <Typography variant="h6" position="left" color="primary">
             Dean
        </Typography>
        </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12} sm = {3}>
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
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id="Signature"
                label="Signature"
                name="Signature"
                autoComplete="Signature"
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id="Date"
                label="Date"
                name="Date"
                autoComplete="Date"
              />
            </Grid>
            <Grid item xs={12} sm = {3}>
              <TextField
                name="Comment"
                variant="outlined"
                required
                fullWidth
                id="Comment"
                label="Comment"
                autoFocus
              />
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Approved"
            />  <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Declined"
          />
            <br></br>
          </Grid>
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