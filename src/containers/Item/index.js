import React from 'react'
import TitleBar from "../../components/TitleBar";
import Footer from "../../components/Footer";
import SpecificItem from "../../components/SpecificItem";
import API from '../../services/API'
import ErrorMessage from '../../components/ErrorMessage'
import {withRouter} from "react-router";

class Item extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            item: undefined,
            error: false
        }
    }

    componentDidMount() {
        API.getCharityProject(this.props.match.params.id)
            .then(item => {
                this.setState({ item: item });
                document.title = item.name
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
                description="The charity project you are trying to find it doesn't exists!"
                handleClose={this.handleCloseError}
            />
        )
    };

    render(){
        return(
            <div className="divForFooter">
                <TitleBar/>
                { this.state.item && !this.state.error ?(
                    <SpecificItem item={this.state.item}/>
                ): !this.state.item && !this.state.error ? (
                    <div/>
                ): this.handleError()}
                <Footer/>
            </div>
        );
    }
}

export default withRouter(Item)