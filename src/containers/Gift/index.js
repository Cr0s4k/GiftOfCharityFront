import React, {Component} from 'react';
import './style.css';
// import { Player } from 'video-react';
// import "video-react/dist/video-react.css";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import API from '../../services/API'

class Index extends Component {
    constructor(props){
        super(props);
        document.title="Congratulations!"
        this.state = {
            videoURL: "",
            code: this.props.match.params.code
        }
    }

    componentDidMount() {
        this.setState({videoURL: API.getVideoURL(this.state.code)})
    }

    render() {
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <div className="header">
                        <Typography variant="h2" gutterBottom>Completed questionnaire!</Typography>
                    </div>
                </Grid>
                {/*<Grid item xs={8}>*/}
                        {/*<Player*/}
                            {/*playsInline*/}
                            {/*src={this.state.videoURL}*/}
                        {/*/>*/}
                {/*</Grid>*/}
                <Grid item xs={12} id="gotoGrid">
                    <Button id="gotoBtn" color="primary" variant="contained">Go to Gift Of Charity</Button>
                </Grid>
            </Grid>
        );
    }
}

export default Index;
