import React, { Component } from 'react'
import { connect } from 'react-redux'

import BPCard from '../components/Cards/BookPresentationCard/BookPresentationCard'
import BRCard from '../components/Cards/BookRateCard/BookRateCard'
class BookContainer extends Component {

  render() {
    const { products, index, type } = this.props
    return (
      type === 'bp' ?

        <BPCard book={products[index]} />
        :
        <BRCard book={products[index]} />
    );
  }
}

const MapStateToProps = state => {
  return {
    products: state.products
  }
}



export default connect(MapStateToProps, null)(BookContainer);
