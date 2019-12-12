import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import '../styles/mansignup.scss'
import logo from '../assets/logo.png'
import { MDBInput } from 'mdbreact';
class ManSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        return (
            <div className='man-su-wrapper'>
                <div className='fixed-background' />
                <div className='signup-container'>
                    <Link to='/'>
                        <img src={logo} />
                    </Link>
                    <h5>Trang đăng ký cho quản lý của Bookeven</h5>
                    <div className='signup-card container'>
                        <form className='row needs-validation container'
                            onSubmit={this.submitHandler}>
                            <div className='col-12'>
                                <MDBInput
                                    label="Họ tên"
                                    type="text"
                                    name='fullname'
                                    required
                                />
                            </div>
                            <div className='col-12'>
                                <MDBInput
                                    label="Email"
                                    type="email"
                                    name='email'
                                    required
                                />
                            </div>
                            <div className='col-12'>
                                <MDBInput
                                    label="Điện thoại"
                                    type="text"
                                    name='phone'
                                    required
                                />
                            </div>
                            <div className='col-12'>
                                <MDBInput
                                    label="Mật khẩu"
                                    type="password"
                                    name='password'
                                    required
                                />
                            </div>
                            <div className='col-12'>
                                <MDBInput
                                    label="Nhập lại mật khẩu"
                                    type="password"
                                    name='confirmpassword'
                                    required
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ManSignup;