import React, {Component} from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import homeSectionImage from '../../images/donationProcess.png'
import './styles.css'

class HomeSection extends Component {
    render() {
        return (
            <Grid container justify="center" id="homeSectionGrid">
                <Grid item xs={12} sm={6}>
                    <div>
                        <img src={homeSectionImage} id={"homeSectionImage"} alt="Tree"/>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4" gutterBottom>
                        This sounds great! Where do I <b>start</b>?!
                    </Typography>
                    <ol>
                        <li>Go to <b>www.giftofcharity.org</b></li>
                        <li>Pick a great cause → Save the Rain Forest</li>
                        <li>Choose the recipient → Jane Recipientson</li>
                        <li>Record a video message</li>
                        <li>A nicely packaged envelope is sent to Jane’s home address</li>
                        <li>Jane opens the package, which contains a mysterious url!</li>
                    </ol>
                </Grid>
            </Grid>
        )
    }
}

export default HomeSection