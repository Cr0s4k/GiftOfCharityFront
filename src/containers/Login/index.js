import React from 'react'
import TitleBar from "../../components/TitleBar";
import Footer from "../../components/Footer";
import LoginForm from "../../components/LoginForm"

class Login extends React.Component {
    constructor(props) {
        super(props);
        document.title = "Login"
    }


    render() {
        return (
            <div className="divForFooter">
                <TitleBar/>
                <LoginForm />
                <Footer/>
            </div>
        )
    }
}

export default Login;