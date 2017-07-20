import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

export default class Layout extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cancellation">cancellation</Link></li>
        <li><Link to="/coupons">coupons</Link></li>
      </ul>;
    }
}

