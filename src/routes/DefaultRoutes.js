import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import Footer from '../layouts/Footer/Footer'

export default class DefaultRoutes extends Component {
    render() {
        const { path, component: MyComponent, ...remainProps } = this.props
        return (
            <Route
                {...remainProps}
                render={routeProps => {
                    return (
                        path !== '/dang-ky-cho-quan-ly' ? 
                        <Fragment>
                            <MyComponent {...routeProps} />
                            <Footer />
                        </Fragment> :
                        <MyComponent {...routeProps} />
                    )
                }}
            />
        )

    }
}
