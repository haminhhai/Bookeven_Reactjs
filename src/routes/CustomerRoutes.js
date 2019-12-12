import React, { Component } from 'react';
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
            return <React.Fragment>
                <AccountContainer match={match} />
                <Footer />
            </React.Fragment>
        },
    },
    {
        path: '/lich-su-mua-hang',
        exact: false,
        main: () => {
            return <React.Fragment>
                <OrderContainer />
                <Footer />
            </React.Fragment>
        }
    },
    {
        path: '/gio-hang',
        exact: false,
        main: () => {
            return <React.Fragment>
                <CartContainer />
                <Footer />
            </React.Fragment>
        }
    },
    {
        path: '/thanh-toan',
        exact: false,
        main: () => {
            return <React.Fragment>
                <PaymentContainer />
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
