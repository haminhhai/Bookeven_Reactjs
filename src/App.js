import React, { Component, Fragment } from 'react';
import { ToastContainer } from 'react-toastify'

import Routes from './routes/Routes'
class App extends Component {
    render() {
        return (
            <Fragment>
                <ToastContainer />
                <Routes />
            </Fragment>
        );
    }
}

export default App