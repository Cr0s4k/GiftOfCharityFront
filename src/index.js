import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './containers/Gift';
import Home from './containers/Home'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import {Route} from "react-router";
import Item from "./containers/Item";
import Login from "./containers/Login"
import Donation from "./containers/Donation";
import firebase from "firebase"

let config = {
    apiKey: "AIzaSyBNRIz7AMCLZmDGLWKTEIeNyorReFTyuy0",
    authDomain: "giftofcharity-ab752.firebaseapp.com",
    dataBaseURL: "https://giftofcharity-ab752.firebaseio.com",
    storageBucket: "giftofcharity-ab752.appspot.com"
};
firebase.initializeApp(config);

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/item/:id" component={Item}/>
            <Route exact path="/item/:id/buy" component={Donation} />
            <Route exact path="/gift/:code" component={Index}/>
        </div>
    </BrowserRouter>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to Donation() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
