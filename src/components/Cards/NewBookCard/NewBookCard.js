import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { MDBCard, MDBIcon, MDBCardBody, MDBCardTitle, MDBCardText, MDBMask, MDBView } from 'mdbreact'

import './style.scss'
import ModalNewBook from './ModalNewBook';
class NBCard extends Component {
    state = {
        modal: false
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal })
    }
    render() {
        const { modal } = this.state
        const { fieldsBook } = this.props
        return (
            <div className='nbcard-container'>
                <MDBCard style={{ minWidth: '14rem', height: 'auto' }} className='text-center'>
                    <MDBView className='book-wrapper' hover onClick={this.toggleModal}>
                        <MDBIcon icon="plus-circle" size='5x' />
                        <MDBMask className="flex-center" overlay="white-light" />
                    </MDBView>
                    <MDBCardBody>
                        <MDBCardTitle className="h5 font-weight-bold" title='Thêm mới'>
                            Thêm mới
                        </MDBCardTitle>
                    </MDBCardBody>
                </MDBCard>
                {
                    modal &&
                    <ModalNewBook modal={modal} toggleModal={this.toggleModal} fieldsBook={fieldsBook} />
                }
            </div >
        )
    }
}

export default NBCard;
