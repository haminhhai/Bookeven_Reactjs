import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AccountContainer from '../containers/AccountContainer';

const routes = [
    {
        path: '/account',
        exact: false,
        main:() => <AccountContainer />
    }
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
