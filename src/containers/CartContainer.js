import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Cart from '../pages/Cart/Cart'
import CartItem from '../pages/Cart/CartItem'
import CartTotal from '../pages/Cart/CartTotal'

import * as actions from '../actions/index'
import * as Message from '../const/message'
class CartContainer extends Component {

  showCartItem = cart => {
    var { onRemoveProduct, onChangeMessage} = this.props
    var res = Message.MSG_CART_EMPTY
    if (cart.length > 0)
      res = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item} 
            onRemoveProduct={onRemoveProduct}
            onChangeMessage={onChangeMessage}/>

        )
      })
    
    return res
  }

  showCartTotal = cart => {
    var res = null
    if(cart.length > 0)
      res = <CartTotal cart={cart} />
    return res
  }

  render() {
    var { cart } = this.props
    console.log(cart)
    return (
      <Cart >
        { this.showCartItem(cart) }
        { this.showCartTotal(cart) }
      </Cart>
    );
  }
}

CartContainer.propTypes = {
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
  })).isRequired
}

const MapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const MapDispatchToProps = (dispatch, props) => {
  return {
    onRemoveProduct: product => {
      dispatch(actions.removeProduct(product))
    },
    
    onChangeMessage: message => {
      dispatch(actions.changeMessage(message))
    },
  }
}


export default connect(MapStateToProps, MapDispatchToProps)(CartContainer);
