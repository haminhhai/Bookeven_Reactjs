import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CartContainer from '../containers/CartContainer';
import Payment from '../pages/Payment/Payment';
import InvoiceCustomer from '../pages/Invoice/InvoiceCustomer';
import AccountContainer from '../containers/AccountContainer';

const routes = [
    {
        path: '/account',
        exact: false,
        main: (match) => <AccountContainer match={match}/>,
    },
    {
        path: '/history',
        exact: false,
        main: () => <InvoiceCustomer />
    },
    {
        path: '/gio-hang',
        exact: true,
        main: () => <CartContainer />
    },
    {
        path: '/gio-hang/payment',
        exact: true,
        main: () => <Payment />
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
            <React.Fragment>
                {
                    role === '1' ?
                        this.showComponent() :
                        <Redirect to='/' />
                }
            </React.Fragment>
        )

    }
}
