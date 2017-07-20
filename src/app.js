import React from 'react';
import ReactDom from 'react-dom';
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()
	//import routers from './routers.js';
import App from './main/app/index';
import Coupons from './main/coupons/index';
import Cancellation from './main/cancellation/index';
ReactDom.render(
	<Router history={customHistory}>
    <Route path="/" component={App}/>
    <Route path="/coupons" component={Coupons}/>
    <Route path="/cancellation" component={Cancellation}/>
  </Router>,


	document.getElementById('container')
);