import React, { Component } from 'react';
import { MDBTable, MDBTableBody, MDBBtn, MDBIcon, MDBModal, MDBModalFooter, MDBModalHeader } from 'mdbreact'
import province from '../../utils/data/province.json'
import district from '../../utils/data/district.json'
import ward from '../../utils/data/ward.json'
import * as msg from '../../const/message'
class ListAddress extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            id: 0,
        }
    }
    handleAddress = (street, wardId, districtId, provinceId) => {
        const wardName = ward.filter(item => item.wardid === wardId)
        const districtName = district.filter(item => item.districtid === districtId)
        const provinceName = province.filter(item => item.provinceid === provinceId)
        return `${street}, ${wardName[0].name}, ${districtName[0].name}, ${provinceName[0].name}`
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
        const { address, toggleEditAddress, deleteAddress } = this.props
        const { modal, id } = this.state
        let xhtml = <h6 className='text-center font-weight-bold'>{msg.MSG_EMPTY_ADDRESS}</h6>
        if (address.length > 0)
            xhtml = address.map((item, i) => {
                return <div key={i} className='edit-adre row container mt-2'>
                    <div className='col-12'>
                        <div className='row'>
                            <h5 className='col-6'>Địa chỉ {i + 1}</h5>
                            <div className='col-6 text-right'>
                                <MDBBtn color='success' onClick={() => toggleEditAddress(item)}><MDBIcon icon='edit' /></MDBBtn>
                                <MDBBtn color='danger' onClick={() => this.sureToDelete(item.id)}><MDBIcon icon="trash-alt" /></MDBBtn>
                            </div>
                        </div>
                    </div>
                    <MDBTable striped bordered>
                        <MDBTableBody>
                            <tr>
                                <td>Người nhận: </td>
                                <td>{item.name}</td>
                            </tr>
                            <tr>
                                <td>Địa chỉ: </td>
                                <td>{this.handleAddress(item.street, item.ward, item.district, item.province)}</td>
                            </tr>
                            <tr>
                                <td>Email: </td>
                                <td>{item.email}</td>
                            </tr>
                            <tr>
                                <td>Số điện thoại: </td>
                                <td>{item.phone}</td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>

                    <MDBModal isOpen={modal} toggle={this.toggleModal} size="sm">
                        <MDBModalHeader toggle={this.toggleModal}>{msg.MSG_SURE_TO_DELETE_ADDRESS}</MDBModalHeader>
                        <MDBModalFooter>
                            <MDBBtn outline color="danger" size="sm" onClick={this.toggleModal}>Không</MDBBtn>
                            <MDBBtn color="danger" size="sm"
                                onClick={() => {
                                    deleteAddress(id)
                                    this.setState({ modal: false })
                                }}>Có</MDBBtn>
                        </MDBModalFooter>
                    </MDBModal>
                </div>
            })
        return xhtml
    }
}

export default ListAddress;