import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'auto 100px'
  },
  paper: {
    textAlign: 'center',
    // color: theme.palette.text.secondary,
    padding: '7px auto',
    marginTop: '3%',
    backgroundColor: 'Teal',
    color: 'white'
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
            <img style={{ 'width': '200px', 'paddingTop': '30px'}} src="images/logo.png" alt={'Hello'}></img>
        </Grid>
        <Grid item xs={9}>
          <Paper style={{ 'paddingTop': '10px', 'paddingBottom':'10px' }} className={classes.paper}>
            Little Nightmares is a puzzle-platform horror adventure game developed by Tarsier Studios and published by Bandai Namco Entertainment for Microsoft Windows, PlayStation 4, Nintendo Switch, Xbox One, and Stadia. Set in a mysterious world, Little Nightmares follows the journey of Six, a hungry little girl who must escape the Maw, an iron vessel inhabited by monstrous, twisted beings. The game received positive reviews upon release with critics praising its atmosphere, graphics, and sound, while criticizing its checkpoint system and short length. A prequel, Little Nightmares II, was released in February 2021.
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
