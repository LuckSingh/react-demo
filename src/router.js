import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './main/home/index'
import Cancellation from './main/cancellation/index'
import Coupons from './main/coupons/index'
import Layout from './main/layout'
const Routes = () => (
    <Router>
    <div>
      <Layout/>
      <Route exact path="/" component={Home}/>
      <Route path="/cancellation" component={Cancellation}/>
      <Route path="/coupons" component={Coupons}/>
    </div>
  </Router>
)
export default Routes