import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BookDetail from '../../pages/BookDetail/BookDetail'

import * as bookActions from '../../actions/book'
import * as cartActions from '../../actions/cart'
class BookDetailContainer extends Component {

    onAddToCart = (book, amount) => {
        const { cart, cartActions } = this.props
        const { addToCart } = cartActions
        var checkExist = cart.filter(item => {
            return item.id === book.id
        })
        if (checkExist.length > 0) {
            if (book.inventory > checkExist[0].amount) {
                if (checkExist[0].amount + amount >= book.inventory) {
                    addToCart(book, book.inventory - checkExist[0].amount)
                }
                else {
                    addToCart(book, amount)
                }
            }
        }
        else {
            addToCart(book, amount)
        }
    }

    componentDidMount() {
        const { bookActions, path } = this.props
        var id = this.$utils.getNumberFromString(path)
        if (typeof id === 'number')
            bookActions.getDetailBook({ id: id })
        
        bookActions.getListComments(id)

    }
    render() {
        const { detailBook, role, bookActions, fieldsBook, filtedBook, history } = this.props //parent = this.props.parent
        const { updateListBook, getDetailBook } = bookActions
        return (
            <BookDetail
                filtedBook={filtedBook}
                detailBook={detailBook}
                onAddToCart={this.onAddToCart}
                updateListBook={updateListBook}
                role={role}
                fieldsBook={fieldsBook}
                getDetailBook={getDetailBook}
                history={history} />
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
        detailBook: state.books.detailBook,
        filtedBook: state.books.filtedBook,
        cart: state.cart,
        role: state.account.info.role,
        fieldsBook: state.books.fieldsBook,
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
