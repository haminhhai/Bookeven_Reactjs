import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBIcon } from 'mdbreact';
import { Badge } from 'antd'

import Header from '../../layouts/Header/Header'
import '../../styles/order.scss'
import * as cont from './const'
import img from '../../assets/logo.png'
import DetailOrder from './DetailOrder';
import SearchOrder from './SearchOrder';
class OrderManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            data: {},
        }

    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    formatStatus = status => {
        switch (status) {
            case 2:
                return <Badge status='success' text={cont.statuses.success} />
            case 3:
                return <Badge status='error' text={cont.statuses.failed} />
            default:
                return <Badge status='processing' text={cont.statuses.process} />
        }
    }
    showModal = data => {
        const { fetchDetailOrder } = this.props
        fetchDetailOrder({
            id: data.id
        })
        this.setState({
            modal: true
        })
    }
    closeModal = () => {
        this.setState({ modal: !this.state.modal })
    }
    render() {
        const { modal } = this.state
        const { orders, updateOrder, role, detail, filterOrder } = this.props
        return (
            <div>
                <Header carousel={false} parent='Tình hình đơn hàng' />
                <div className='order-contain container'>
                            <React.Fragment>
                                <SearchOrder filterOrder={filterOrder}/>
                                <div className='order row'>
                                    <h4 className='container'><MDBIcon className='mr-2' icon="file-invoice-dollar" />Đơn hàng</h4>
                                    <div className='container mt-4'>
                                        <MDBTable hover >
                                            <MDBTableHead color='tempting-azure-gradient' textWhite>
                                                <tr>
                                                    {
                                                        cont.columnsMan.map(item =>
                                                            item.label
                                                        )
                                                    }
                                                </tr>
                                            </MDBTableHead>
                                            <MDBTableBody >
                                                {
                                                    orders.map((item, index) =>
                                                        <tr key={index} onClick={() => this.showModal(item)} style={{ cursor: 'pointer' }}>
                                                            <td className='align-middle'>{item.id}</td>
                                                            <td className='align-middle'>
                                                                {item.fullName}
                                                            </td>
                                                            <td className='align-middle'>
                                                                {item.phone}
                                                            </td>
                                                            <td className='text-center align-middle'>{this.$utils.converTSToDate(parseInt(item.createDate), 'DD/MM/YYYY')}</td>
                                                            <td className='text-center'>{item.shipDate !== null ? this.$utils.converTSToDate(parseInt(item.shipDate), 'DD/MM/YYYY') : '--/--/----'}</td>
                                                            <td className='align-middle'>{this.$utils.formatVND(item.total)}</td>
                                                            <td className='align-middle'>{this.formatStatus(item.status)}</td>
                                                        </tr>
                                                    )
                                                }
                                            </MDBTableBody>
                                        </MDBTable>
                                    </div>
                                </div>
                            </React.Fragment>
                    {modal &&
                        <DetailOrder data={detail}
                            closeModal={this.closeModal}
                            modal={modal} 
                            updateOrder={updateOrder}
                            role={role} />}
                </div>
            </div>
        );
    }
}

export default OrderManager;