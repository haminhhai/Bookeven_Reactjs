import React, { Component, Fragment } from 'react';
import { ToastContainer } from 'react-toastify'
import Spinner from './components/Spinners/Spinner'
import Routes from './routes/Routes'
class App extends Component {
    render() {
        return (
            <Fragment>
                <Spinner />
                <ToastContainer />
                <Routes />
            </Fragment>
        );
    }
}

export default App