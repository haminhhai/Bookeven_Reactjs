import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BPCard from '../../components/Cards/BookPresentationCard/BookPresentationCard'
import BRCard from '../../components/Cards/BookRateCard/BookRateCard'

import * as cartActions from '../../actions/cart'
import * as bookActions from '../../actions/book'
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
      if (book.inventory > check[0].quantity) {
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
    const { listBooks, index, type, book, fieldsBook, bookActions } = this.props
    const { updateListBook, fetchListBook } = bookActions
    return (
      type === 'bp' ?

          <BPCard book={book} onAddToCart={this.onAddToCart} fieldsBook={fieldsBook} updateListBook={updateListBook} fetchListBook={fetchListBook}/>
        :
        <BRCard book={listBooks[index]} />
    );
  }
}

BookCardContainer.propTypes = {
  listBooks: PropTypes.array,
  cart: PropTypes.array,
  fieldsBook: PropTypes.array,
  cartActions: PropTypes.shape({
    addToCart: PropTypes.func,
  }),
  bookActions: PropTypes.shape({
    updateListBook: PropTypes.func
  })
}


const MapStateToProps = state => {
  return {
    listBooks: state.books.listBooks,
    cart: state.cart,
    fieldsBook: state.books.fieldsBook

  }
}

const MapDispatchToProps = dispatch => {
  return {
    cartActions: bindActionCreators(cartActions, dispatch),
    bookActions: bindActionCreators(bookActions, dispatch)
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(BookCardContainer);
