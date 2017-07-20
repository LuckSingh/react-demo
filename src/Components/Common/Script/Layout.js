import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import '../Less/style'


const MenuLink = ({label, to, activeOnlyWhenExact}) => (
    <Route path={to} exact={activeOnlyWhenExact} children={({match}) => (
        <div className={match ? 'active' : ''}>
      <Link to={to}>{label}</Link>
    </div>
    )}/>
)

export default class Layout extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className='menu'>
        <MenuLink activeOnlyWhenExact={true} to="/" label="卡券"/>
      <MenuLink to="/cancell" label="核销"/>

      </div>;
    }
}



