import React, { Component } from 'react';
import { MDBBtn, MDBIcon, MDBInput } from 'mdbreact'

import { MSG_PASSWORD_CONSISTENT, MSG_PASSWORD_SHORT } from '../../const/message'
class SignUp extends Component {
    state = {
        email: '',
        fullname: '',
        phone: '',
        password: '',
        confirmpassword: ''
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        const { email, fullname, phone, password, confirmpassword } = this.state
        const { signup } = this.props
        if( password !== confirmpassword )
        {
            this.$utils.toastError(MSG_PASSWORD_CONSISTENT)
            this.setState({ confirmpassword: ''})
        }
        else if( password.length < 6 )
            this.$utils.toastError(MSG_PASSWORD_SHORT)
        else {
            signup(email, password, fullname, phone)
        }
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });

    };
    render() {
        var { email, fullname, password, confirmpassword, phone } = this.state
        return (
            <form className="needs-validation"
                onSubmit={this.submitHandler}>
                <div className="grey-text">
                    <MDBInput
                        label="Họ tên"
                        icon="user-plus"
                        type="text"
                        name='fullname'
                        onChange={this.changeHandler}
                        value={fullname}
                        required
                    />
                    <MDBInput
                        label="Email"
                        icon="envelope"
                        type="email"
                        name='email'
                        onChange={this.changeHandler}
                        value={email}
                        required
                    />
                    <MDBInput
                        label="Điện thoại"
                        icon="phone"
                        type="text"
                        name='phone'
                        onChange={this.changeHandler}
                        value={phone}
                        required
                    />
                    <MDBInput
                        label="Mật khẩu"
                        icon="lock"
                        onChange={this.changeHandler}
                        value={password}
                        name='password'
                        type="password"
                        required
                    />
                    <MDBInput
                        label="Nhập lại mật khẩu"
                        icon="lock"
                        onChange={this.changeHandler}
                        value={confirmpassword}
                        name='confirmpassword'
                        type="password"
                        required
                    />
                </div>
                <div className='text-center'>
                    <MDBBtn block type='submit' gradient="peach" className='font-weight-bold text-white rounded-pill'>
                        ĐĂNG KÝ
                        <MDBIcon icon="sign-out-alt" className='ml-2' />
                    </MDBBtn>
                </div>
            </form>
        );
    }
}

export default SignUp;
