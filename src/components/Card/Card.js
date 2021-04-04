import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'SteelBlue',
    margin: '0px auto',
    width: 500,
    borderTop:'none',
    borderRadius: '0px 0px 30px 30px'
    // opacity: 0.4
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    textAlign: 'right',
    fontSize: 14,
  },
  pos: {
    textAlign: 'right',
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <h2 style={{'textAlign':'center'}}>Welcome to Little Nightmares!</h2>
        </Typography>
      </CardContent>
    </Card>
  );
}
