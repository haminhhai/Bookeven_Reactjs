import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

import * as bookActions from '../actions/book'
import RateForm from '../components/Rate/RateForm';

class RateContainer extends Component {

  render() {
    const { books, bookActions, info } = this.props
    const { rate, detailBook } = books
    return <RateForm rate={rate} rateBook={bookActions.rateBook} detailBook={detailBook} info={info}/>
  }
}

RateContainer.propTypes = {
  comments: PropTypes.array,
  bookActions: PropTypes.shape({
    addComment: PropTypes.func
  })
}

const MapStateToProps = state => {
  return {
    authen: state.auth.authen,
    books: state.books,
    info: state.account.info
  }
}

const MapDispatchToProps = dispatch => {
  return {
    bookActions: bindActionCreators(bookActions, dispatch)
  }
}


export default connect(MapStateToProps, MapDispatchToProps)(RateContainer);
