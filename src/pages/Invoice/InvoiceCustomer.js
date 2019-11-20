import React, { Component } from 'react';

import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Badge } from 'antd'

import Header from '../../layouts/Header/Header'
import '../../styles/invoice.scss'
import img from '../../assets/logo.png'
class InvoiceCustomer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: {
                columns: [
                    {
                        label: <strong>Mã đơn hàng</strong>,
                        field: 'code',
                    },
                    {
                        label: <strong>Tên sách</strong>,
                        field: 'name',
                    },
                    {
                        label: <strong>Số lượng</strong>,
                        field: 'quantity',
                    },
                    {
                        label: <strong>Thành tiền</strong>,
                        field: 'total',
                    },
                    {
                        label: <strong>Tình trạng</strong>,
                        field: 'status',
                    }
                ],
                rows: [
                    {
                        code: '17021238',
                        name: 'Dế mèn phiêu lưu ký',
                        quantity: 12,
                        total: 120000,
                        status: <Badge status='processing' text='Đang giao hàng' />,
                        clickEvent: this.handleData
                    },
                    {
                        code: '17021238',
                        name: 'Dế mèn phiêu lưu ký',
                        quantity: 12,
                        total: 120000,
                        status: <Badge status='success' text='Thành công' />
                    },
                    {
                        code: '17021238',
                        name: 'Dế mèn phiêu lưu ký',
                        quantity: 12,
                        total: 120000,
                        status: <Badge status='error' text='Thất bại' />
                    },
                ]
            }
        }

    }

    handleData = (e) => {
        console.log(e.target.parentNode.childNodes)
    }
    render() {
        const { list } = this.state
        return (
            <div>
                <Header carousel={false} parent='Lịch sử mua hàng' />
                <div className='invoice container'>
                    {/* <div className='row text-center'>
                        <img className='logo' src={img} />
                        <h6>Bạn chưa có đơn hàng nào</h6>
                        <MDBBtn color=' light-green accent-3'>Tiếp tục mua sắm</MDBBtn>
                    </div> */}
                    <div className='row'>
                        <div className='container'>
                            <MDBTable hover >
                                <MDBTableHead color='tempting-azure-gradient' columns={list.columns} />
                                <MDBTableBody rows={list.rows} />
                            </MDBTable>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default InvoiceCustomer;