import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import "@fortawesome/fontawesome-free/css/all.min.css";

import "mdbreact/dist/css/mdb.css";

import 'antd/dist/antd.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App';

import utils from './utils/Utils'


global.$utils = utils
Component.prototype.$utils = global.$utils
AOS.init();

ReactDOM.render(<App />, document.getElementById('root'));

