import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import Cart from '../pages/Cart/Cart'
import CartItem from '../pages/Cart/CartItem'
import CartTotal from '../pages/Cart/CartTotal'

import * as cartActions from '../actions/cart'
class CartContainer extends Component {

  showCartItem = cart => {
    var { cartActions } = this.props
    const { updateCart, removeCart } = cartActions
    var res = null
    if (cart.length > 0)
      res = cart.map((item, index) => {
        return <CartItem
            key={index}
            item={item}
            onRemoveProduct={removeCart}
            onUpdateProduct={updateCart} />
      })

    return res
  }

  showCartTotal = cart => {
    var res = null
    if (cart.length > 0)
      res = <CartTotal cart={cart} />
    return res
  }

  render() {
    var { cart } = this.props
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showCartTotal(cart)}
      </Cart>
    );
  }
}

CartContainer.propTypes = {
  cart: PropTypes.array,
  cartActions: PropTypes.shape({
    updateCart: PropTypes.func,
    removeCart: PropTypes.func,
  }),
}

const MapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const MapDispatchToProps = dispatch => {
  return {
    cartActions: bindActionCreators(cartActions, dispatch)
  }
}


export default connect(MapStateToProps, MapDispatchToProps)(CartContainer);
