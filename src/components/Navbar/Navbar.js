import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 3
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar style={{ 'paddingLeft': '0px' }}>
          <img style={{ 'width': '105px', 'backgroundColor': 'white' }} src="images/logo.png" alt={'Hello'}></img>
          <Typography style={{'color': 'black', 'maxWidth': '330px', 'backgroundColor':'white', 'paddingLeft':'40px', 'marginRight':'40%', 'border': '1px solid black', 'borderLeftStyle': 'none', 'borderRadius': '0px 10px 10px 0px'}} 
          variant="h6" className={classes.title}>
            Tarsier Studios
          </Typography>
          <Button color="inherit">Menu</Button>
          <Button href='#aboutus' color="inherit">About Us</Button>
          <Button href='#whatwedo' color="inherit">What We Do</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
