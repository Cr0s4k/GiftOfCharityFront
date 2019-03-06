import React from 'react'
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
import GreenButton from '../GreenBtn'
import withRouter from "react-router/es/withRouter";
import './style.css'

class GiftComponent extends React.Component {
    handleCloseError = () => {
        this.props.history.push("/")
    };

    render() {
        return (
            <Grid container justify="center" id="giftGrid">
                <Grid item>
                    <ReactPlayer url={this.props.gift.videoUrl} controls width="100%" height="auto"/>
                </Grid>
                <Grid item xs={12}>
                    <GreenButton id="gotoBtn" color="primary" variant="contained" onClick={this.handleCloseError}>Go to Gift Of Charity</GreenButton>
                </Grid>
            </Grid>
        );
    }
}

export default withRouter(GiftComponent)