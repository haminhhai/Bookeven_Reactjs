import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBBtn, MDBIcon, MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact'
import { Tooltip } from 'antd'
import * as msg from '../../const/message'
class ListAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            id: 0,
        }
    }

    sureToDelete = id => {
        this.setState({
            modal: true,
            id: id
        })
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal })
    }
    render() {
        const { address, toggleEditAddress, deleteAddress, info } = this.props
        const { modal, id } = this.state
        let xhtml = <h6 className='text-center font-weight-bold'>{msg.MSG_EMPTY_ADDRESS}</h6>
        if (address.length > 0)
            xhtml = address.map((item, i) => {
                return <div key={i} className='edit-adre row container mt-2'>
                    <div className='col-12'>
                        <div className='row'>
                            <h5 className='col-6'>Địa chỉ {i + 1}</h5>
                            <div className='col-6 text-right'>
                                <Tooltip placement='top' title='Chỉnh sửa địa chỉ'>
                                    <MDBBtn color='success' onClick={() => toggleEditAddress(item)}><MDBIcon icon='edit' /></MDBBtn>
                                </Tooltip>
                                <Tooltip placement='top' title='Xóa địa chỉ'>
                                    <MDBBtn color='danger' onClick={() => this.sureToDelete(item.id)}><MDBIcon icon="trash-alt" /></MDBBtn>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <MDBTable striped bordered>
                            <MDBTableBody>
                                <tr>
                                    <td>Người nhận: </td>
                                    <td>{info.fullname}</td>
                                </tr>
                                <tr>
                                    <td>Địa chỉ: </td>
                                    <td>{`${item.street}, ${this.$utils.filterAddress(item.province, item.district, item.ward)}`}</td>
                                </tr>
                                <tr>
                                    <td>Email: </td>
                                    <td>{info.email}</td>
                                </tr>
                                <tr>
                                    <td>Số điện thoại: </td>
                                    <td>{info.phone}</td>
                                </tr>
                            </MDBTableBody>
                        </MDBTable>
                    </div>

                    <MDBModal cascading isOpen={modal} toggle={this.toggleModal}>
                        <MDBModalHeader
                            tag="h5"
                            className=" red text-white"
                            toggle={this.toggleModal}>
                            <MDBIcon className='mr-2' icon="trash-alt" />
                            {msg.MSG_SURE_TO_DELETE_ADDRESS}
                        </MDBModalHeader>
                        <MDBModalBody className='text-right'>
                            <MDBBtn className='rounded-pill' outline color="danger" onClick={this.toggleModal}>Không</MDBBtn>
                            <MDBBtn className='rounded-pill' color="danger"
                                onClick={() => {
                                    deleteAddress({
                                        address_id: id
                                    })
                                    this.setState({ modal: false })
                                }}>Có</MDBBtn>
                        </MDBModalBody>
                    </MDBModal>
                </div>
            })
        return xhtml
    }
}

export default ListAddress;