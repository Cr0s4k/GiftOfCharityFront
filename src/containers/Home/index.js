import React, {Component} from 'react'
import './style.css'
import TitleBar from '../../components/TitleBar'
import HomeProducts from "../../components/HomeProducts";
import HomeSection from "../../components/HomeSection";
import API from '../../services/api/app'
import Footer from "../../components/Footer";

class Home extends Component{
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
        document.title = "Gift Of Charity"
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
                <Footer />
            </div>
        )
    }
}

export default Home;