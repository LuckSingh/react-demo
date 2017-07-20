import React from 'react'
import ReactDOM from 'react-dom'
import '../Less/style'
import { Button, ButtonToolbar } from 'react-bootstrap';
export default class Coupon extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className='container'>
        <ButtonToolbar>
		    <Button bsStyle="primary" bsSize="large" active>Primary button</Button>
		    <Button bsSize="large" active>Button</Button>
		  </ButtonToolbar>
  		</div>;
    }
}