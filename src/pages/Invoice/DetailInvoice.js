import React, { Component } from 'react';

import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBModal, MDBModalHeader, MDBModalBody } from 'mdbreact';

import '../../styles/invoice.scss'
import * as msg from '../../const/message'
import * as cont from './const'
class DetailInvoice extends Component {
    formatStatus = value => {
        switch (value) {
            case 2:
                return cont.statuses.success
            case 3:
                return cont.statuses.failed
            default: return cont.statuses.process
        }
    }
    render() {
        const { data, address, modal, closeModal, formatTime } = this.props
        let xhtml = null
        if (address.name !== undefined)
            xhtml =
                <MDBModal cascading isOpen={modal} toggle={closeModal} size='lg'>
                    <MDBModalHeader
                        tag="h5"
                        className=" yellow darken-3"
                        toggle={closeModal}
                        titleClass="w-100">
                        {`${cont.DETAIL_INVOICE_TITLE}${data.id} - ${this.formatStatus(data.status)}`}
                    </MDBModalHeader>
                    <MDBModalBody>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-3 font-weight-bold'>
                                    {cont.CREATE_AT}
                                </div>
                                <div className='col-9 mb-3'>
                                    {formatTime(data.createAt)}
                                </div>
                                <div className='col-3 font-weight-bold'>
                                    {cont.END_TIME}
                                </div>
                                <div className='col-9 mb-3'>
                                    {data.endTime}
                                </div>
                                <div className='col-3 font-weight-bold'>
                                    {cont.NAME}
                                </div>
                                <div className='col-9 mb-3'>
                                    {address.name}
                                </div>
                                <div className='col-3 font-weight-bold'>
                                    {cont.ADDRESS}
                                </div>
                                <div className='col-9 mb-3'>
                                    {`${address.street}, ${this.$utils.filterAddress(address.province, address.district, address.ward)}`}
                                </div>
                                <div className='col-3 font-weight-bold'>
                                    {cont.PHONE}
                                </div>
                                <div className='col-9 mb-3'>
                                    {address.phone}
                                </div>
                                <div className='col-12'>
                                    <MDBTable striped>
                                        <MDBTableHead color='sunny-morning-gradient' textWhite>
                                            <tr>
                                                {
                                                    cont.colsDetail.map(item =>
                                                        item.label
                                                    )
                                                }
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            {
                                                data.listBooks.map((item, index) =>
                                                    <tr key={index}>
                                                        <td className='imgBook '>
                                                            <img src={item.src} alt={item.title} />
                                                            <p className='align-middle ml-2'>{item.title}</p>
                                                        </td>
                                                        <td className='text-center align-middle'>
                                                            {item.quantity}
                                                        </td>
                                                        <td className=' align-middle'>
                                                            <del className='mr-1'>{this.$utils.formatVND(item.realPrice)}</del>
                                                            {this.$utils.formatVND(item.percentDiscount)}
                                                        </td>
                                                        <td className='align-middle font-weight-bold'>
                                                            {this.$utils.formatVND(item.percentDiscount * item.quantity)}
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </MDBTableBody>
                                    </MDBTable>
                                    <div className='collateral'>
                                        <div className='total-percentDiscount'>
                                            <MDBTable bordered>
                                                <MDBTableBody>
                                                    <tr>
                                                        <td>Thành tiền</td>
                                                        <td>{this.$utils.calculateTotalCart(data.listBooks, 'vnd')}</td>
                                                    </tr>
                                                    <tr >
                                                        <td>Phí vận chuyển</td>
                                                        <td>0 đ</td>
                                                    </tr>
                                                    <tr >
                                                        <td className='font-weight-bold'>Tổng tiền</td>
                                                        <td className='font-weight-bold'>{this.$utils.calculateTotalCart(data.listBooks, 'vnd')}</td>
                                                    </tr>
                                                </MDBTableBody>
                                            </MDBTable>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 text-center'>
                                    <MDBBtn size="lg" className='rounded-pill text-white' rounded color=" yellow darken-3" onClick={closeModal}>Đóng</MDBBtn>
                                </div>
                            </div>
                        </div>


                    </MDBModalBody>
                </MDBModal>
        return xhtml
    }
}

export default DetailInvoice;