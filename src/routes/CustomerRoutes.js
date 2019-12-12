import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CartContainer from '../containers/CartContainer';
import AccountContainer from '../containers/Account/AccountContainer';
import PaymentContainer from '../containers/Account/PaymentContainer';
import OrderContainer from '../containers/Account/OrderContainer';
import Footer from '../layouts/Footer/Footer';

const routes = [
    {
        path: '/tai-khoan',
        exact: false,
        main: (match) => {
            return <Fragment>
                <AccountContainer match={match} />
                <Footer />
            </Fragment>
        },
    },
    {
        path: '/lich-su-mua-hang',
        exact: false,
        main: () => {
            return <Fragment>
                <OrderContainer />
                <Footer />
            </Fragment>
        }
    },
    {
        path: '/gio-hang',
        exact: false,
        main: () => {
            return <Fragment>
                <CartContainer />
                <Footer />
            </Fragment>
        }
    },
    {
        path: '/thanh-toan',
        exact: false,
        main: () => {
            return <Fragment>
                <PaymentContainer />
                <Footer />
            </Fragment>
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
            <Fragment>
                {
                    role === '1' ?
                        this.showComponent() :
                        <Redirect to='/' />
                }
            </Fragment>
        )

    }
}
