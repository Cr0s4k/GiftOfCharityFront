import React, {Component} from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import './style.css'

class TitleBar extends Component {
    render() {
        return(
            <Grid container justify="center" id="mainDiv">
                <Grid item xs={12}>
                    <Typography variant="h2"><b>Gift Of Charity</b></Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography align="center" variant="h4" gutterBottom>The enhanced charity experience</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography align="center" variant="h5" gutterBottom>By adding a digital experience turn a commendable
                        gift into a great one!</Typography>
                </Grid>
            </Grid>
        )
    }
}

export default TitleBar