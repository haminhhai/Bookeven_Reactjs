import React from 'react';
import { Comment, Tooltip, Popover, Button, Form, Input } from 'antd';
import moment from 'moment';
import AvatarUser from '../AvatarUser/AvatarUser';

import './style.scss'
import { MDBIcon } from 'mdbreact';

const Editor = ({ onChange, onSubmit, submitting, value, handleKeyDown, closeEditting }) => (
  <div>
    <Form.Item>
      <Input.TextArea rows={4} onChange={onChange} value={value} placeholder='Nhập bình luận' onKeyDown={handleKeyDown} />
    </Form.Item>
    <Form.Item>
      <Button className='mr-2' htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Sửa
          </Button>
      <Button ghost onClick={closeEditting} type="primary">
        Hủy
          </Button>
    </Form.Item>
  </div>
);
class Comments extends React.Component {
  state = {
    action: null,
    visible: false,
    submitting: false,
    editting: false,
    value: '',
  };
  handleVisibleChange = () => {
    this.setState({ visible: !this.state.visible });
  }
  openEditting = () => {
    this.setState({
      editting: true,
      value: this.props.comment.comment
    });
  }
  closeEditting = () => {
    this.setState({ editting: false });
  }
  handleKeyDown = (e) => {
    e.key === 'Enter' && this.handleEdit()
  }
  handleEdit = () => {
    const { updateComment, comment } = this.props
    if (!this.state.value) {
      return;
    }
    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      const body = {
        comment_id: comment.id,
        date: this.$utils.convertDateToTS(new Date()).toString(),
        comment: this.state.value
      }
      this.setState({
        value: '',
        submitting: false,
        editting: false
      })
      updateComment(body)
    }, 1000);
  };
  handleDelete = () => {
    const { deleteComment, comment } = this.props
    deleteComment({
      comment_id: comment.id
    })
  }
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  render() {
    const { comment, info } = this.props
    const { likes, visible, submitting, editting, value } = this.state;

    var actions = []
    if (comment.user_id === info.id)
      actions = [
        <span key="comment-basic-like" onClick={this.openEditting}>
          {/* <Tooltip title={action !== 'liked' ? 'Thích' : 'Bỏ thích'}>
          <MDBIcon far={action !== 'liked'} icon="thumbs-up" onClick={this.like} style={{ marginRight: 8 }} />
        </Tooltip> */}
          <MDBIcon icon="edit" style={{ marginRight: 8 }} />
          Sửa
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
        </span >,
        <span key="comment-basic-reply-to" onClick={this.handleVisibleChange}>

          <Popover
            content={
              <div>
                <Button onClick={this.handleDelete} type="danger">Xóa</Button>
                <Button className='float-right' onClick={this.handleVisibleChange} type="danger" ghost>Hủy</Button>
              </div>}
            title={<b>Xác nhận?</b>}
            trigger="click"
            visible={visible}
            onVisibleChange={this.handleVisibleChange}
          >
            <MDBIcon icon="eraser" style={{ marginRight: 8 }} />
            Xóa
        </Popover>
        </span>,
      ];
    return (
      <Comment
        className='comment-card'
        actions={!editting ? actions : []}
        author={comment.fullname}
        avatar={<AvatarUser name={comment.fullname} />}
        content={
          editting ?
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleEdit}
              submitting={submitting}
              value={value}
              handleKeyDown={this.handleKeyDown}
              closeEditting={this.closeEditting}
            />
            :
            <p>
              {comment.comment}
            </p>
        }
        datetime={
          <Tooltip title={this.$utils.converTSToDate(parseInt(comment.created_date), 'HH:mm:ss DD-MM-YYYY')}>
            <span>{moment(this.$utils.converTSToDate(parseInt(comment.created_date), 'YYYY-MM-DD HH:mm:ss')).fromNow()}</span>
          </Tooltip>
        }
      />
    )
  }
}

export default Comments