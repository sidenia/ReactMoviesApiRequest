import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import '../assets/css/App.css'
import '../assets/Fonts/global'

function Title(props){
  const { classes } = props;
  return(
    <div>
      <Typography component="p" variant="h4" color="primary" className={classes.Title}>
        {props.text}
      </Typography>
    </div>
  );
}

export default withStyles({
  Title:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px',
  }
})(Title);