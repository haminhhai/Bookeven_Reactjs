import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { MDBInput, MDBIcon, MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact'
import { Radio } from 'antd'

import Header from '../../layouts/Header/Header'
import province from '../../utils/data/province.json'
import district from '../../utils/data/district.json'
import ward from '../../utils/data/ward.json'
import '../../styles/payment.scss'
const list = {
    columns: [
        {
            label: <strong>Tên sách</strong>,
            field: 'name',
            width: 500,
        },
        {
            label: <strong>Số lượng</strong>,
            field: 'quantity',
            width: 15,
        },
        {
            label: <strong>Thành tiền</strong>,
            field: 'total',
            width: 20,
        }
    ],
    rows: [
        {
            name: 'Dế mèn phiêu lưu ký',
            quantity: 12,
            total: 120000,
        },
        {
            name: 'Dế mèn phiêu lưu ký',
            quantity: 12,
            total: 120000,
        },
        {
            name: 'Dế mèn phiêu lưu ký',
            quantity: 12,
            total: 120000,
        },
    ]
}

const total = {
    rows: [
        {
            name: <strong >Thành tiền:</strong>,
            total: <strong >240000</strong>,
        },
        {
            name: <strong >Phí vận chuyển:</strong>,
            total: <strong >0</strong>,
        },
        {
            name: <strong >Tổng giá trị đơn hàng:   </strong>,
            total: <strong >240000</strong>,
        },
    ]
}

class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            province: '',
            district: '',
            ward: '',
            fullnameAddress: '',
            emailAddress: '',
            phoneAddress: '',
            street: '',
            selectedProvince: '',
            selectedDistrict: '',
            selectedWard: '',
            addressNote: 1
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

    changeWard = e => {
        this.setState({ selectedWard: e.target.value })
    }

    submitHandler = event => {
        event.preventDefault();
        event.target.className += " was-validated";
        console.log(event)
    };

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    componentDidMount() {

        var tempProvince = []
        province.map((item, index) =>
            tempProvince.push(<option key={index} value={parseInt(item.provinceid)}>{item.name}</option>)
        )

        this.setState({ province: tempProvince })
    }
    render() {
        const { province, district, ward, fullnameAddress, phoneAddress, emailAddress,
            street, selectedProvince, selectedDistrict, selectedWard, addressNote } = this.state
        return (
            <div >
                <Header carousel={false} parent='Giỏ hàng' child='Thanh toán' />
                <div className='payment container'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <div className='payment-card'>
                                <h4>
                                    <MDBIcon icon="home" />
                                    Thông tin in hóa đơn
                                </h4>
                                <div className='row'>
                                    <div className='col-12 mb-2'>
                                        <Radio.Group onChange={this.changeTypeAddressNote} value={addressNote}>
                                            <Radio value={1}>Chọn sổ địa chỉ của bạn</Radio>
                                            <Radio value={2}>Thêm địa chỉ mới</Radio>
                                        </Radio.Group>
                                    </div>
                                    {
                                        addressNote === 1 &&
                                        <div className='col-12 mb-4'>
                                            <select onChange={this.changeProvince} value={selectedProvince} className="browser-default custom-select">
                                                <option value=''>Sổ địa chỉ</option>
                                            </select>
                                        </div>
                                    }
                                    {
                                        addressNote === 2 &&
                                        <React.Fragment>
                                            <div className='col-12'>
                                                <MDBInput
                                                    outline
                                                    label="Họ tên *"
                                                    type="text"
                                                    name='fullnameAddress'
                                                    value={fullnameAddress}
                                                    onChange={this.changeHandler}
                                                    required
                                                />
                                            </div>
                                            <div className='col-12'>
                                                <MDBInput
                                                    outline
                                                    label="Email *"
                                                    type="email"
                                                    name='emailAddress'
                                                    value={emailAddress}
                                                    onChange={this.changeHandler}
                                                    required
                                                />
                                            </div>
                                            <div className='col-12'>
                                                <MDBInput
                                                    outline
                                                    label="Điện thoại *"
                                                    type="tel"
                                                    name='phoneAddress'
                                                    value={phoneAddress}
                                                    onChange={this.changeHandler}
                                                    required
                                                />
                                            </div>
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
                                                <select onChange={this.changeProvince} value={selectedProvince} className="browser-default custom-select">
                                                    <option value=''>Tỉnh/Thành phố *</option>
                                                    {province}
                                                </select>
                                            </div>
                                            <div className='col-12 mt-5'>
                                                <select onChange={this.changeDistrict} value={selectedDistrict} className="browser-default custom-select">
                                                    <option>Quận/Huyện/TX *</option>
                                                    {district}
                                                </select>
                                            </div>
                                            <div className='col-12 mt-5 mb-4'>
                                                <select onChange={this.changeWard} value={selectedWard} className="browser-default custom-select">
                                                    <option>Xã/Phường *</option>
                                                    {ward}
                                                </select>
                                            </div>
                                        </React.Fragment>
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
                                            Phương thức thanh toán
                                        </h4>
                                        <div className='method-pay'>
                                            <Radio defaultChecked >Trả tiền khi nhận hàng</Radio>
                                        </div>
                                        <p>
                                            Khách hàng trả tiền cho nhân viên giao nhận.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-6'>
                                    <div className='payment-card'>
                                        <h4>
                                            <MDBIcon icon="truck-moving" />
                                            Hình thức vận chuyển
                                        </h4>
                                        <p>
                                            Miễn phí vận chuyển trên toàn quốc.
                                        </p>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='payment-card'>
                                        <h4>
                                            <MDBIcon icon="cart-arrow-down" />
                                            Nội dung giỏ hàng
                                        </h4>
                                        <MDBTable striped>
                                            <MDBTableHead color='cloudy-knoxville-gradient' columns={list.columns} />
                                            <MDBTableBody rows={list.rows} >
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
                                                    <MDBTableBody rows={total.rows} />
                                                </MDBTable>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6 mt-2'>
                                    <MDBBtn style={{ width: '100%' }} color='danger'>Đặt mua</MDBBtn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return 
}

export default connect(mapStateToProps, mapDispatchToProps)(Payment);