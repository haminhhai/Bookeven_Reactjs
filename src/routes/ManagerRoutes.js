import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AccountContainer from '../containers/Account/AccountContainer';
import OrderContainer from '../containers/Account/OrderContainer';

const routes = [
    {
        path: '/tai-khoan',
        exact: false,
        main:() => <AccountContainer />
    },
    {
        path: '/tinh-hinh-don-hang',
        exact: false,
        main:() => <OrderContainer />
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
                    role === '2' ?
                    this.showComponent() :
                    <Redirect to='/'/>
                }
            </React.Fragment>
        )

    }
}
