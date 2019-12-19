import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

import * as bookActions from '../actions/book'
import RateForm from '../components/Rate/RateForm';

class RateContainer extends Component {

  render() {
    const { disabled } = this.props
    return <RateForm disabled/>
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
  }
}

const MapDispatchToProps = dispatch => {
  return {
    bookActions: bindActionCreators(bookActions, dispatch)
  }
}


export default connect(MapStateToProps, MapDispatchToProps)(RateContainer);
