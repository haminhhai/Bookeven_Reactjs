import React, { Component } from 'react';

import { MDBBtn, MDBInput } from "mdbreact";

import * as msg from '../../../const/message'
import '../../../styles/account.scss'
class EditPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdating: false,
            oldPass: '',
            newPass: '',
            confirmPass: ''

        }
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };
    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        const { oldPass, newPass, confirmPass } = this.state
        if( newPass !== confirmPass ) 
        {
            this.$utils.toastError(msg.MSG_PASSWORD_CONSISTENT)
            this.setState({ confirmPass: '' })
        }
        
    }
    render() {
        const { oldPass, newPass, confirmPass } = this.state
        return (
            <form
                className='needs-validation'
                onSubmit={this.submitHandler}>
                <div className='row'>
                    <div className='row container'>
                        <div className='col-12'>
                            <MDBInput
                                outline
                                label="Mật khẩu cũ"
                                type="password"
                                name='oldPass'
                                onChange={this.changeHandler}
                                value={oldPass}
                                required
                            />
                        </div>
                        <div className='col-12 '>
                            <MDBInput
                                outline
                                label="Mật khẩu mới"
                                type="password"
                                onChange={this.changeHandler}
                                value={newPass}
                                name='newPass'
                                required
                            />
                        </div>
                        <div className='col-12 '>
                            <MDBInput
                                outline
                                label="Nhập lại Mật khẩu mới"
                                type="password"
                                name='confirmPass'
                                onChange={this.changeHandler}
                                value={confirmPass}
                                required
                            />
                        </div>
                    </div>
                    <div className='col-6 container'>
                        <MDBBtn gradient='sunny-morning' type='submit'>Cập nhật</MDBBtn>
                    </div>
                </div>
            </form>
        );
    }
}


export default EditPassword;