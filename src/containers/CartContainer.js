import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

class CartContainer extends Component {
 


  render() {
    const {products }= this.props
    return (
      
    );
  }
}

CartContainer.PropTypes = {
  cart : PropTypes.arrayOf(
    
  ).isRequired
}

const MapStateToProps = state => {
  return {
    products: state.products
  }
}



export default connect(MapStateToProps, null)(CartContainer);
