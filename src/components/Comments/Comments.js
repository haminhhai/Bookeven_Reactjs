import React from 'react';
import { Comment, Icon, Tooltip } from 'antd';
import moment from 'moment';
import AvatarUser from '../AvatarUser/AvatarUser';

import './style.scss'
import { MDBIcon } from 'mdbreact';
class Comments extends React.Component {
  state = {
    action: null,
  };

  render() {
    const { comment } = this.props
    const { likes, action } = this.state;

    const actions = [
      <span key="comment-basic-like">
        <Tooltip title={action !== 'liked' ? 'Thích' : 'Bỏ thích'}>
          <MDBIcon far={action !== 'liked'} icon="thumbs-up" onClick={this.like} style={{ marginRight: 8 }} />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
      <span key="comment-basic-reply-to">
        <MDBIcon icon="reply" style={{ marginRight: 8 }} />
        Trả lời</span>,
    ];

    return (
      <Comment
        className='comment-card'
        actions={actions}
        author={comment.name}
        avatar={<AvatarUser name={comment.name} />}
        content={
          <p>
            {comment.comment}
          </p>
        }
        datetime={
          <Tooltip title={this.$utils.converTSToDate(comment.time, 'HH:mm:ss DD-MM-YYYY')}>
            <span>{moment(this.$utils.converTSToDate(comment.time, 'YYYY-MM-DD HH:mm:ss')).fromNow()}</span>
          </Tooltip>
        }
      />
    )
  }
}

export default Comments