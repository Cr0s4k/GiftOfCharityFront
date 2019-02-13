import React from 'react'
import TitleBar from "../../components/TitleBar";
import Footer from "../../components/Footer";
import SpecificItem from "../../components/SpecificItem";
import API from '../../services/api/app'

class Item extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            item: {}
        }
    }

    componentDidMount() {
        this.setState({item: API.getItemInformation(this.props.match.params.id)});
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