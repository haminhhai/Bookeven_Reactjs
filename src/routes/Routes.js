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
import { convertVietnamese } from '../utils/Utils'
import CustomerRoutes from './CustomerRoutes'
import ManagerRoutes from './ManagerRoutes'
import NotFound from '../pages/NotFound';

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
        var { bookActions, cartActions } = this.props
        const { fetchListBook, fetchListFieldsbook } = bookActions
        const { fetchCart } = cartActions
        fetchListBook()
        fetchListFieldsbook()
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
        var { listBooks, fieldsBook } = this.props.books
        if ((listBooks.length > 0 && fieldsBook.length > 0 && !done))
            this.generateRoutes()
        return (
            <Switch>
                {routes}
                <CustomerRoutes />
                <ManagerRoutes />
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
    }
}

const mapDispatchToProps = dispatch => {
    return {
        bookActions: bindActionCreators(bookActions, dispatch),
        cartActions: bindActionCreators(cartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);