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

export default function CI() {
  
  const classes = useStyles();
  
  return (
    
    <div className={classes.root}>
      <Header></Header> 
      <CssBaseline />
      <AppBar position="center">
          <Typography variant="h6" position="center" color="inherit">
            Conference Information
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
                id="Conference Title"
                label="Conference Title"
                name="Conference Title"
                autoComplete="Conference Title"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Organiser"
                label="Organiser"
                name="Organiser"
                autoComplete="Organiser"
              />
            </Grid>
            <Grid item xs={12}>
            <Card mt={5} >   
            <Typography variant="h6" position ="absolute"  color="inherit" style={{textAlign:"left"}}>
                Conference Type
            </Typography>
            </Card>
           </Grid>
            <br></br>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="National"
            /> 
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Interational"
            /> 
            <br></br>
            <Grid item xs={12}>
             <Card mt={10} >   
              < Typography variant="h6"  color="inherit" style={{textAlign:"left"}}>
                If International, do you have an Intl. Conf. Grant (ICG)
              </Typography>
            </Card>
            </Grid>
            <br></br>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Yes"
            /> 
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="No"
            /> 
          <Grid item xs={12}>
            <TextField
                variant="outlined"
                required
                fullWidth
                id="Year of ICG award"
                label="Year of ICG award"
                name="Year of ICG award"
                autoComplete="Year of ICG award"
              />
             </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Amount of ICG fund"
                label="Amount of ICG fund"
                name="Amount of ICG fund"
                autoComplete="Amount of ICG fund"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Country"
                label="Country"
                name="Country"
                autoComplete="Country"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Dates"
                label="Dates"
                name="Dates"
                autoComplete="Dates"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Conference URL"
                label="Conference URL"
                name="Conference URL"
                autoComplete="Conference URL"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Indexing Database (Scopus, Thomson Reuters, etc., if any)"
                label="Indexing Database (Scopus, Thomson Reuters, etc., if any)"
                name="Indexing Database (Scopus, Thomson Reuters, etc., if any)"
                autoComplete="Indexing Database (Scopus, Thomson Reuters, etc., if any)"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Paper title"
                label="Paper title"
                name="Paper title"
                autoComplete="Paper title"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Author(s) and affiliation(s)"
                label="Author(s) and affiliation(s)"
                name="Author(s) and affiliation(s)"
                autoComplete="Author(s) and affiliation(s)"
              />
            </Grid>
            <Grid item xs={12}>
            <Card mt={5} >   
            <Typography variant="h6"  color="inherit" style={{textAlign:"left"}}>
              Paper shows BUE affiliation?
            </Typography>
             </Card> 
             </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Yes"
            />  
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="No"
            /> 
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            href = "/AP"
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