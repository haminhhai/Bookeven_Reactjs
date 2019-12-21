import React, { Component } from 'react';

import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBModal, MDBModalHeader, MDBModalBody, MDBBadge, } from 'mdbreact';
import { Select, DatePicker } from 'antd'

import '../../styles/order.scss'
import * as cont from './const'
import moment from 'moment'

const { Option } = Select
class DetailOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
            fromDate: null,
            toDate: moment(new Date()),
            isEditTime: false,
            modal: false
        }
    }
    formatStatus = value => {
        switch (value) {
            case 2:
                return cont.statuses.success
            case 3:
                return cont.statuses.failed
            default: return cont.statuses.process
        }
    }

    disabledEndDate = toDate => {
        const { fromDate } = this.state;
        if (!toDate || !fromDate) {
            return false;
        }
        return toDate.valueOf() <= fromDate.valueOf();
    };

    showEditTime = () => {
        this.setState({ isEditTime: !this.state.isEditTime })
    }

    onEndChange = value => {
        this.setState({ toDate: value })
    }

    changeStatus = e => {
        this.setState({ status: e })
    }

    onUpdateOrder = () => {
        const { toDate, status } = this.state
        const { data, updateOrder } = this.props
        var body = {
            id: data.id,
            shipDate: this.$utils.convertDateToTS(toDate).toString(),
            status: status
        }
        console.log(body)
        updateOrder(body)
    }
    componentDidMount() {
        const { data } = this.props
        this.setState({
            status: data.status,
            fromDate: moment.unix(parseInt(data.orderDate)),
            toDate: data.shipDate !== null ? moment.unix(parseInt(data.shipDate)) : this.state.toDate
        })
    }
    render() {
        const { data, modal, closeModal, role } = this.props
        const { status, isEditTime, toDate } = this.state
        console.log(data, toDate)
        let xhtml = null
        if (data.id !== undefined)
            xhtml =
                <MDBModal cascading isOpen={modal} size="lg">
                    <MDBModalHeader
                        tag="h5"
                        className=" yellow darken-3"
                        toggle={closeModal}
                        titleClass="w-100">
                        {`${cont.DETAIL_ORDER_TITLE}${data.id} - ${this.formatStatus(data.status)}`}
                    </MDBModalHeader>
                    <MDBModalBody>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-3 font-weight-bold'>
                                    {cont.CREATE_AT}
                                </div>
                                <div className='col-9 mb-3'>
                                    {this.$utils.converTSToDate(parseInt(data.orderDate), 'DD/MM/YYYY')}
                                </div>
                                <div className='col-3 font-weight-bold'>
                                    {cont.END_TIME}
                                </div>
                                <div className='col-9 mb-3'>
                                    {
                                        isEditTime ?
                                            <DatePicker
                                                disabledDate={this.disabledEndDate}
                                                onChange={this.onEndChange}
                                                value={toDate}
                                                placeholder='Chọn ngày nhận'
                                                style={{ width: '40%' }} /> :
                                            data.shipDate !== null ?
                                                this.$utils.converTSToDate(parseInt(data.shipDate), 'DD/MM/YYYY') :
                                                '--/--/----'
                                    }
                                    {
                                        role === 2 &&
                                        <MDBBadge onClick={this.showEditTime} className='edit-badge ml-3' color='warning'>Sửa</MDBBadge>
                                    }
                                </div>
                                <div className='col-3 font-weight-bold'>
                                    {cont.NAME}
                                </div>
                                <div className='col-9 mb-3'>
                                    {data.user.name}
                                </div>
                                <div className='col-3 font-weight-bold'>
                                    {cont.ADDRESS}
                                </div>
                                <div className='col-9 mb-3'>
                                    {`${data.address.useraddress}, 
                                    ${this.$utils.filterAddress(data.address.province, data.address.district, data.address.ward)}`}
                                </div>
                                <div className='col-3 font-weight-bold'>
                                    {cont.PHONE}
                                </div>
                                <div className='col-9 mb-3'>
                                    {data.user.phone}
                                </div>
                                {
                                    role === 2 &&
                                    <React.Fragment>
                                        <div className='col-3 font-weight-bold'>
                                            {cont.STATUS}
                                        </div>
                                        <div className='col-9 mb-3'>

                                            <Select
                                                value={status}
                                                onChange={this.changeStatus}
                                                style={{ width: '40%' }} >
                                                {
                                                    cont.arr_statuses.map((item, i) =>
                                                        <Option key={i} value={item.id}>{item.name}</Option>)
                                                }
                                            </Select>
                                        </div>
                                    </React.Fragment>
                                }
                                <div className='col-12'>
                                    <MDBTable striped>
                                        <MDBTableHead color='sunny-morning-gradient' textWhite>
                                            <tr>
                                                {
                                                    cont.colsDetailCus.map(item =>
                                                        item.label
                                                    )
                                                }
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            {
                                                data.books.map((item, index) =>
                                                    <tr key={index}>
                                                        <td className='imgBook align-middle'>
                                                            <img src={item.image} alt={item.name} />
                                                            <p className='align-middle ml-2'>{item.name}</p>
                                                        </td>
                                                        <td className='text-center align-middle'>
                                                            {item.amount}
                                                        </td>
                                                        <td className=' align-middle'>
                                                            {this.$utils.calDiscountPrice(item.price, item.discount) !== this.$utils.formatVND(item.price) &&
                                                            <del className='mr-1'>{this.$utils.formatVND(item.price)}</del>
                                                            }
                                                            {this.$utils.calDiscountPrice(item.price, item.discount)}
                                                        </td>
                                                        <td className='align-middle font-weight-bold'>
                                                            {this.$utils.calTotalPrice(item.price, item.discount, item.amount)}
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </MDBTableBody>
                                    </MDBTable>
                                    <div className='collateral'>
                                        <div className='total-amount'>
                                            <MDBTable bordered>
                                                <MDBTableBody>
                                                    <tr>
                                                        <td>Thành tiền</td>
                                                        <td>{this.$utils.calculateTotalCart(data.books, 'vnd')}</td>
                                                    </tr>
                                                    <tr >
                                                        <td>Phí vận chuyển</td>
                                                        <td>0 đ</td>
                                                    </tr>
                                                    <tr >
                                                        <td className='font-weight-bold'>Tổng tiền</td>
                                                        <td className='font-weight-bold'>{this.$utils.calculateTotalCart(data.books, 'vnd')}</td>
                                                    </tr>
                                                </MDBTableBody>
                                            </MDBTable>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 text-center'>
                                    <MDBBtn size="lg" className='rounded-pill text-white' rounded color=" yellow darken-3" onClick={closeModal}>Đóng</MDBBtn>
                                    {
                                        role === 2 &&
                                        <MDBBtn size="lg" className='rounded-pill text-white' rounded color=" yellow darken-3" onClick={this.onUpdateOrder}>Lưu</MDBBtn>
                                    }
                                </div>
                            </div>
                        </div>
                    </MDBModalBody>
                </MDBModal>
        return xhtml
    }
}

export default DetailOrder;