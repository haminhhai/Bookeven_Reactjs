import React, { Component } from 'react';

import {  Checkbox } from 'antd'
import { MDBBtn, MDBInput } from "mdbreact";

import '../../../styles/account.scss'
class EditAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditPassword: false,
            fullnameEdit: 'Hà Minh Hải',
            emailEdit: 'bookeven@gmail.com',
            phoneEdit: '0327487958',
            isUpdating: false

        }
    }
    toggleShowEditPW = () => {
        this.setState({ showEditPassword: !this.state.showEditPassword })
    }

    changeHandler = event => {
        this.setState({ 
            [event.target.name]: event.target.value,
            isUpdating: true
        });
    };
    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };
    render() {
        const { showEditPassword, fullnameEdit, phoneEdit, emailEdit, isUpdating} = this.state
        return (
            <form
                className='needs-validation'
                onSubmit={this.submitHandler}>
                <div className='row'>
                    <div className='col-12 container'>
                        <MDBInput
                            outline
                            label="Họ tên"
                            type="text"
                            name='fullnameEdit'
                            value={fullnameEdit}
                            onChange={this.changeHandler}
                            required
                        />
                    </div>
                    <div className='col-12 container'>
                        <MDBInput
                            outline
                            label="Email"
                            type="email"
                            name='emailEdit'
                            value={emailEdit}
                            onChange={this.changeHandler}
                            required
                        />
                    </div>
                    <div className='col-12 container'>
                        <MDBInput
                            outline
                            label="Số điện thoại"
                            type="tel"
                            name='phoneEdit'
                            value={phoneEdit}
                            onChange={this.changeHandler}
                            required
                        />
                    </div>
                    <div className='col-12 container'>
                        <Checkbox onChange={this.toggleShowEditPW}>Thay đổi mật khẩu</Checkbox>
                    </div>
                    {showEditPassword &&
                        <div className='row container'>
                            <div className='col-12'>
                                <MDBInput
                                    outline
                                    label="Mật khẩu cũ"
                                    type="password"
                                    name='oldpass'
                                    required
                                />
                            </div>
                            <div className='col-12 '>
                                <MDBInput
                                    outline
                                    label="Mật khẩu mới"
                                    type="password"
                                    name='newpass'
                                    required
                                />
                            </div>
                            <div className='col-12 '>
                                <MDBInput
                                    outline
                                    label="Nhập lại"
                                    type="password"
                                    name='renewpass'
                                    required
                                />
                            </div>
                        </div>}
                    <div className='col-6 container'>
                        <MDBBtn disabled={!isUpdating} gradient='sunny-morning' type='submit'>Cập nhật</MDBBtn>
                    </div>
                </div>
            </form>
        );
    }
}


export default EditAccount;