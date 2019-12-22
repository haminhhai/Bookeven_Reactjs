import React, { Component } from 'react';

import { MDBModal, MDBModalHeader, MDBIcon, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBModalBody } from 'mdbreact'
import { Radio } from 'antd'
import Header from '../../layouts/Header/Header'
import * as msg from '../../const/message'
import * as cont from './const'
import '../../styles/payment.scss'
import PaymentSuccess from './PaymentSuccess.js';
import moment from 'moment'
class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            selectedAddress: '',
            addressNote: 1,
            isSuccess: false
        }
    }
    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitHandler = (event, values) => {
        event.preventDefault();
        event.target.className += " was-validated";
        this.toggleModal()
    };
    onCreateOrder = () => {
        var time = new Date()
        const { selectedAddress } = this.state
        const { createOrder } = this.props
        createOrder({
            address_id: selectedAddress,
            orderDate: moment(time).unix().toString(),
            status: 1
        })
        this.setState({isSuccess: true})
        this.toggleModal()
    }
    toggleModal = () => {
        this.setState({ modal: !this.state.modal })
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        const { cart, address } = this.props
        const { modal, isSuccess, selectedAddress } = this.state
        return (
            <form className='needs-validation'
                onSubmit={this.submitHandler}>
                <Header carousel={false} parent='Thanh toán' />
                <div className='payment container'>
                    {isSuccess ?
                        <PaymentSuccess /> :
                        <div className='row'>
                            <div className='col-sm-4'>
                                <div className='payment-card'>
                                    <h4>
                                        <MDBIcon icon="map-marked-alt" />
                                        {cont.INFO_INVOICE_TITLE}
                                    </h4>
                                    <div className='row'>
                                        <div className='col-12'>
                                            <div className='method-pay'>
                                                <select
                                                    name='selectedAddress'
                                                    onChange={this.changeHandler}
                                                    value={selectedAddress}
                                                    className="browser-default custom-select"
                                                    required>
                                                    <option value=''>Sổ địa chỉ</option>
                                                    {
                                                        address.length > 0 &&
                                                        address.map((item, index) =>
                                                            <option key={index} value={item.id}>
                                                                Người nhận: {item.name},
                                                                Địa chỉ: {`${item.street}, ${this.$utils.filterAddress(item.province, item.district, item.ward)}`}
                                                            </option>
                                                        )
                                                    }
                                                </select>
                                            </div>
                                            <p>{cont.NOTE_ADDRESS}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-8'>
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='payment-card'>
                                            <h4>
                                                <MDBIcon icon="credit-card" />
                                                {cont.METHOD_PAY_TITLE}
                                            </h4>
                                            <div className='method-pay'>
                                                <Radio defaultChecked >{cont.METHOD_PAY_CONTENT}</Radio>
                                            </div>
                                            <p>
                                                {cont.METHOD_PAY_INDICATTION}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='payment-card'>
                                            <h4>
                                                <MDBIcon icon="truck-moving" />
                                                {cont.SHIP_TYPE_TITLE}
                                            </h4>
                                            <p>
                                                {cont.SHIP_TYPE_CONTENT}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-12'>
                                        <div className='payment-card'>
                                            <h4>
                                                <MDBIcon icon="cart-arrow-down" />
                                                {cont.CART_TITLE}
                                            </h4>
                                            <MDBTable striped>
                                                <MDBTableHead color='cloudy-knoxville-gradient'>
                                                    <tr>
                                                        <th>{cont.CART_BOOKNAME}</th>
                                                        <th>{cont.CART_AMOUNT}</th>
                                                        <th>{cont.CART_TOTAL}</th>
                                                    </tr>
                                                </MDBTableHead>
                                                <MDBTableBody >
                                                    {
                                                        cart.length > 0 &&
                                                        cart.map((item, i) =>
                                                            <tr key={i}>
                                                                <td>{item.name}</td>
                                                                <td>{item.amount}</td>
                                                                <td>{this.$utils.calTotalPrice(item.price, item.discount, item.amount)}</td>
                                                            </tr>
                                                        )
                                                    }
                                                    {/* <tr>
                                                        <td colSpan='12' className='actions'>
                                                            <div className='coupon' >
                                                                <input
                                                                    type="text"
                                                                    className="form-control mr-2"
                                                                    placeholder="Mã giảm giá"
                                                                />
                                                                <MDBBtn color='danger'>Áp dụng</MDBBtn>
                                                            </div>
                                                        </td>
                                                    </tr> */}
                                                </MDBTableBody>
                                            </MDBTable>
                                            <div className='collateral'>
                                                <div className='total-amount'>
                                                    <MDBTable striped bordered>
                                                        <MDBTableBody>
                                                            <tr>
                                                                <td className='font-weight-bold'>{cont.CART_TOTAL}</td>
                                                                <td>{this.$utils.calculateTotalCart(cart, 'vnd')}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='font-weight-bold'>{cont.SHIP_TOTAL}</td>
                                                                <td>{this.$utils.formatVND(0)}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='font-weight-bold'>{cont.TOTAL_INVOICE}</td>
                                                                <td>{this.$utils.calculateTotalCart(cart, 'vnd')}</td>
                                                            </tr>
                                                        </MDBTableBody>
                                                    </MDBTable>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-6 mt-2'>
                                        <MDBBtn
                                            style={{ width: '100%', fontWeight: 'bold' }}
                                            color='danger'
                                            type='submit'>
                                            Đặt mua
                                   </MDBBtn>
                                    </div>
                                </div>
                                <MDBModal cascading isOpen={modal} toggle={this.toggleModal}>
                                    <MDBModalHeader
                                        tag="h5"
                                        className=" green accent-3"
                                        toggle={this.toggleModal}
                                        titleClass="w-100">
                                        <MDBIcon className='mr-2' icon="hand-holding-usd" />
                                        {msg.MSG_SURE_TO_ORDER}
                                    </MDBModalHeader>
                                    <MDBModalBody className='text-right'>
                                        <MDBBtn className='rounded-pill' outline color="success" onClick={this.toggleModal}>Không</MDBBtn>
                                        <MDBBtn className='text-white rounded-pill' color=" green accent-3" onClick={this.onCreateOrder}>Có</MDBBtn>
                                    </MDBModalBody>
                                </MDBModal>
                            </div>
                        </div>
                    }
                </div>
            </form >
        );
    }
}

export default Payment