import React from 'react'
import TitleBar from "../../components/TitleBar";
import Footer from "../../components/Footer";
import SpecificItem from "../../components/SpecificItem";
import API from '../../services/API'

class Item extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        }
    }

    componentDidMount() {
        API.getCharityProject(this.props.match.params.id)
            .then(item => {
                console.log(item);
                this.setState({ item: item })
            });
    }

    render() {
        document.title = this.state.item !== undefined ? this.state.item.name : "";
        return(
            <div className="divForFooter">
                <TitleBar/>
                <SpecificItem item={this.state.item}/>
                <Footer/>
            </div>
        )
    }
}

export default Item