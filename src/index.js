import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './state/store';
import Root from './components/Root';
import './styles/index.css';

ReactDOM.render((
    <Root store={ store } />
), document.getElementById('root'))
