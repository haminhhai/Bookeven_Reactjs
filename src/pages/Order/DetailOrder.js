import React, { Component } from 'react';

import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody, MDBModal, MDBModalHeader, MDBModalBody, MDBIcon, MDBBadge, } from 'mdbreact';
import { Select, DatePicker } from 'antd'

import '../../styles/order.scss'
import * as cont from './const'
import moment from 'moment'

const role = localStorage.getItem('role')
const { Option } = Select
class DetailOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: '',
            fromDate: null,
            toDate: moment(new Date()),
            isEditTime: false,
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
        const { data, updateOrder, closeModal } = this.props
        var body = data
        body.endTime = moment(toDate).unix()
        body.status = status
        updateOrder(body)
        closeModal()
    }
    componentDidMount() {
        const { data } = this.props
        this.setState({
            status: data.status,
            fromDate: moment.unix(data.createAt),
            toDate: typeof data.endTime !== 'string' ? moment.unix(data.endTime) : this.state.toDate
        })
    }
    render() {
        const { data, address, modal, closeModal } = this.props
        const { status, isEditTime, toDate } = this.state
        let xhtml = null
        if (address.name !== undefined)
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
                                    {this.$utils.formatTimeToDate(data.createAt, 'DD/MM/YYYY')}
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
                                            this.$utils.formatTimeToDate(data.endTime, 'DD/MM/YYYY')
                                    }
                                    {
                                        role === '2' &&
                                        <MDBBadge onClick={this.showEditTime} className='edit-badge ml-3' color='warning'>Sửa</MDBBadge>
                                    }
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
                                {
                                    role === '2' &&
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
                                                            {this.$utils.calDiscountPrice(item.realPrice, item.percentDiscount)}
                                                        </td>
                                                        <td className='align-middle font-weight-bold'>
                                                            {this.$utils.calTotalPrice(item.realPrice, item.percentDiscount, item.quantity)}
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
                                    {
                                        role === '2' &&
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