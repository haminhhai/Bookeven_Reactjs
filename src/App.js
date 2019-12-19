import React, { Component, lazy, Suspense } from 'react';
import { BackTop } from 'antd'
import { ToastContainer } from 'react-toastify'
import { ConnectedRouter } from 'connected-react-router'

import NewBookContainer from './containers/BookContainer/NewBookContainer';
import Spinner from './components/Spinners/Spinner'

import './styles/index.scss'

const Routes = lazy(() =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(import("./routes/Routes")), 3000)
    ))
class App extends Component {
    render() {
        const { history } = this.props
        return (
            <ConnectedRouter history={history}>
                <BackTop visibilityHeight={100} />
                <NewBookContainer />
                <Spinner />
                <ToastContainer />
                <Suspense fallback={<Spinner showSpin={true} />}>
                    <Routes history={history}/>
                </Suspense>
            </ConnectedRouter>
        );
    }
}

export default App;