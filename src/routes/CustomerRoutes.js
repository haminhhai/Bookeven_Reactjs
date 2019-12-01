import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CartContainer from '../containers/CartContainer';
import AccountContainer from '../containers/Account/AccountContainer';
import PaymentContainer from '../containers/Account/PaymentContainer';
import OrderContainer from '../containers/Account/OrderContainer';

const routes = [
    {
        path: '/tai-khoan',
        exact: false,
        main: (match) => <AccountContainer match={match}/>,
    },
    {
        path: '/lich-su-mua-hang',
        exact: false,
        main: () => <OrderContainer />
    },
    {
        path: '/gio-hang',
        exact: false,
        main: () => <CartContainer />
    },
    {
        path: '/thanh-toan',
        exact: false,
        main: () => <PaymentContainer />
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
