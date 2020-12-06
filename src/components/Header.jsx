import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import BUE_Logo from './Images/BUE_Logo.png'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        
      <AppBar position="initial" color="transparent">
        <br></br>
            <img src={BUE_Logo} position="fixed" width="130" height="50" href = "/"></img>
          <Typography variant="h5">
          <Button color="primary" href = "/dash"> Dashboard </Button>
          </Typography>
      </AppBar>
    </div>
  );
}
