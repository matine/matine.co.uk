import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './js/store';
import Root from './js/Root';
import './styles/index.css';

ReactDOM.render((
    <Root store={ store } />
), document.getElementById('root'))
