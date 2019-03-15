import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import {Route} from "react-router";
import firebase from "firebase"

import NewHome from './onepirate/Home'
import Terms from './onepirate/Terms'
import Privacy from './onepirate/Privacy'
import Product from './onepirate/Product'
import Donation from './onepirate/Donation'
import Gift from './onepirate/Gift'

let config = {
    apiKey: process.env.REACT_APP_FIRE_API_KEY,
    authDomain: process.env.REACT_APP_FIRE_AUTH_DOMAIN,
    dataBaseURL: process.env.REACT_APP_FIRE_DATA_BASE_URL,
    storageBucket: process.env.REACT_APP_FIRE_STORAGE_BUCKET
};

firebase.initializeApp(config);

ReactDOM.render((
    <BrowserRouter>
        <>
            {/*<Route exact path="/" component={Home} />*/}
            {/*<Route exact path="/login" component={Login} />*/}
            {/*<Route exact path="/item/:id" component={Item}/>*/}
            {/*<Route exact path="/item/:id/buy" component={Donation} />*/}
            <Route exact path="/" component={NewHome} />
            <Route exact path="/terms" component={Terms} />
            <Route exact path="/privacy" component={Privacy} />
            <Route exact path="/products/:id" component={Product} />
            <Route exact path="/products/:id/donate" component={Donation} />
            <Route exact path="/gift/:token" component={Gift}/>
        </>
    </BrowserRouter>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to Donation() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
