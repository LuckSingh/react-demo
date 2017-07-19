import React from 'react';
import ReactDom from 'react-dom';
import {
	Router,
	Route,
	hashHistory
} from 'react-router'
//import routers from './routers.js';
import App from './main/app/index';
import Coupons from './main/coupons/index';
import Cancellation from './main/cancellation/index';
ReactDom.render(
	<Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/coupons" component={Coupons}/>
    <Route path="/cancellation" component={Cancellation}/>
  </Router>,


	document.getElementById('container')
);