import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BookDetail from '../../pages/BookDetail/BookDetail'

import * as bookActions from '../../actions/book'
import * as cartActions from '../../actions/cart'
class BookDetailContainer extends Component {

    onAddToCart = (book, quantity) => {
        const { cart, cartActions } = this.props
        const { addToCart } = cartActions
        var checkExist = cart.filter(item => {
            return item.id === book.id
        })
        if (checkExist.length > 0) {
            if (book.inventory > checkExist[0].quantity) {
                if (checkExist[0].quantity + quantity >= book.inventory) {
                    addToCart(book, book.inventory - checkExist[0].quantity)
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

    componentDidMount() {
        const { bookActions, id } = this.props
        bookActions.getDetailBook(id)

    }
    render() {
        const { parent, detailBook } = this.props //parent = this.props.parent
        return (
            <BookDetail
                parent={parent}
                detailBook={detailBook}
                onAddToCart={this.onAddToCart} />
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
        getDetailBook: PropTypes.func
    })
}


const MapStateToProps = state => {
    return {
        detailBook: state.books.detailBook,
        cart: state.cart
    }
}

const MapDispatchToProps = dispatch => {
    return {
        cartActions: bindActionCreators(cartActions, dispatch),
        bookActions: bindActionCreators(bookActions, dispatch)
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(BookDetailContainer);
