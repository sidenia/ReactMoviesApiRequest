import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

function AppNav(props){
    const { classes } = props;
    return(
        <AppBar className={classes.NavColor} position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" component="p">SMovies</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default withStyles({
    NavColor:{
        width: '100%',
        backgroundColor: '#5e17eb'
    }
})(AppNav);