import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";

import "mdbreact/dist/css/mdb.css";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'

import 'antd/dist/antd.css';

import App from './App';

import * as utils from './utils/Utils'

import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'

import './styles/index.scss'


global.$utils = utils
Component.prototype.$utils = global.$utils
const store = configureStore()
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);