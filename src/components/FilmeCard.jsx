import React from "react";
import { withStyles } from "@material-ui/core/styles";
import  { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core'

function FilmeCard({ name, rota, classes, image}){
    return(
        <Card className={classes.item}>
            <CardMedia 
                component="img"
                height="400px"
                className={classes.media} 
                image={image}
                alt="banner do filme"
            />
            <CardContent>
                <Typography component="p" variant="h6">{name}</Typography>
            </CardContent>
            <CardActions>
                <Button size="fit" className={classes.Button}>
                    <a href={rota} target="_blank" className={classes.Rota} rel="noreferrer">Saiba Mais</a>
                </Button> 
            </CardActions>
        </Card>
    );
}

export default withStyles({
    item:{
        width: "305px",
        minWidth:"305x",
        margin: "0.5em",
        boxSizing: "border-box",
    },
    media:{
        minWidth:"200px"
    },
    Button: {
        padding: "6px 12px",
        background: "#d9d9d9",
        color: "#ffffff"
    },
    Rota: {
        textDecoration: "none",
        textTransform: "lowercase",
    }
})(FilmeCard);