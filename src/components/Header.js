import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth:'100%'
  },
  name: {
    flexGrow: 1,
    color:'#fac8cf',
    font: 'italic normal 16px/30px Georgia, serif'
  },
  company: {
    flexGrow: 1,
    color:'#fac8cf',
    font: 'italic bold 30px/30px Georgia, serif'
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{display:'flex', justifyContent:'space-between', backgroundColor:'#db0050'}}>
        <Toolbar >
          <Typography variant="h6" className={classes.name}>
            Sam Jo's Calculator
          </Typography>
          <Typography variant="h4" className={classes.company}>
            MIZUMI
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
