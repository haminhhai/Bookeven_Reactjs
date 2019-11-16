import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BookDetail from '../pages/BookDetail/BookDetail'

import * as cartActions from '../actions/cart'
class BookDetailContainer extends Component {

    onAddToCart = (book, quantity) => {
        const { cart, cartActions } = this.props
        const { addToCart } = cartActions
        var checkExist = cart.filter(item => {
            return item.id === book.id
        })
        if (checkExist.length > 0) {
            if (book.iventory > checkExist[0].quantity) {
                if (checkExist[0].quantity + quantity >= book.iventory) {
                    addToCart(book, book.iventory - checkExist[0].quantity)
                    this.$utils.addToCartSuccess()
                }
                else {
                    addToCart(book, quantity)
                    this.$utils.addToCartSuccess()
                }
            }
            else
                this.$utils.addToCartFail()
        }
        else {
            addToCart(book, quantity)
            this.$utils.addToCartSuccess()
        }
    }
    render() {
        const { parent, child, books } = this.props //parent = this.props.parent
        return (
            <BookDetail
                parent={parent}
                child={child}
                detailBook={books.detailBook}
                onAddToCart={this.onAddToCart} />
        );
    }
}

BookDetailContainer.propTypes = {
    detailBook: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            src: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            discount: PropTypes.number.isRequired,
            amount: PropTypes.number.isRequired,
            topic: PropTypes.number.isRequired,
            iventory: PropTypes.number.isRequired,
            rate: PropTypes.number.isRequired,
        })
    ).isRequired,
    cart: PropTypes.arrayOf(PropTypes.shape({
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            src: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            discount: PropTypes.number.isRequired,
            amount: PropTypes.number.isRequired,
            topic: PropTypes.number.isRequired,
            iventory: PropTypes.number.isRequired,
            rate: PropTypes.number.isRequired,
        }).isRequired,
        quantity: PropTypes.number.isRequired
    })).isRequired,
    onAddToCart: PropTypes.func.isRequired,
}


const MapStateToProps = state => {
    return {
        books: state.books,
        cart: state.cart
    }
}

const MapDispatchToProps = dispatch => {
    return {
        cartActions: bindActionCreators(cartActions, dispatch)
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(BookDetailContainer);
