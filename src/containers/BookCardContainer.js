import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BPCard from '../components/Cards/BookPresentationCard/BookPresentationCard'
import BRCard from '../components/Cards/BookRateCard/BookRateCard'

import * as cartActions from '../actions/cart'
class BookCardContainer extends Component {

  onAddToCart = book => {
    const { cart, cartActions } = this.props
    const { addToCart } = cartActions
    var check = []
    if (cart.length > 0)
      check = cart.filter(item => {
        return item.id === book.id
      })
    if (check.length > 0) {
      if (book.iventory > check[0].quantity) {
        addToCart(book, 1)
      }
      else
        this.$utils.addToCartFail()
    }
    else {

      addToCart(book, 1)
      this.$utils.addToCartSuccess()
    }
  }

  render() {
    const { books, index, type, className, fieldsBook } = this.props
    return (
      type === 'bp' ?

        <div className={className}>
          <BPCard book={books[index]} onAddToCart={this.onAddToCart} fieldsBook={fieldsBook} />
        </div>
        :
        <BRCard book={books[index]} />
    );
  }
}

BookCardContainer.propTypes = {
  books: PropTypes.arrayOf(
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
  onChangeMessage: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired
}


const MapStateToProps = state => {
  return {
    books: state.books.listBooks,
    cart: state.cart,
    fieldsBook: state.fieldsBook

  }
}

const MapDispatchToProps = dispatch => {
  return {
    cartActions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(BookCardContainer);
