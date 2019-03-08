import React, {Component} from 'react';
import './style.css';
import API from '../../services/API'
import Footer from "../../components/Footer";
import ErrorMessage from "../../components/ErrorMessage";
import GiftTitleBar from "../../components/GiftTitleBar";
import GiftComponent from "../../components/GiftComponent";
import '../../../node_modules/animate.css/animate.min.css'

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
                <GiftTitleBar/>
                { this.state.gift && !this.state.error ?(
                    <GiftComponent gift={this.state.gift}/>
                ): !this.state.gift && !this.state.error ? (
                    <div/>
                ): this.handleError()}
                <Footer/>
            </div>
        );
    }
}

export default Index;
