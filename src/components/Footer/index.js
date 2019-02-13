import React, {Component} from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import "./style.css"

class Footer extends Component {
    render() {
        return (
            <Grid container justify="center" id="footerContainer">
                <Grid item>
                    <Typography variant="h6" align="center">
                        <span style={{color: "black"}}>© 2018 Copyright: </span><b>giftofcharity.com</b>
                    </Typography>
                </Grid>
            </Grid>
        )
    }
}

export default Footer;