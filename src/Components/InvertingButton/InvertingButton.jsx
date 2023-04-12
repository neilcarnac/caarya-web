import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'black',
    color: 'white',
    '&:hover': {
      backgroundColor: 'white',
      color: 'black',
      cursor: 'pointer'
    },
  },
});

function InvertingButton() {
  const classes = useStyles();

  return (
    <Button 
    style={{width: "40%", marginLeft:"215px" }}
    className={classes.root}>
      Add Now
    </Button>
  );
}

export default InvertingButton;
