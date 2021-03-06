import React, {Component} from 'react'
import './style.css'
import TitleBar from '../../components/TitleBar'
import HomeProducts from "../../components/HomeProducts";
import HomeSection from "../../components/HomeSection";
import API from '../../services/API'
import Footer from "../../components/Footer";

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        document.title = "Gift Of Charity"
    }

    componentDidMount() {
        API.getCharityProjects()
        .then(products => {
            this.setState({
                products: products
            })
        });
    }

    render() {
        return(
            <div className="divForFooter">
                <TitleBar />
                <HomeSection />
                <HomeProducts products={this.state.products}/>
                <Footer />
            </div>
        )
    }
}

export default Home;