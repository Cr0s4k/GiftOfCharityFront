import React from 'react'
import TitleBar from "../../components/TitleBar";
import Footer from "../../components/Footer";
import DonationForm from "../../components/DonationForm"
import './style.css'

class Register extends React.Component {
    constructor(props) {
        super(props);
        document.title = "Donation"
    }


    render() {
        return(
            <div className="divForFooter">
                <TitleBar/>
                <DonationForm itemId={parseInt(this.props.match.params.id)}/>
                <Footer/>
            </div>
        )

    }
}

export default Register;