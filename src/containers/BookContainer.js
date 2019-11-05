import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'

import BPCard from '../components/Cards/BookPresentationCard/BookPresentationCard'
import BRCard from '../components/Cards/BookRateCard/BookRateCard'

import * as actions from '../actions/index'
class BookContainer extends Component {

  render() {
    const { products, index, type, className, onAddToCart } = this.props
    return (
      type === 'bp' ?

        <div className={className}>
          <BPCard product={products[index]} onAddToCart={onAddToCart} />
        </div>
        :
        <BRCard product={products[index]} />
    );
  }
}

BookContainer.propTypes = {
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
    onChangeMessage: PropTypes.func.isRequired
}


const MapStateToProps = state => {
  return {
    products: state.products
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

export default connect(MapStateToProps, MapDispatchToProps)(BookContainer);
