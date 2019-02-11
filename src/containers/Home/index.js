import React, {Component} from 'react'
import './style.css'
import TitleBar from '../../components/TitleBar'
import HomeProducts from "../../components/HomeProducts";
import HomeSection from "../../components/HomeSection";
import API from '../../services/api/app'

class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.setState({products: API.getAvailableGifts()})
    }

    render() {
        return(
            <div>
                <TitleBar />
                <HomeSection />
                <HomeProducts products={this.state.products}/>
            </div>
        )
    }
}

export default Home;