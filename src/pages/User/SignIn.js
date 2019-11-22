import React, { Component } from 'react';

import { MDBBtn, MDBIcon, MDBInput } from 'mdbreact'
import Spinner from '../../components/Spinners/Spinner'

class SignIn extends Component {
    state = {
        email: 'bookeven@gmail.com',
        password: '123456',
        isLoading: false
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        this.setState({ isLoading: !this.state.isLoading })

        setTimeout(() => {
            this.setState({ isLoading: !this.state.isLoading })
            window.location.reload()
        }, 3000);
        
        localStorage.setItem('authen', true)
        localStorage.setItem('role', '2')
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });

    };

    render() {
        var { email, password, isLoading } = this.state
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
                {isLoading && <Spinner type='sound' title='Đang đăng nhập...' />}
            </form>
        );
    }
}

export default SignIn;