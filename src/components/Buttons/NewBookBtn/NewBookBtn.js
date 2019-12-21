import React, { Component } from 'react';

import { MDBIcon, MDBBtn } from 'mdbreact'

import './style.scss'
import ModalNewBook from './ModalNewBook';
class NBBtn extends Component {
    state = {
        modal: false
    }

    toggleModal = () => {
        this.setState({ modal: !this.state.modal })
    }
    render() {
        const { modal } = this.state
        const { fieldsBook, addNewBook, uploadImage } = this.props
        return (
            <div>
                <div className='nbbtn-container' onClick={this.toggleModal}>
                    <MDBBtn >
                        <MDBIcon icon='plus-circle' size='2x' />
                    </MDBBtn>
                    <div>Thêm sách</div>
                </div >
                {
                    modal &&
                    <ModalNewBook addNewBook={addNewBook} modal={modal} toggleModal={this.toggleModal} fieldsBook={fieldsBook} uploadImage={uploadImage}/>
                }
            </div>
        )
    }
}

export default NBBtn;
