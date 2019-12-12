import React, { Component, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router'

import "@fortawesome/fontawesome-free/css/all.min.css";

import "mdbreact/dist/css/mdb.css";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'jquery/dist/jquery.min.js'

import 'antd/dist/antd.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-image-lightbox/style.css';

import App from './App';
import { BackTop } from 'antd'
import NewBookContainer from './containers/BookContainer/NewBookContainer';

import * as utils from './utils/Utils'

import { Provider } from 'react-redux'
import configureStore, { history } from './redux/configureStore'


import { ToastContainer } from 'react-toastify'
import Spinner from './components/Spinners/Spinner'
// import Routes from './routes/Routes'

import './styles/index.scss'

const role = localStorage.getItem('role')
const Routes = lazy(() =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(import("./routes/Routes")), 3000)
    ))
global.$utils = utils
Component.prototype.$utils = global.$utils
const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <BackTop visibilityHeight={100} />
            {role === '2' && <NewBookContainer />}
            <Spinner />
            <ToastContainer />
            <Suspense fallback={<Spinner showSpin={true} />}>
                <Routes />
            </Suspense>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);