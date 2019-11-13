import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import BPCard from '../components/Cards/BookPresentationCard/BookPresentationCard'
import BRCard from '../components/Cards/BookRateCard/BookRateCard'

import * as actions from '../actions/index'
class BookCardContainer extends Component {

  checkIventory = book => {
    const { cart, onAddToCart } = this.props
    var check = cart.filter(item => {
      return item.product.id === book.id
    })
    if (check.length > 0) {
      if (book.iventory > check[0].quantity) {
        onAddToCart(book)
        this.$utils.addToCartSuccess()
      }
      else
        this.$utils.addToCartFail()
    }
    else {

      onAddToCart(book)
      this.$utils.addToCartSuccess()
    }
  }
  render() {
    const { products, index, type, className } = this.props
    return (
      type === 'bp' ?

        <div className={className}>
          <BPCard product={products[index]} checkIventory={this.checkIventory} />
        </div>
        :
        <BRCard product={products[index]} />
    );
  }
}

BookCardContainer.propTypes = {
  products: PropTypes.arrayOf(
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
    products: state.products,
    cart: state.cart

  }
}

const MapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart: product => {
      dispatch(actions.addToCart(product, 1))
    },
    onRemoveItem: product => {
      dispatch(actions.removeProduct(product))
    }
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(BookCardContainer);
