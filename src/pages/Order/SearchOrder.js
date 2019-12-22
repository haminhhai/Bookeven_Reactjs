import React, { Component } from 'react';
import { Input, DatePicker, Select } from 'antd'
import { MDBBtn, MDBIcon } from 'mdbreact'


import '../../styles/order.scss'
import * as cont from './const'

const { Option } = Select
class SearchOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            code: 0,
            name: '',
            phone: '',
            fromDate: null,
            toDate: null,
            status: 1,
        }
    }

    disabledStartDate = fromDate => {
        const { toDate } = this.state;
        if (!fromDate || !toDate) {
            return false;
        }
        return fromDate.valueOf() > toDate.valueOf();
    };

    disabledEndDate = toDate => {
        const { fromDate } = this.state;
        if (!toDate || !fromDate) {
            return false;
        }
        return toDate.valueOf() <= fromDate.valueOf();
    };


    changeInputVal = (proper, value) => {
        this.setState({ [proper]: value })
    }

    onStartChange = value => {
        this.setState({ fromDate: value })
    }
    onEndChange = value => {
        this.setState({ toDate: value })
    }

    handleSubmit = () => {
        const { code, name, phone, fromDate, toDate, status }  =this.state
        const { filterOrder } = this.props
        const body = {
            id: code === 0 || code === "" ? "" : parseInt(code),
            fullName: name,
            phone: phone,
            createDate: fromDate !== null ? fromDate.unix().toString() : "",
            shipDate: toDate !== null ? toDate.unix().toString() : "",
            status: status
        }
        filterOrder(body)
    }
    render() {
        const { code, name, phone, fromDate, toDate, status } = this.state
        return (
            <div className='order'>
                <h4><MDBIcon className='mr-2' icon="search" />Tra cứu</h4>
                <div className='row container'>
                    <div className='col-4'>
                        <label>Mã đơn hàng</label>
                        <Input
                            placeholder='Nhập mã đơn hàng'
                            value={code}
                            onChange={(e) => this.changeInputVal('code', e.target.value)}
                            size='large' />
                    </div>
                    <div className='col-4'>
                        <label>Khách hàng</label>
                        <Input
                            placeholder='Nhập tên khách hàng'
                            value={name}
                            onChange={(e) => this.changeInputVal('name', e.target.value)}
                            size='large' />
                    </div>
                    <div className='col-4'>
                        <label>Điện thoại</label>
                        <Input
                            placeholder='Nhập số điện thoại'
                            value={phone}
                            onChange={(e) => this.changeInputVal('phone', e.target.value)}
                            size='large' />
                    </div>
                    <div className='col-4'>
                        <label>Ngày đặt</label>
                        <DatePicker
                            disabledDate={this.disabledStartDate}
                            value={fromDate}
                            onChange={this.onStartChange}
                            size='large'
                            placeholder='Chọn ngày đặt'
                            style={{ width: '100%' }} />
                    </div>
                    <div className='col-4'>
                        <label>Ngày nhận</label>
                        <DatePicker
                            disabledDate={this.disabledEndDate}
                            onChange={this.onEndChange}
                            value={toDate}
                            size='large'
                            placeholder='Chọn ngày nhận'
                            style={{ width: '100%' }} />
                    </div>
                    <div className='col-4'>
                        <label>Tình trạng</label>
                        <Select
                            value={status}
                            onChange={(e) => this.changeInputVal('status', e)}
                            placeholder='Chọn tình trạng'
                            size='large'
                            style={{ width: '100%' }} >
                            {
                                cont.arr_statuses.map((item, i) =>
                                    <Option key={i} value={item.id}>{item.name}</Option>)
                            }
                        </Select>
                    </div>
                    <div className='col-12 text-right mt-4'>
                        <MDBBtn onClick={this.handleSubmit} gradient='aqua'>Tra cứu</MDBBtn>
                    </div>
                </div>

            </div>
        );
    }
}

export default SearchOrder;