import React from 'react'
import TitleBar from "../../components/TitleBar";
import Footer from "../../components/Footer";
import SpecificItem from "../../components/SpecificItem";
import API from '../../services/API'
import ErrorMessage from '../../components/ErrorMessage'

class Item extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            item: {},
            error: false
        }
    }

    componentDidMount() {
        API.getCharityProject(this.props.match.params.id)
            .then(item => {
                this.setState({ item: item })
            })
            .catch(e => {
                this.setState({error: true})
            })
    }

    handleCloseError = () => {
        document.location.href = "/"
    };

    render() {
        document.title = this.state.item !== undefined ? this.state.item.name : "";
        return(
            <div className="divForFooter">
                <TitleBar/>
                {!this.state.error ?  (
                    <SpecificItem item={this.state.item}/>
                ) : (
                    <ErrorMessage
                        title="Error!"
                        description="The charity project your are trying to find it doesn't exists!"
                        handleClose={this.handleCloseError}
                    />
                )}
                <Footer/>
            </div>
        )
    }
}

export default Item