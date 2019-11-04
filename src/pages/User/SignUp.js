import React, { Component } from 'react';
import { MDBBtn, MDBIcon, MDBInput } from 'mdbreact'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        confirmpassword: ''
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";

    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });

    };
    render() {
        var { email, password, confirmpassword } = this.state
        return (
            <form className="needs-validation"
                onSubmit={this.submitHandler}>
                <div className="grey-text">
                    <MDBInput
                        label="Nhập email của bạn"
                        icon="envelope"
                        type="email"
                        name='email'
                        onChange={this.changeHandler}
                        value={email}
                        required
                    />
                    <MDBInput
                        label="Nhập mật khẩu"
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
                    <MDBBtn type='submit' gradient="peach" className='font-weight-bold text-white'>
                        ĐĂNG KÝ
                        <MDBIcon icon="sign-out-alt" className='ml-2' />
                    </MDBBtn>
                </div>
            </form>
        );
    }
}

export default SignUp;
