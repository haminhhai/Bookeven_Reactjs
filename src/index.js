import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import 'antd/dist/antd.css';
import Homepage from './pages/Home/Homepage';


import utils from './utils/Utils'
global.$utils = utils
Component.prototype.$utils = global.$utils
ReactDOM.render(<Homepage />, document.getElementById('root'));

