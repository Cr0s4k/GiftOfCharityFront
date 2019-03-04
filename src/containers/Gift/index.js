import React, {Component} from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import API from '../../services/API'
import Footer from "../../components/Footer";
import ErrorMessage from "../../components/ErrorMessage";
import ReactPlayer from 'react-player'

class Index extends Component {
    constructor(props){
        super(props);
        document.title="Congratulations!";
        this.state = {
            gift: undefined,
            error: false
        };
    }

    componentDidMount() {
        API.getGift(this.props.match.params.token)
            .then(gift => {
                this.setState({gift: gift });
            })
            .catch(e => {
                this.setState({error: true})
            })
    }

    handleCloseError = () => {
        this.props.history.push("/")
    };

    handleError() {
        document.title = "Error";
        return (
            <ErrorMessage
                title="Error!"
                description="The gift you are trying to find it doesn't exists!"
                handleClose={this.handleCloseError}
            />
        )
    };

    render() {
        return (
            <div className="divForFooter">
                { this.state.gift && !this.state.error ?(
                    <div>
                        <ReactPlayer url={this.state.gift.videoUrl} controls width="100%" height="auto"/>
                        <Grid item xs={12} id="gotoGrid">
                            <Button id="gotoBtn" color="primary" variant="contained" onClick={this.handleCloseError}>Go to Gift Of Charity</Button>
                        </Grid>
                    </div>
                ): !this.state.gift && !this.state.error ? (
                    <div/>
                ): this.handleError()}
                <Footer/>
            </div>
        );
    }
}

export default Index;
