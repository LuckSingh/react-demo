import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'



const OldSchoolMenuLink = ({label, to, activeOnlyWhenExact}) => (
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
        return <div>
        
        <OldSchoolMenuLink activeOnlyWhenExact={true} to="/" label="coupon"/>
      <OldSchoolMenuLink to="/cancell" label="cancell"/>

      </div>;
    }
}



