import React, { Component } from 'react';

import { MDBModal, MDBModalHeader, MDBIcon, MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBInput, MDBModalBody } from 'mdbreact'
import { Radio } from 'antd'

import province from '../../utils/data/province.json'
import district from '../../utils/data/district.json'
import ward from '../../utils/data/ward.json'
import Header from '../../layouts/Header/Header'
import * as msg from '../../const/message'
import * as cont from './const'
import '../../styles/payment.scss'
import PaymentSuccess from './PaymentSuccess.js';

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            fullnameAddress: '',
            emailAddress: '',
            phoneAddress: '',
            street: '',
            selectedProvince: '',
            selectedDistrict: '',
            selectedWard: '',
            selectedAddress: '',
            addressNote: 1,
            isSuccess: false
        }
    }
    changeTypeAddressNote = (e) => {
        this.setState({ addressNote: e.target.value })
    }

    changeProvince = e => {
        var id = parseInt(e.target.value)
        this.setState({ selectedProvince: id })
        var districts = []
        districts = district.filter(item => {
            return item.provinceid === id
        })
        var tempDistrict = []
        districts.map((item, index) =>
            tempDistrict.push(<option key={index} value={parseInt(item.districtid)}>{item.name}</option>)
        )
        this.setState({ district: tempDistrict })
    }

    changeDistrict = e => {
        var id = parseInt(e.target.value)
        this.setState({ selectedDistrict: id })
        var wards = []
        wards = ward.filter(item => {
            return item.districtid === id
        })
        var tempWard = []
        wards.map((item, index) =>
            tempWard.push(<option key={index} value={parseInt(item.wardid)}>{item.name}</option>)
        )
        this.setState({ ward: tempWard })
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    submitHandler = (event, values) => {
        event.preventDefault();
        event.target.className += " was-validated";
        this.toggleModal()
    };

    submitcreateOrder = () => {
        const { createNewAddress, createOrder, cart } = this.props
        const { addressNote, street, selectedProvince, selectedDistrict, selectedWard, selectedAddress } = this.state
        const body = {
            id: this.$utils.idGenerator(),
            name: 'Hà Minh Hải',
            email: 'haihaidb@gmail.com',
            phone: '0327487958',
            street: street,
            province: selectedProvince,
            district: selectedDistrict,
            ward: parseInt(selectedWard)
        }
        var id = ''
        if (addressNote === 2) {
            id = body.id
            createNewAddress(body)
        }
        else id = selectedAddress
        createOrder(id, cart)
        this.toggleModal()
        this.setState({ isSuccess: true })
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal })
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        var tempProvince = []
        province.map((item, index) =>
            tempProvince.push(<option key={index} value={parseInt(item.provinceid)}>{item.name}</option>)
        )

        this.setState({ province: tempProvince })
    }
    render() {
        const { cart, address } = this.props
        const { province, district, ward, modal, isSuccess,
            street, selectedProvince, selectedDistrict, selectedWard, addressNote, selectedAddress } = this.state
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
                                        <div className='col-12 mb-2'>
                                            <Radio.Group onChange={this.changeTypeAddressNote} value={addressNote}>
                                                <Radio value={1}>{cont.CHOOSE_YOUR_ADDRESS}</Radio>
                                                <Radio value={2}>{cont.CHOOSE_NEW_ADDRESS}</Radio>
                                            </Radio.Group>
                                        </div>
                                        {
                                            addressNote === 1 &&
                                            <div className='col-12 mb-4'>
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
                                        }
                                        {
                                            addressNote === 2 &&
                                            <div className='row'>
                                                <div className='col-12'>
                                                    <MDBInput
                                                        outline
                                                        label="Địa chỉ *"
                                                        type="text"
                                                        name='street'
                                                        value={street}
                                                        onChange={this.changeHandler}
                                                        required
                                                    />
                                                </div>
                                                <div className='col-12 mt-4'>
                                                    <select onChange={this.changeProvince} value={selectedProvince} className="browser-default custom-select" required>
                                                        <option value=''>Tỉnh/Thành phố *</option>
                                                        {province}
                                                    </select>
                                                </div>
                                                <div className='col-12 mt-5'>
                                                    <select onChange={this.changeDistrict} value={selectedDistrict} className="browser-default custom-select" required>
                                                        <option value=''>Quận/Huyện/TX *</option>
                                                        {district}
                                                    </select>
                                                </div>
                                                <div className='col-12 mt-5 mb-4'>
                                                    <select name='selectedWard' onChange={this.changeHandler} value={selectedWard} className="browser-default custom-select" required>
                                                        <option value=''>Xã/Phường *</option>
                                                        {ward}
                                                    </select>
                                                </div>
                                            </div>
                                        }
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
                                                        <th>{cont.CART_QUANTITY}</th>
                                                        <th>{cont.CART_TOTAL}</th>
                                                    </tr>
                                                </MDBTableHead>
                                                <MDBTableBody >
                                                    {
                                                        cart.length > 0 &&
                                                        cart.map((item, i) =>
                                                            <tr key={i}>
                                                                <td>{item.title}</td>
                                                                <td>{item.quantity}</td>
                                                                <td>{this.$utils.calTotalPrice(item.realPrice, item.percentDiscount, item.quantity)}</td>
                                                            </tr>
                                                        )
                                                    }
                                                    <tr>
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
                                                    </tr>
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
                                        <MDBBtn className='text-white rounded-pill' color=" green accent-3" onClick={this.submitcreateOrder}>Có</MDBBtn>
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