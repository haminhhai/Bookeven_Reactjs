import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { BackTop } from 'antd'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import Homepage from '../pages/Homepage'
import CartContainer from '../containers/CartContainer';
import BookDetailContainer from '../containers/BookContainer/BookDetailContainer'
import BookCategoryContainer from '../containers/BookContainer/BookCategoryContainer'
import Account from '../pages/AccountSystem/Account'
import Payment from '../pages/Payment/Payment'
import Footer from '../layouts/Footer/Footer'

import * as bookActions from '../actions/book'
import * as cartActions from '../actions/cart'
import { convertVietnamese } from '../utils/Utils'

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            routes: []
        }
    }

    componentDidMount() {
        var { bookActions, cartActions } = this.props
        const { fetchListBook, fetchListFieldsbook } = bookActions
        const { fetchCart } = cartActions
        fetchListBook()
        fetchListFieldsbook()
        fetchCart()
    }

    generateRoutes() {
        const { listBooks, fieldsBook } = this.props.books
        var routes = [
            {
                path: '/',
                exact: true,
                main: () => <Homepage />
            },
            {
                path: '/cart',
                exact: false,
                main: () => <CartContainer />
            },
            {
                path: '/account',
                exact: false,
                main: () => <Account />
            },
            {
                path: '/search',
                exact: false,
                main: () =><BookCategoryContainer parent='search' />
            },
            {
                path: '/payment',
                exact: false,
                main: () =><Payment />
            }

        ]
        //generate BookCategory routes
        
        var category = []
        if (listBooks !== [])
            fieldsBook.map(item => 
                category.push({
                    path: '/' + convertVietnamese(item.name),
                    exact: false,
                    main: () => <BookCategoryContainer parent={item.name} id={item.id}/>
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
                main: () => <BookDetailContainer parent={field[0].name} id={item.id} />
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
        var { listBooks, fieldsBook } = this.props.books
        if ((listBooks.length > 0 && fieldsBook.length > 0 && !done))
            this.generateRoutes()
        return (
            <Router>
                <div>
                    <BackTop visibilityHeight={100} />
                    <Switch>
                        {routes}
                    </Switch>
                    <Footer />
                </div>
            </Router>
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        bookActions: bindActionCreators(bookActions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);