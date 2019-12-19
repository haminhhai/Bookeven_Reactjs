import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { MDBInput, MDBBtn } from 'mdbreact';

import '../styles/mansignup.scss'
import logo from '../assets/logo.png'
import * as authActions from '../actions/auth'
import { MSG_PASSWORD_CONSISTENT, MSG_PASSWORD_SHORT } from '../const/message'
class ManSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            fullname: '',
            phone: '',
            password: '',
            confirmpassword: ''
        }
    }
    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        const { email, fullname, phone, password, confirmpassword } = this.state
        const { authActions } = this.props
        const { signupManager } = authActions
        if (password !== confirmpassword) {
            this.$utils.toastError(MSG_PASSWORD_CONSISTENT)
            this.setState({ confirmpassword: '' })
        }
        else if( password.length < 6 )
            this.$utils.toastError(MSG_PASSWORD_SHORT)
        else {
            signupManager(email, password, fullname, phone)
        }
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    render() {
        var { email, fullname, password, confirmpassword, phone } = this.state
        return (
            <div className='man-su-wrapper'>
                <div className='fixed-background' />
                <Link to='/'>
                    <img src={logo} alt=''/>
                </Link>
                <div className='signup-container'>
                    <h1>BOOKEVEN</h1>
                    <h3>Trang đăng ký cho quản lý</h3>
                    <div className='signup-card container'>
                        <form className='row needs-validation container'
                            onSubmit={this.submitHandler}>
                            <div className='col-12'>
                                <MDBInput
                                    label="Họ tên"
                                    type="text"
                                    name='fullname'
                                    onChange={this.changeHandler}
                                    value={fullname}
                                    required
                                />
                            </div>
                            <div className='col-12'>
                                <MDBInput
                                    label="Email"
                                    type="email"
                                    name='email'
                                    onChange={this.changeHandler}
                                    value={email}
                                    required
                                />
                            </div>
                            <div className='col-12'>
                                <MDBInput
                                    label="Điện thoại"
                                    type="text"
                                    name='phone'
                                    onChange={this.changeHandler}
                                    value={phone}
                                    required
                                />
                            </div>
                            <div className='col-12'>
                                <MDBInput
                                    label="Mật khẩu"
                                    type="password"
                                    name='password'
                                    onChange={this.changeHandler}
                                    value={password}
                                    required
                                />
                            </div>
                            <div className='col-12'>
                                <MDBInput
                                    label="Nhập lại mật khẩu"
                                    type="password"
                                    name='confirmpassword'
                                    onChange={this.changeHandler}
                                    value={confirmpassword}
                                    required
                                />
                            </div>
                            <div className='col-12'>
                                <MDBBtn type='submit'>Đăng ký</MDBBtn>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        authActions: bindActionCreators(authActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManSignup);