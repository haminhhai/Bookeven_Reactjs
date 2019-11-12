import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import BookDetail from '../pages/BookDetail/BookDetail'

import * as actions from '../actions/index'
class BookDetailContainer extends Component {

    checkIventory = (book, quantity) => {
        const { cart, onAddToCart } = this.props
        console.log(book, quantity)
        var checkExist = cart.filter(item => {
            return item.product.id === book.id

        })
        if (checkExist.length > 0) {
            if (book.iventory > checkExist[0].quantity) {
                if (checkExist[0].quantity + quantity >= book.iventory) {
                    onAddToCart(book, book.iventory - checkExist[0].quantity)
                    this.$utils.addToCartSuccess()
                }
                else {
                    onAddToCart(book, quantity)
                    this.$utils.addToCartSuccess()
                }
            }
            else
                this.$utils.addToCartFail()
        }
        else {
            onAddToCart(book, quantity)
            this.$utils.addToCartSuccess()
        }
    }
    render() {
        const { parent, child, detailBook } = this.props //parent = this.props.parent
        return (
            <BookDetail
                parent={parent}
                child={child}
                detailBook={detailBook}
                checkIventory={this.checkIventory} />
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
    onAddToCart: PropTypes.func.isRequired,
}


const MapStateToProps = state => {
    return {
        detailBook: state.detailBook,
        cart: state.cart
    }
}

const MapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product, quantity) => {
            dispatch(actions.addToCart(product, quantity))
        }
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(BookDetailContainer);
