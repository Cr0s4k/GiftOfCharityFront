import React from 'react'
import ReactPlayer from "react-player";
import Grid from "@material-ui/core/Grid";
import GreenButton from '../GreenBtn'
import withRouter from "react-router/es/withRouter";
import './style.css'
import WOW from 'wow.js'

class GiftComponent extends React.Component {
    state = {
        videoHidden: true
    };

    componentDidMount() {
        new WOW().init()
    }

    handleCloseError = () => {
        this.props.history.push("/")
    };

    videoIsReady = () => {
        this.setState({videoHidden: false})
    };

    render() {
        return (
            <Grid container justify="center" id="giftGrid">
                <Grid item className="wowa abounceIn" hidden={this.state.videoHidden}>
                    <ReactPlayer  url={this.props.gift.videoUrl} controls width="100%" height="auto" onReady={this.videoIsReady}/>
                </Grid>
                <Grid item xs={12} className="wowa abounceInDown">
                    <GreenButton id="gotoBtn" color="primary" variant="contained" onClick={this.handleCloseError}>Go to Gift Of Charity</GreenButton>
                </Grid>
            </Grid>
        );
    }
}

export default withRouter(GiftComponent)