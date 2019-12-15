import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

import * as bookActions from '../actions/book'
import Comments from '../components/Comments/Comments';
import InputComment from '../components/Comments/InputComment';

class CommentContainer extends Component {

  render() {
    const { comments, bookActions, authen, info } = this.props
    const { addComment } = bookActions
    return (
      <React.Fragment>
        {
          comments.length > 0 &&
          comments.map((item, index) =>
            <Comments comment={item} key={index} />
          )
        }
        <InputComment addComment={addComment} authen={authen} info={info}/>
      </React.Fragment>
    );
  }
}

CommentContainer.propTypes = {
  comments: PropTypes.array,
  bookActions: PropTypes.shape({
    addComment: PropTypes.func
  })
}

const MapStateToProps = state => {
  return {
    comments: state.books.comments,
    authen: state.auth.authen,
    info: state.account.info
  }
}

const MapDispatchToProps = dispatch => {
  return {
    bookActions: bindActionCreators(bookActions, dispatch)
  }
}


export default connect(MapStateToProps, MapDispatchToProps)(CommentContainer);
