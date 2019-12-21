import React, { Component } from 'react';
import { Comment, Form, Button, Input } from 'antd';
import AvatarUser from '../AvatarUser/AvatarUser';

const { TextArea } = Input;


const Editor = ({ onChange, onSubmit, submitting, value, handleKeyDown, authen }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} placeholder='Nhập bình luận' onKeyDown={handleKeyDown} />
        </Form.Item>
        <Form.Item>
            <Button disabled={!authen} htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
                Bình luận
            </Button>
        </Form.Item>
    </div>
);
class InputComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitting: false,
            value: '',
        }
    }
    handleKeyDown = (e) => {
        e.key === 'Enter' && this.handleSubmit()
    }
    handleSubmit = () => {
        const { addComment, detailBook } = this.props
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            const body = {
                book_id: detailBook.id,
                date: this.$utils.convertDateToTS(new Date()).toString(),
                comment: this.state.value
            }
            this.setState({
                value: '',
                submitting: false
            })
            addComment(body)
        }, 1000);
    };
    handleChange = e => {
        this.setState({ value: e.target.value });
    };
    render() {
        const { submitting, value } = this.state;
        const { authen, info }  =this.props
        return (
            <Comment
                avatar={
                    <AvatarUser name={info.fullname} />
                }
                content={
                    <Editor
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        submitting={submitting}
                        value={value}
                        handleKeyDown={this.handleKeyDown}
                        authen={authen}
                    />
                }
            />
        )
    }
}

export default InputComment;