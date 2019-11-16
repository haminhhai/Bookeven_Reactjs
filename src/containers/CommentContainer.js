import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Cart from '../pages/Cart/Cart'
import CartItem from '../pages/Cart/CartItem'
import CartTotal from '../pages/Cart/CartTotal'

class CommentContainer extends Component {

  render() {
    var { cart } = this.props
    return (
      <div>

      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
  }
}

const MapDispatchToProps = (dispatch, props) => {
  return {
    
  }
}


export default connect(MapStateToProps, MapDispatchToProps)(CommentContainer);
