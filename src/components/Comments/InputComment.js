import React, { Component } from 'react';
import { Comment, Form, Button, Input } from 'antd';
import moment from 'moment';
import AvatarUser from '../AvatarUser/AvatarUser';

const { TextArea } = Input;
const Editor = ({ onChange, onSubmit, submitting, value, handleKeyDown }) => (
    <div>
        <Form.Item>
            <TextArea rows={4} onChange={onChange} value={value} placeholder='Nhập bình luận' onKeyDown={handleKeyDown}/>
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
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
        const { addComment } = this.props
        if (!this.state.value) {
            return;
        }

        this.setState({
            submitting: true,
        });

        setTimeout(() => {
            const body = {
                accountId: 3306,
                ISBN: 1,
                name: 'Hà Minh Hải',
                time: moment(new Date()).unix(),
                comment: this.state.value
            }
            this.setState({ 
                value: '' ,
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

        return (
            <Comment
                avatar={
                    <AvatarUser name='Hà Minh Hải' />
                }
                content={
                    <Editor
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}
                        submitting={submitting}
                        value={value}
                        handleKeyDown={this.handleKeyDown}
                    />
                }
            />
        )
    }
}

export default InputComment;