import React, { Component, Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Footer from '../layouts/Footer/Footer';

export default class CusomerRoute extends Component {
    render() {
        const { role, component: MyComponent, ...remainProps } = this.props
        return (
            <Route
                {...remainProps}
                render={routeProps => {
                    return (
                        role === 2 ?
                            <Fragment>
                                <MyComponent {...routeProps} />
                                <Footer />
                            </Fragment> :
                            <Redirect to="/" />
                    )
                }}
            />
        )

    }
}
