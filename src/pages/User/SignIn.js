import React, { Component } from 'react';

import { MDBBtn, MDBIcon, MDBInput } from 'mdbreact'

class SignIn extends Component {
    state = {
        email: 'haihaidb@gmail.com',
        password: '123456',
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        const { email, password } = this.state
        const { login } = this.props
        login(email, password)
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });

    };

    render() {
        var { email, password } = this.state
        return (
            <form className="needs-validation" onSubmit={this.submitHandler}>
                <div className='row'>
                    <div className='col'>
                        <div className="grey-text">
                            <MDBInput
                                label="Nhập email của bạn"
                                icon="envelope"
                                type="email"
                                name='email'
                                onChange={this.changeHandler}
                                value={email}
                                required
                            >
                            </MDBInput>
                            <MDBInput
                                label="Nhập mật khẩu"
                                icon="lock"
                                type="password"
                                name='password'
                                onChange={this.changeHandler}
                                value={password}
                                required
                            />

                        </div>
                    </div>
                </div>
                <div className='text-center'>

                    <MDBBtn block type='submit' gradient="aqua" className='font-weight-bold text-white rounded-pill'>
                        ĐĂNG NHẬP
                        <MDBIcon icon="sign-in-alt" className='ml-2' />
                    </MDBBtn>
                </div>
            </form>
        );
    }
}

export default SignIn;