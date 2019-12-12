import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import Cart from '../pages/Cart/Cart'
import CartItem from '../pages/Cart/CartItem'
import CartTotal from '../pages/Cart/CartTotal'

import * as Message from '../const/message'
import * as cartActions from '../actions/cart'
import * as uiActions from '../actions/ui'
class CartContainer extends Component {

  showCartItem = cart => {
    var { cartActions, uiActions } = this.props
    const { changeMessage } = uiActions
    const { updateCart, removeCart } = cartActions
    var res = Message.MSG_CART_EMPTY
    if (cart.length > 0)
      res = cart.map((item, index) => {
        return <CartItem
            key={index}
            item={item}
            onRemoveProduct={removeCart}
            onChangeMessage={changeMessage}
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
  uiActions: PropTypes.shape({
    changeMessage: PropTypes.func
  }),
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
    uiActions: bindActionCreators(uiActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch)
  }
}


export default connect(MapStateToProps, MapDispatchToProps)(CartContainer);
