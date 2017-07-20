import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Cancell from '../Cancell/Cancell'
import Coupon from '../Coupon/Coupon'
import Layout from '../Common/Layout'
const Routes = () => (
    <Router>
    <div>
      <Layout/>
      <Route exact path="/" component={Coupon}/>
      <Route path="/cancell" component={Cancell}/>
    </div>
  </Router>
)
export default Routes