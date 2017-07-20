import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './router'
ReactDom.render(
    <Routes/>,
    document.getElementById('container')
);

