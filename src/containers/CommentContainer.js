import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import { Skeleton } from 'antd';

import * as bookActions from '../actions/book'
import Comments from '../components/Comments/Comments';
import InputComment from '../components/Comments/InputComment';

class CommentContainer extends Component {

  render() {
    const { books, bookActions, authen, info } = this.props
    const { comments, detailBook } = books
    const { addComment, updateComment, deleteComment } = bookActions
    return (
      <React.Fragment>
        {
          comments.length > 0 &&
          comments.map((item, index) =>
            <Skeleton avatar loading={false} active key={index}>
              <Comments 
                comment={item}
                updateComment={updateComment}
                deleteComment={deleteComment}
                info={info} />
            </Skeleton>
          )
        }
        <InputComment addComment={addComment} authen={authen} info={info} detailBook={detailBook}/>
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
    books: state.books,
    authen: state.auth.authen,
    info: state.account.info,
  }
}

const MapDispatchToProps = dispatch => {
  return {
    bookActions: bindActionCreators(bookActions, dispatch)
  }
}


export default connect(MapStateToProps, MapDispatchToProps)(CommentContainer);
