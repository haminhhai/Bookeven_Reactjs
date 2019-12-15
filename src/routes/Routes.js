import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import Homepage from '../pages/Homepage'
import BookDetailContainer from '../containers/BookContainer/BookDetailContainer'
import BookCategoryContainer from '../containers/BookContainer/BookCategoryContainer'
import Footer from '../layouts/Footer/Footer'

import * as bookActions from '../actions/book'
import * as cartActions from '../actions/cart'
import * as accActions from '../actions/account'
import { convertVietnamese } from '../utils/Utils'
import CustomerRoutes from './CustomerRoutes'
import ManagerRoutes from './ManagerRoutes'
import NotFound from '../pages/NotFound';
import ManSignup from '../pages/ManSignup';

import axiosService from '../utils/axiosService'

var routes = [
    {
        path: '/',
        exact: true,
        main: () => {
            return <React.Fragment>
                <Homepage />
                <Footer />
            </React.Fragment>
        }
    },
    {
        path: '/search',
        exact: false,
        main: () => {
            return <React.Fragment>
                <BookCategoryContainer parent='search' />
                <Footer />
            </React.Fragment>
        }
    },
    {
        path: '/dang-ky-cho-quan-ly',
        exact: false,
        main: () => {
            return <ManSignup />
        }
    },
]
class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            routes: []
        }
    }

    componentDidMount() {
        var { bookActions, cartActions, accActions, authen } = this.props
        const { fetchListBook, fetchListFieldsbook } = bookActions
        const { fetchCart } = cartActions
        const { getUser } = accActions
        fetchListBook()
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

    generateRoutes() {
        const { listBooks, fieldsBook } = this.props.books

        //generate BookCategory routes
        var category = []
        if (listBooks !== [])
            fieldsBook.map(item =>
                category.push({
                    path: '/' + convertVietnamese(item.name),
                    exact: false,
                    main: () => {
                        return <React.Fragment>
                            <BookCategoryContainer parent={item.name} id={item.id} />
                            <Footer />
                        </React.Fragment>
                    }
                })
            )

        //generate BookDetail routes
        var detail = []
        listBooks.map(item => {
            var field = fieldsBook.filter(field => {
                return field.id === item.topic
            })
            return detail.push({
                path: '/' + convertVietnamese(item.title),
                exact: false,
                main: () => {
                    return <React.Fragment>
                        <BookDetailContainer parent={field[0].name} id={item.id} />
                        <Footer />
                    </React.Fragment>
                }
            })
        })
        category.map(item =>
            routes.push(item)
        )
        detail.map(item =>
            routes.push(item)
        )
        var result = null;
        result = routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main} />
            );
        })
        this.setState({
            done: true,
            routes: result
        })
    }
    render() {
        const { done, routes } = this.state
        const { info, books } = this.props
        var { listBooks, fieldsBook } = books
        if ((listBooks.length > 0 && fieldsBook.length > 0 && !done))
            this.generateRoutes()
        return (
            <Switch>
                {routes}
                {
                    info.role === 1 ?
                        <CustomerRoutes role={info.role} /> :
                        <ManagerRoutes role={info.role} />
                }
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
        books: state.books,
        info: state.account.info,
        authen: state.auth.authen
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