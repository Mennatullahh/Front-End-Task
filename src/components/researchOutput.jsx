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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
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

export default function ResearchOutputt() {
  
  const classes = useStyles();
  const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 5
        }}
    />
);

  return (
    
    <div className={classes.root}>
        <Header></Header> 
        <CssBaseline />
        <AppBar position="center">
            <Typography variant="h6" position="center" color="inherit">
                Research Output
            </Typography>
       </AppBar>
       <div className={classes.paper}>
            <form className={classes.form} noValidate>
                <Card mt={5}>   
                    <AppBar position="center">
                        <Typography variant="h6" position="left" color="primary ">
                            Journal Publications 
                        </Typography>
                </AppBar>
                <AppBar position="center">
                    <Typography variant="h6" position="center" color="inherit">
                    Cumulative over entire career
                    </Typography>
                </AppBar>					
            </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Total"
                label="Total"
                name="Total"
                autoComplete="Total"
              />
            </Grid>
            
            
            <Grid item xs={12}>
            <div style={{alignItems:"center"}}><Typography variant="h6" color="inherit">
                Number of Publications in Databases
            </Typography><br></br></div>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Scopus"
                label="Scopus"
                name="Scopus"
                autoComplete="Scopus"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Thomson Reuters"
                label="Thomson Reuters"
                name="Thomson Reuters"
                autoComplete="Thomson Reuters"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Google Scholar"
                label="Google Scholar"
                name="Google Scholar"
                autoComplete="Google Scholar"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                name="Other"
                variant="outlined"
                required
                fullWidth
                id="Other"
                label="Other"
                autoFocus
              />
            </Grid>
            
            <br></br>
            

          </Grid>
        </form>
        <form className={classes.form} noValidate>
            <Card mt={5}>   
                <AppBar position="center">
                    <Typography variant="h6" position="left" color="inherit">
                    Cumulative while at BUE
                    </Typography>
                </AppBar>					
            </Card> 
            <br></br>
        <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Total"
                label="Total"
                name="Total"
                autoComplete="Total"
              />
            </Grid>
            <Grid item xs={12}>
            <div style={{alignItems:"center"}}><Typography variant="h6" color="inherit">
                Number of Publications in Databases
            </Typography><br></br></div>
            
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Scopus"
                label="Scopus"
                name="Scopus"
                autoComplete="Scopus"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Thomson Reuters"
                label="Thomson Reuters"
                name="Thomson Reuters"
                autoComplete="Thomson Reuters"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Google Scholar"
                label="Google Scholar"
                name="Google Scholar"
                autoComplete="Google Scholar"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                name="Other"
                variant="outlined"
                required
                fullWidth
                id="Other"
                label="Other"
                autoFocus
              />
            </Grid>
            
            <br></br>
            

          </Grid>
            </form>
            <form className={classes.form} noValidate>
            <Card mt={5}>   
                <AppBar position="center">
                    <Typography variant="h6" position="left" color="inherit">
                    Over past two years
                    </Typography>
                </AppBar>					
            </Card> 
            <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Total"
                label="Total"
                name="Total"
                autoComplete="Total"
              />
            </Grid>
            <Grid item xs={12}>
            <div style={{alignItems:"center"}}><Typography variant="h6" color="inherit">
                Number of Publications in Databases
            </Typography><br></br></div>
            
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Scopus"
                label="Scopus"
                name="Scopus"
                autoComplete="Scopus"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Thomson Reuters"
                label="Thomson Reuters"
                name="Thomson Reuters"
                autoComplete="Thomson Reuters"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Google Scholar"
                label="Google Scholar"
                name="Google Scholar"
                autoComplete="Google Scholar"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                name="Other"
                variant="outlined"
                required
                fullWidth
                id="Other"
                label="Other"
                autoFocus
              />
            </Grid>

            <br></br> <br></br>
            </Grid> </form>
<br></br> <br></br>

        <form className={classes.form} noValidate>
            <Card xs={5} position = "center">
            
            <AppBar position="center">
                <Typography variant="h6" color="inherit">
            List most recent five journal articles, indicating for each the database given above:
            
            </Typography>
            </AppBar></Card>
            
            <br></br>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 1."

                label="1."
                name="1."
                autoComplete="1."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 2."
                label="2."
                name="2."
                autoComplete="2."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 3."
                label="3."
                name="3."
                autoComplete="3."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 4."
                label="4."
                name="4."
                autoComplete="4."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 5."
                label="5."
                name="5."
                autoComplete="5."
              />
            </Grid>
            </Grid>
            <br></br><br></br>
            <ColoredLine color="gray" />
            </form>
            
            
        
        


<br></br>

        <form className={classes.form} noValidate>
                <Card mt={5}>   
                    <AppBar position="center">
                        <Typography variant="h6" position="left" color="primary ">
                            Conference Publications 
                        </Typography>
                </AppBar>
                <AppBar position="center">
                    <Typography variant="h6" position="center" color="inherit">
                    Cumulative while at BUE
                    </Typography>
                </AppBar>					
            </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Total"
                label="Total"
                name="Total"
                autoComplete="Total"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="International"
                label="International"
                name="International"
                autoComplete="International"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="National (in Egypt)"
                label="National (in Egypt)"
                name="National (in Egypt)"
                autoComplete="National (in Egypt)"
              />
            </Grid>

          </Grid></form> <br></br>

          <form className={classes.form} noValidate>
          <Card mt={5}>
          <AppBar position="center">
                    <Typography variant="h6" position="center" color="inherit">
                    Over past two years
                    </Typography>
                </AppBar></Card> <br></br>
                <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Total"
                label="Total"
                name="Total"
                autoComplete="Total"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="International"
                label="International"
                name="International"
                autoComplete="International"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="National (in Egypt)"
                label="National (in Egypt)"
                name="National (in Egypt)"
                autoComplete="National (in Egypt)"
              />
            </Grid>

          </Grid>
        </form>
        <br></br>
        <form className={classes.form} noValidate>
            <Card xs={5} position = "center">
            
            <AppBar position="center">
                <Typography variant="h6" color="inherit">
                List most recent three conference articles:
            
            </Typography>
            </AppBar></Card>
            
            <br></br>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 1."

                label="1."
                name="1."
                autoComplete="1."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 2."
                label="2."
                name="2."
                autoComplete="2."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 3."
                label="3."
                name="3."
                autoComplete="3."
              />
            </Grid>
            <br></br>
           
            </Grid>
            <br></br><br></br>
            <ColoredLine color="gray" />
            </form>
















            <form className={classes.form} noValidate>
                <Card mt={5}>   
                    <AppBar position="center">
                        <Typography variant="h6" position="left" color="primary ">
                        Submitted Proposals 
                        </Typography>
                </AppBar>
                <AppBar position="center">
                    <Typography variant="h6" position="center" color="inherit">
                    Cumulative while at BUE
                    </Typography>
                </AppBar>					
            </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Total"
                label="Total"
                name="Total"
                autoComplete="Total"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="International Sponsor"
                label="International Sponsor"
                name="International Sponsor"
                autoComplete="International Sponsor"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="National Sponsor"
                label="National Sponsor"
                name="National Sponsor"
                autoComplete="National Sponsor"
              />
            </Grid>

          </Grid><br></br>
          <Grid item xs={12}>
            <div style={{alignItems:"center"}}><Typography variant="h6" color="inherit">
            No. of Proposals
            </Typography></div>
            
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" PI"
                label="PI"
                name="PI"
                autoComplete="PI"
              />
            </Grid><br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Co-PI"
                label="Co-PI"
                name="Co-PI"
                autoComplete="Co-PI"
              />
            </Grid>
            
          

          </form> <br></br>
          <form className={classes.form} noValidate>
                <Card mt={5}>   
                    
                <AppBar position="center">
                    <Typography variant="h6" position="center" color="inherit">
                    Over past two years
                    </Typography>
                </AppBar>					
            </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Total"
                label="Total"
                name="Total"
                autoComplete="Total"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="International Sponsor"
                label="International Sponsor"
                name="International Sponsor"
                autoComplete="International Sponsor"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="National Sponsor"
                label="National Sponsor"
                name="National Sponsor"
                autoComplete="National Sponsor"
              />
            </Grid>

          </Grid>
          <Grid item xs={12}><br></br>
            <div style={{alignItems:"center"}}><Typography variant="h6" color="inherit">
            No. of Proposals
            </Typography></div>
            
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" PI"
                label="PI"
                name="PI"
                autoComplete="PI"
              />
            </Grid>  <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Co-PI"
                label="Co-PI"
                name="Co-PI"
                autoComplete="Co-PI"
              />
            </Grid>
            
          

          </form>

          <br></br>
        <form className={classes.form} noValidate>
            <Card xs={5} position = "center">
            
            <AppBar position="center">
                <Typography variant="h6" color="inherit">
                List most recent five proposals (provide evidence):
            
            </Typography>
            </AppBar></Card>
            
            <br></br>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 1."

                label="1."
                name="1."
                autoComplete="1."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 2."
                label="2."
                name="2."
                autoComplete="2."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 3."
                label="3."
                name="3."
                autoComplete="3."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 4."
                label="4."
                name="4."
                autoComplete="4."
              />
            </Grid>
            <br></br><Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 5."
                label="5."
                name="5."
                autoComplete="5."
              />
            </Grid>
            <br></br>
           
            </Grid>
            <br></br><br></br>
            <ColoredLine color="gray" />
            </form>










            <form className={classes.form} noValidate>
                <Card mt={5}>   
                    <AppBar position="center">
                        <Typography variant="h6" position="left" color="primary ">
                        Awarded Research Grants 
                        </Typography>
                </AppBar>
                <AppBar position="center">
                    <Typography variant="h6" position="center" color="inherit">
                    Cumulative while at BUE
                    </Typography>
                </AppBar>					
            </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Total"
                label="Total"
                name="Total"
                autoComplete="Total"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="International Sponsor"
                label="International Sponsor"
                name="International Sponsor"
                autoComplete="International Sponsor"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="National Sponsor"
                label="National Sponsor"
                name="National Sponsor"
                autoComplete="National Sponsor"
              />
            </Grid>

          </Grid>
          <Grid item xs={12}><br></br>
            <div style={{alignItems:"center"}}><Typography variant="h6" color="inherit">
            No. of Proposals
            </Typography></div>
            
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" PI"
                label="PI"
                name="PI"
                autoComplete="PI"
              />
            </Grid><br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Co-PI"
                label="Co-PI"
                name="Co-PI"
                autoComplete="Co-PI"
              />
            </Grid>
            
          

          </form> <br></br>
          <form className={classes.form} noValidate>
                <Card mt={5}>   
                    
                <AppBar position="center">
                    <Typography variant="h6" position="center" color="inherit">
                    Over past two years
                    </Typography>
                </AppBar>					
            </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Total"
                label="Total"
                name="Total"
                autoComplete="Total"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="International Sponsor"
                label="International Sponsor"
                name="International Sponsor"
                autoComplete="International Sponsor"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="National Sponsor"
                label="National Sponsor"
                name="National Sponsor"
                autoComplete="National Sponsor"
              />
            </Grid>

          </Grid>
          <Grid item xs={12}><br></br>
            <div style={{alignItems:"center"}}><Typography variant="h6" color="inherit">
            No. of Proposals
            </Typography></div>
            
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" PI"
                label="PI"
                name="PI"
                autoComplete="PI"
              />
            </Grid>  <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" Co-PI"
                label="Co-PI"
                name="Co-PI"
                autoComplete="Co-PI"
              />
            </Grid>
            
          

          </form>

          <br></br>
        <form className={classes.form} noValidate>
            <Card xs={5} position = "center">
            
            <AppBar position="center">
                <Typography variant="h6" color="inherit">
                List most recent five grants contracted with BUE giving full information including end date:
            
            </Typography>
            </AppBar></Card>
            
            <br></br>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 1."

                label="1."
                name="1."
                autoComplete="1."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 2."
                label="2."
                name="2."
                autoComplete="2."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 3."
                label="3."
                name="3."
                autoComplete="3."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 4."
                label="4."
                name="4."
                autoComplete="4."
              />
            </Grid>
            <br></br><Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 5."
                label="5."
                name="5."
                autoComplete="5."
              />
            </Grid>
            <br></br>
           
            </Grid>
            <br></br><br></br>
            <ColoredLine color="gray" />
            </form>















            <form className={classes.form} noValidate>
                <Card mt={5}>   
                    <AppBar position="center">
                        <Typography variant="h6" position="left" color="primary ">
                        Supervision of Postgraduates 
                        </Typography>
                </AppBar>
                <AppBar position="center">
                    <Typography variant="h6" position="center" color="inherit">
                    Cumulative over entire career
                    </Typography>
                </AppBar>					
            </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Master Degree"
                label="Master Degree"
                name="Master Degree"
                autoComplete="TMaster Degree"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="PhD"
                label="PhD"
                name="PhD"
                autoComplete="PhD"
              />
            </Grid>
            
            

          </Grid>
         
            
          

          </form> <br></br>
          <form className={classes.form} noValidate>
                <Card mt={5}>   
                    
                <AppBar position="center">
                    <Typography variant="h6" position="center" color="inherit">
                    Cumulative while at BUE
                    </Typography>
                </AppBar>					
            </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Master Degree"
                label="Master Degree"
                name="Master Degree"
                autoComplete="Master Degree"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="PhD"
                label="PhD"
                name="PhD"
                autoComplete="PhD"
              />
            </Grid>
            
            

          </Grid>
          
            
          

          </form>

          <form className={classes.form} noValidate>
                <Card mt={5}>   
                    
                <AppBar position="center">
                    <Typography variant="h6" position="center" color="inherit">
                    Over past two years
                    </Typography>
                </AppBar>					
            </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Master Degree"
                label="Master Degree"
                name="Master Degree"
                autoComplete="Master Degree"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="PhD"
                label="PhD"
                name="PhD"
                autoComplete="PhD"
              />
            </Grid>
            
            

          </Grid>
          
            
          

          </form>

          <br></br>
        <form className={classes.form} noValidate>
            <Card xs={5} position = "center">
            
            <AppBar position="center">
                <Typography variant="h6" color="inherit">
                List most recent five postgraduate thesis officially supervised providing full information with evidence:
            
            </Typography>
            </AppBar></Card>
            
            <br></br>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 1."

                label="1."
                name="1."
                autoComplete="1."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 2."
                label="2."
                name="2."
                autoComplete="2."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 3."
                label="3."
                name="3."
                autoComplete="3."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 4."
                label="4."
                name="4."
                autoComplete="4."
              />
            </Grid>
            <br></br><Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 5."
                label="5."
                name="5."
                autoComplete="5."
              />
            </Grid>
            <br></br>
           
            </Grid>
            <br></br><br></br>
            <ColoredLine color="gray" />
            </form>














            <form className={classes.form} noValidate>
                <Card mt={5}>   
                    
                <AppBar position="center">
                    <Typography variant="h6" position="center" color="inherit">
                    Collaboration with International Institutes (based on agreements with BUE or Egyptian Government)
                    </Typography>
                </AppBar>					
            </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Number of collaborations while at BUE"
                label="Number of collaborations while at BUE"
                name="Number of collaborations while at BUE"
                autoComplete="Number of collaborations while at BUE"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Number of new/ongoing collaborations over past two years"
                label="Number of new/ongoing collaborations over past two years"
                name="Number of new/ongoing collaborations over past two years"
                autoComplete="Number of new/ongoing collaborations over past two years"
              />
            </Grid>
            
            

          </Grid>
          
            
          

          </form>

          <br></br>
        <form className={classes.form} noValidate>
            <Card xs={5} position = "center">
            
            <AppBar position="center">
                <Typography variant="h6" color="inherit">
                List most recent three official international collaborations giving full information including starting date, ongoing/terminated with provide evidence:
            
            </Typography>
            </AppBar></Card>
            
            <br></br>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 1."

                label="1."
                name="1."
                autoComplete="1."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 2."
                label="2."
                name="2."
                autoComplete="2."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 3."
                label="3."
                name="3."
                autoComplete="3."
              />
            </Grid>
            <br></br>
            
            <br></br>
           
            </Grid>
            <br></br><br></br>
            <ColoredLine color="gray" />
            </form>















            


            <form className={classes.form} noValidate>
                <Card mt={5}>   
                    
                <AppBar position="center">
                    <Typography variant="h6" position="center" color="inherit">
                    Collaboration with Industry (based on contracts with BUE)
                    </Typography>
                </AppBar>					
            </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Number of collaborations while at BUE"
                label="Number of collaborations while at BUE"
                name="Number of collaborations while at BUE"
                autoComplete="Number of collaborations while at BUE"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Number of new/ongoing collaborations over past two years"
                label="Number of new/ongoing collaborations over past two years"
                name="Number of new/ongoing collaborations over past two years"
                autoComplete="Number of new/ongoing collaborations over past two years"
              />
            </Grid>
            
            

          </Grid>
          
          <br></br><br></br>
          <ColoredLine color="gray" />

          </form>

          <br></br>
        <form className={classes.form} noValidate>
            <Card xs={5} position = "center">
            
            <AppBar position="center">
                <Typography variant="h6" color="inherit">
                List most recent three industrial collaborations contracted with BUE giving full information including starting date, ongoing/terminated with evidence:
            
            </Typography>
            </AppBar></Card>
            
            <br></br>
            <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 1."

                label="1."
                name="1."
                autoComplete="1."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 2."
                label="2."
                name="2."
                autoComplete="2."
              />
            </Grid>
            <br></br>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required 
                fullWidth
                id=" 3."
                label="3."
                name="3."
                autoComplete="3."
              />
            </Grid>
            <br></br>
            
            <br></br>
           
            </Grid>
            <br></br><br></br>
            <ColoredLine color="gray" />
            </form>

            





            <form className={classes.form} noValidate>
                <Card mt={5}>   
                    
                <AppBar position="center">
                    <Typography variant="h6" position="center" color="inherit">
                    Current Participation in BUE Research Centres (provide evidence)
                    </Typography>
                </AppBar>					
            </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Research centre name"
                label="Research centre name"
                name="Research centre name"
                autoComplete="Research centre name"
              />
            </Grid>
            <Grid item xs={12}>
            <Card mt={5} >   
            <Typography variant="h6" position ="absolute"  color="inherit" style={{textAlign:"left"}}>
            Official Duty
            </Typography>
            </Card>
           </Grid>
            <br></br>
            <Grid>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Director"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Associate Director"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="other"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Nature of Participation"
                label="Nature of Participation"
                name="Nature of Participation"
                autoComplete="Nature of Participation"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Contribution over past two years"
                label="Contribution over past two years"
                name="Contribution over past two years"
                autoComplete="Contribution over past two years"
              />
            </Grid>
          </Grid>
          <br></br><br></br>
          <ColoredLine color="gray" />
          </form>

          <br></br>

<br></br><br></br><br></br><br></br>

<form className={classes.form} noValidate>
                <Card mt={5}>   
                    
                <AppBar position="center">
                    <Typography variant="h6" position="center" color="inherit">
                    Recommendation/Approval 
                    </Typography>
                </AppBar>					
            </Card> 
        <br></br>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Applicant Name"
                label="Applicant Name"
                name="Applicant Name"
                autoComplete="Applicant Name"
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Department/Faculty"
                label="Department/Faculty"
                name="Department/Faculty"
                autoComplete="Department/Faculty"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Approval covers Academic Year: 20__ / 20__"
                label="Approval covers Academic Year: 20__ / 20__"
                name="Approval covers Academic Year: 20__ / 20__"
                autoComplete="Approval covers Academic Year: 20__ / 20__"
              />
            </Grid>
          </Grid>
          <br></br><br></br>
          <ColoredLine color="gray" />
          </form>


        <form className={classes.form} noValidate>
        <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
            href = "/Reviewww"
        >
            Next
          </Button>
          <Grid container justify="flex-end">
          </Grid></form>
        
        
      </div>
      <Box mt={5}>
      </Box>
    </div>
  );

}