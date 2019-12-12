import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AccountContainer from '../containers/Account/AccountContainer';
import OrderContainer from '../containers/Account/OrderContainer';
import Footer from '../layouts/Footer/Footer';

const routes = [
    {
        path: '/tai-khoan',
        exact: false,
        main: () => {
            return <React.Fragment>
                <AccountContainer />
                <Footer />
            </React.Fragment>
        }
    },
    {
        path: '/tinh-hinh-don-hang',
        exact: false,
        main: () => {
            return <React.Fragment>
                <OrderContainer />
                <Footer />
            </React.Fragment>
        }
    },
]

export default class CusomerRoute extends Component {
    showComponent = () => {
        var result = null
        result = routes.map((item, index) =>
            <Route
                key={index}
                path={item.path}
                exact={item.exact}
                component={item.main} />
        )
        return result
    }
    render() {
        const role = localStorage.getItem('role');
        return (
            role === '2' ?
                this.showComponent() :
                <Redirect to='/' />

        )

    }
}
