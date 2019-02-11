import React, {Component} from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import './style.css'

class HomeProducts extends Component {
    render() {
        return(
            <Grid container justify="center" id="container">
                <Typography variant="h5">Choose a <b>gift</b>!</Typography>
            </Grid>
        )
    }
}

export default HomeProducts