import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BPCard from '../../components/Cards/BookPresentationCard/BookPresentationCard'
import BRCard from '../../components/Cards/BookRateCard/BookRateCard'

import * as cartActions from '../../actions/cart'
import * as bookActions from '../../actions/book'
import * as uiActions from '../../actions/ui'
class BookCardContainer extends Component {
  render() {
    const {   type, book, books, bookActions, info, authen, uiActions, cartActions } = this.props
    const {fieldsBook, detailBook } = books
    const { updateListBook, getDetailBook } = bookActions
    return (
      type === 'bp' ?
        <BPCard
          book={book}
          onAddToCart={cartActions.addToCart}
          fieldsBook={fieldsBook}
          updateListBook={updateListBook}
          role={info.role}
          authen={authen} 
          openModal={uiActions.openModal}
          getDetailBook={getDetailBook}
          detailBook={detailBook} />
        :
        <BRCard book={book} />
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
    books: state.books,
    cart: state.cart,
    info: state.account.info,
    authen: state.auth.authen
  }
}

const MapDispatchToProps = dispatch => {
  return {
    cartActions: bindActionCreators(cartActions, dispatch),
    bookActions: bindActionCreators(bookActions, dispatch),
    uiActions: bindActionCreators(uiActions, dispatch),
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(BookCardContainer);
