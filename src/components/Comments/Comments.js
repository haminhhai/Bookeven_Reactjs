import React from 'react';
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';

class Comments extends React.Component {
  state = {
    action: null,
  };

  render() {
    const { likes, dislikes, action } = this.state;

    const actions = [
      
      <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
      <Comment
        actions={actions}
        author={<a>Han Solo</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        }
        content={
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure), to help people create their product prototypes beautifully
            and efficiently.
          </p>
        }
        datetime={
          <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
            <span>{moment().fromNow()}</span>
          </Tooltip>
        }
      />
    );
  }
}

export default Comments