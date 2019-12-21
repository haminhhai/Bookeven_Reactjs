import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'


import * as bookActions from '../actions/book'
import * as cartActions from '../actions/cart'
import * as accActions from '../actions/account'
import CustomerRoutes from './CustomerRoutes'
import ManagerRoutes from './ManagerRoutes'
import NotFound from '../pages/NotFound';
import DefaultRoutes from './DefaultRoutes'

import axiosService from '../utils/axiosService'

import { DEFAULT_ROUTES, CUSTOMER_ROUTES, MANAGER_ROUTES } from '../const/config'

class Routes extends Component {

    renderManagerRoutes() {
        const { info } = this.props
        let xhtml = null;
        xhtml = MANAGER_ROUTES.map((item, index) => {
            return (
                <ManagerRoutes
                    component={item.component}
                    exact={item.exact}
                    key={index}
                    path={item.path}
                    role={info.role}
                />
            );
        });
        return xhtml;
    }

    renderCustomerRoutes() {
        const { info } = this.props
        let xhtml = null;
        xhtml = CUSTOMER_ROUTES.map((item, index) => {
            return (
                <CustomerRoutes
                    component={item.component}
                    exact={item.exact}
                    key={index}
                    path={item.path}
                    role={info.role}
                />
            );
        });
        return xhtml;
    }

    renderDefaultRoutes() {
        let xhtml = null;
        xhtml = DEFAULT_ROUTES.map((item, index) => {
            return (
                <DefaultRoutes
                    component={item.component}
                    exact={item.exact}
                    key={index}
                    path={item.path}
                    parent={item.path === '/search' ? 'search' : ''}
                />
            );
        });
        return xhtml;
    }

    componentDidMount() {
        var { bookActions, cartActions, accActions, authen } = this.props
        const {  fetchListFieldsbook } = bookActions
        const { fetchCart } = cartActions
        const { getUser } = accActions
        fetchListFieldsbook()
        const token = localStorage.getItem('TOKEN');
        const email = localStorage.getItem('EMAIL');
        const id = localStorage.getItem('ID');
        if (token && email && id) {
            axiosService.setHeader('authorization', `Bearer ${token}`)
            axiosService.setHeader('email', email)
            axiosService.setHeader('id', id)
        }
        id && getUser()
        if (authen)
            fetchCart()
    }
    render() {
        return (
            <Switch>
                {this.renderManagerRoutes()}
                {this.renderCustomerRoutes()}
                {this.renderDefaultRoutes()}
                <Route exact path="/404" component={NotFound} />
                <Redirect to="/404" />
            </Switch>
        );
    }
}

Routes.propTypes = {
    books: PropTypes.object,
    bookActions: PropTypes.shape({
        fetchListFieldsbook: PropTypes.func,
        fetchListBook: PropTypes.func
    }),
    cartActions: PropTypes.shape({
        fetchCart: PropTypes.func
    })
}

const mapStateToProps = state => {
    return {
        info: state.account.info,
        authen: state.auth.authen,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        bookActions: bindActionCreators(bookActions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch),
        accActions: bindActionCreators(accActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);