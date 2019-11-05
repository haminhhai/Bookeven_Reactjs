import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Cart from '../pages/Cart/Cart'
import CartItem from '../pages/Cart/CartItem'

import * as Message from '../const/message'
class CartContainer extends Component {

  showCartItem = cart => {
    var res = Message.MSG_CART_EMPTY
    if (cart.length > 0)
      res = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item} />

        )
      })
    
    return res
  }

  render() {
    var { cart } = this.props
    return (
      <Cart>
        { this.showCartItem(cart) }
      </Cart>
    );
  }
}


CartContainer.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.shape({
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
  })).isRequired
}

const MapStateToProps = state => {
  return {
    cart: state.cart
  }
}



export default connect(MapStateToProps, null)(CartContainer);
