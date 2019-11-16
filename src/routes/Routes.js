import React, { Component } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { connect } from 'react-redux'
import { BackTop } from 'antd'
import { bindActionCreators } from 'redux'

import Homepage from '../pages/Homepage'
import BookCategory from '../pages/BookCategory/BookCategory'
import CartContainer from '../containers/CartContainer';
import BookDetailContainer from '../containers/BookDetailContainer'
import AccountCustomer from '../pages/AccountSystem/AccountCustomer'
import Footer from '../layouts/Footer/Footer'

import * as bookActions from '../actions/book'
import * as cartActions from '../actions/cart'

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false,
            routes: []
        }
    }

    componentDidMount() {
        var { bookActions, cartActions} = this.props
        const { fetchListBook , fetchListFieldsbook} = bookActions
        const { fetchCart} = cartActions
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
                main: () => <AccountCustomer />
            },
        ]
        //generate BookCategory routes

        var category = []
        if (listBooks !== [])
            // eslint-disable-next-line array-callback-return
            fieldsBook.map(item => {
                category.push({
                    path: '/' + item.path,
                    exact: false,
                    main: () => <BookCategory parent={item.name} />
                })
            })

        //generate BookDetail routes
        var detail = []
        // eslint-disable-next-line array-callback-return
        listBooks.map(item => {
            var field = fieldsBook.filter(field => {
                return field.id === item.topic
            })
            detail.push({
                path: '/' + item.title,
                exact: false,
                main: () => <BookDetailContainer parent={field[0].name} child={item.title} />
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
        const { done,routes } = this.state
        var { listBooks, fieldsBook } = this.props.books
        if((listBooks.length > 0 && fieldsBook.length > 0 && !done))
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