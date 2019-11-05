import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBIcon } from 'mdbreact';
import {InputNumber} from 'antd'
import Header from '../../layouts/Header/Header'

import '../../styles/cart.scss'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        var { children } = this.props
        return (
            <div >
                <Header carousel={false} parent='Giỏ hàng' />

                <div className='cart-wrapper'>
                    <div className='container'>
                        <MDBTable className='mt-4'>
                            <MDBTableHead color="purple-gradient" textWhite>
                                <tr>
                                    <th>&nbsp;</th>
                                    <th>&nbsp;</th>
                                    <th>Tên sách</th>
                                    <th>Số lượng</th>
                                    <th>Đơn giá</th>
                                    <th>Tổng</th>
                                </tr>
                            </MDBTableHead>
                            <MDBTableBody>
                               { children }
                            </MDBTableBody>
                        </MDBTable>
                    </div>
                </div>
            </div >
        );
    }
}

const MapStateToProps = state => {
    return {
        detailBook: state.detailBook
    }
}

const MapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Cart);