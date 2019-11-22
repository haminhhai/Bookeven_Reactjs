import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { MDBIcon, MDBBtn, } from 'mdbreact'

import * as cont from './const'
import gif from '../../assets/truck-animation.gif'
import '../../styles/payment.scss'
class PaymentSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {

        return (
            <div className='text-center'>
                <h1 className='font-weight-bold light-green-text'>{cont.ORDER_SUCCESS}</h1>
                <div>
                    <MDBIcon className=' light-green-text mb-4' icon='check-circle' size='7x' />
                </div>
                <h5 className='font-italic  light-green-text'>
                    {cont.THANK_ORDER}
                </h5>
                <img src={gif} alt=''/>
                <div>
                    <Link to='/'>
                        <MDBBtn color=' light-green accent-2'>Quay lại mua sắm</MDBBtn>
                    </Link>
                    <Link to='/history'>
                        <MDBBtn color=' cyan accent-3'>Tới lịch sử mua hàng</MDBBtn>
                    </Link>
                </div>
            </div>
        );
    }
}

export default PaymentSuccess