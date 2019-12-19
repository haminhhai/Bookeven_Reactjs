import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { MDBBtn, MDBTable, MDBTableBody, MDBTableHead, MDBModal, MDBModalHeader, MDBModalBody, MDBIcon } from 'mdbreact';
import { Badge } from 'antd'

import Header from '../../layouts/Header/Header'
import '../../styles/order.scss'
import * as cont from './const'
import img from '../../assets/logo.png'
import DetailOrder from './DetailOrder';
class OrderCustomer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            data: {},
            address: {},
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
        const { address } = this.props
        var filtedAddress = address.filter(item => item.id === data.idAddress)[0]
        this.setState({
            data: data,
            modal: !this.state.modal,
            address: filtedAddress
        })
    }
    closeModal = () => {
        this.setState({ modal: !this.state.modal })
    }
    render() {
        const { modal, data, address } = this.state
        const { orders, role } = this.props
        return (
            <div>
                <Header carousel={false} parent='Lịch sử mua hàng' />
                <div className='order-contain container'>
                    {
                        orders.length === 0 ?
                            <div className='empty-order text-center'>
                                <img className='logo' src={img} alt='' />
                                <h4>{cont.EMPTY_ORDER}</h4>
                                <Link to='/'>
                                    <MDBBtn color=' light-green accent-3'>{cont.TO_BE_CONTINUED}</MDBBtn>
                                </Link>
                            </div> :
                            <div className='order row'>
                                <div className='container mt-4'>
                                    <MDBTable hover >
                                        <MDBTableHead color='tempting-azure-gradient' textWhite>
                                            <tr>
                                                {
                                                    cont.columnsCus.map(item =>
                                                        item.label
                                                    )
                                                }
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody >
                                            {
                                                orders.map((item, index) =>
                                                    <tr key={index} onClick={() => this.showModal(item)} style={{ cursor: 'pointer' }}>
                                                        <td>{item.id}</td>
                                                        <td className='text-center'>{this.$utils.converTSToDate(item.createAt, 'DD/MM/YYYY')}</td>
                                                        <td className='text-center'>{this.$utils.converTSToDate(item.endTime, 'DD/MM/YYYY')}</td>
                                                        <td>{this.$utils.calculateTotalCart(item.listBooks, 'vnd')}</td>
                                                        <td>{this.formatStatus(item.status)}</td>
                                                    </tr>
                                                )
                                            }
                                        </MDBTableBody>
                                    </MDBTable>
                                </div>
                            </div>
                    }
                    <DetailOrder data={data}
                        address={address}
                        closeModal={this.closeModal}
                        modal={modal} 
                        role={role} />
                </div>
            </div>
        );
    }
}

export default OrderCustomer;