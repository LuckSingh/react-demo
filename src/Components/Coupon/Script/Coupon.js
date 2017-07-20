import React from 'react'
import ReactDOM from 'react-dom'
import '../Less/style'
import { Button, ButtonToolbar } from 'react-bootstrap';
import CouponList from './CouponList'
export default class Coupon extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className='container'>
        <CouponList/>
  		</div>;
    }
}