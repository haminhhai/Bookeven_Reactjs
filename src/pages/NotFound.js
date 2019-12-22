import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from '../layouts/Header/Header'
import '../styles/nf.scss'
import img from '../assets/logo.png'
import { MDBBtn } from 'mdbreact';
class NotFound extends Component {
    state = {}
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                <Header carousel={false} parent='404' />
                <div className='notfound container'>
                    <div className='row text-center'>
                        <img className='logo' src={img} alt=''/>
                        <h1>404</h1>
                        <h5>Không tìm thấy!</h5>
                        <Link  to='/'>
                            <MDBBtn className='font-weight-bold' color=' light-green accent-3'>
                                Quay lại mua sắm
                        </MDBBtn>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;