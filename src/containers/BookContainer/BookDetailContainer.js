import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BookDetail from '../../pages/BookDetail/BookDetail'

import * as bookActions from '../../actions/book'
import * as cartActions from '../../actions/cart'
class BookDetailContainer extends Component {

    componentDidMount() {
        const { bookActions, path } = this.props
        var id = this.$utils.getNumberFromString(path)
        if (typeof id === 'number')
            bookActions.getDetailBook({ id: id })
        
        bookActions.getListComments({ id: id })

    }
    render() {
        const { books, role, bookActions, history, cartActions } = this.props //parent = this.props.parent
        const { fieldsBook, filtedBook, detailBook, rate } = books
        const { updateListBook, getDetailBook, getListRate } = bookActions
        return (
            <BookDetail
                filtedBook={filtedBook}
                detailBook={detailBook}
                onAddToCart={cartActions.addToCart}
                updateListBook={updateListBook}
                role={role}
                fieldsBook={fieldsBook}
                getDetailBook={getDetailBook}
                history={history}
                getListRate={getListRate}
                rate={rate} />
        );
    }
}

BookDetailContainer.propTypes = {
    detailBook: PropTypes.object,
    cart: PropTypes.array,
    cartActions: PropTypes.shape({
        addToCart: PropTypes.func,
    }),
    bookActions: PropTypes.shape({
        getDetailBook: PropTypes.func,
        getListComments: PropTypes.func
    })
}


const MapStateToProps = state => {
    return {
        books: state.books,
        cart: state.cart,
        role: state.account.info.role,
        path: state.router.location.pathname,
    }
}

const MapDispatchToProps = dispatch => {
    return {
        cartActions: bindActionCreators(cartActions, dispatch),
        bookActions: bindActionCreators(bookActions, dispatch),
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(BookDetailContainer);
