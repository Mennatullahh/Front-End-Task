  
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import note from './Images/note.png'
import Logo from './Images/Logo.png'
import BUEL from './Images/BUEL.png'
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));



export default function Dashh() {
  const classes = useStyles();

  return (
    
    <React.Fragment>
      <CssBaseline />
      <AppBar position="center">
          <Typography variant="h6" position="center" color="inherit">
                Dashborad
          </Typography>
      </AppBar>
      <br></br>

            <img src={Logo} width="500" height="400" href = "/"></img>
      <main>
      <Grid container spacing={10}>
        {/* Hero unit */}
        <Container className={classes.cardGrid} maxWidth="xs">
          {/* End hero unit */}
         <Card className={classes.root}>
      <CardActionArea>
      <br></br>
          <img src={note} width="100" height="100" href = "/"></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Academic Staff Research Day Aplication
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" href ="/Approvalapp">
          Go to
        </Button>
                    </CardActions>
                    </Card>

        </Container>
        <Container className={classes.cardGrid} maxWidth="xs">
          {/* End hero unit */}
         <Card className={classes.root}>
      <CardActionArea>
          <br></br>
          <img src={note} width="100" height="100" href = "/"></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          Academic Staff Conference Participation Form
          <br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" href ="/AD">
          Go to
        </Button>
        </CardActions>
        </Card>

        </Container>
        </Grid>
        <Grid container spacing={10}>
        <Container className={classes.cardGrid} maxWidth="xs">
          {/* End hero unit */}
         <Card className={classes.root}>
      <CardActionArea>
      <br></br>
          <img src={note} width="100" height="100" href = "/"></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
           Research Day off Request
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" href ="/personal">
          Go to
        </Button>
        </CardActions>
        </Card>

        </Container>
        <Container className={classes.cardGrid} maxWidth="xs">
          {/* End hero unit */}
         <Card className={classes.root}>
      <CardActionArea>
      <br></br>
          <img src={note} width="100" height="100" href = "/"></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Make Survey
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="large" color="primary" href ="/SR">
          Go to
        </Button>
                    </CardActions>
                    </Card>

        </Container>
        </Grid>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>

      <img src={BUEL} width="100" height="50" href = "/"></img>
        <Typography variant="h6" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Call: +20 19283
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Email: info@bue.edu.eg
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Location: El Sherouk City , Suez Desert Road , Cairo 11837 - P.O. Box 43
        </Typography>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}