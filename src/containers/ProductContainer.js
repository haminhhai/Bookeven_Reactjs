import React, { Component } from 'react'
import { connect } from 'react-redux'

class ProductContainer extends Component {
 


  render() {
    const {products }= this.props
    return (
      
    );
  }
}

const MapStateToProps = state => {
  return {
    products: state.products
  }
}



export default connect(MapStateToProps, null)(ProductContainer);
