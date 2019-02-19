import React from 'react'
import TitleBar from "../../components/TitleBar";
import Footer from "../../components/Footer";
import RegisterForm from "../../components/RegisterForm"
import './style.css'

class Register extends React.Component {
    constructor(props) {
        super(props);
        document.title = "Register"
    }


    render() {
        return(
            <div className="divForFooter">
                <TitleBar/>
                <RegisterForm/>
                <Footer/>
            </div>
        )

    }
}

export default Register;