import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import Message from '../pages/Cart/Message'

class MessageContainer extends Component {

  render() {
    var {message} = this.props
    return (
      <Message message={message}/>
    );
  }
}

MessageContainer.propTypes = {
  message: PropTypes.string.isRequired
}

const MapStateToProps = state => {
  return {
    message: state.ui.message
  }
}


export default connect(MapStateToProps, null)(MessageContainer);
