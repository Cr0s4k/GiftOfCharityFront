import React from 'react';
import ReactDOM from 'react-dom';
import Index from '.';
import { BrowserRouter } from 'react-router-dom'
import {Route} from "react-router";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <BrowserRouter>
       <Route exact path="/gift/:code" component={Index}/>
      </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
