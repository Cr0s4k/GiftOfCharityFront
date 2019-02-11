import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Index from './containers/Gift';
import Home from './containers/Home'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import {Route} from "react-router";
import Item from "./containers/Item";

ReactDOM.render((
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/item/:id" component={Item}/>
            <Route exact path="/gift/:code" component={Index}/>
        </div>
    </BrowserRouter>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
