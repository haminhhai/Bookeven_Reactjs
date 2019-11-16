import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn, MDBIcon, MDBTabPane, MDBTabContent, MDBInput } from 'mdbreact'

import '../../styles/reglog.scss'
import * as uiActions from '../../actions/ui'
import SignIn from './SignIn';
import SignUp from './SignUp'

class ModalAuth extends Component {
    //open modal
    closeModal = () => {
        const { uiActions } = this.props
        const { closeModal } = uiActions
        closeModal()
    }
    //active the current tab
    activeTab(i) {
        const { uiActions } = this.props
        const { openModal } = uiActions
        openModal(i, true)

    }
    render() {
        var { numTab, isOpen } = this.props.ui.toggleModal 
        return (
            <div className='card-reg-log'>

                <MDBModal isOpen={isOpen} centered >
                    <MDBModalHeader>
                        <div className='row'>
                            <div className={`col ${numTab === 1 ? "activeTab" : ""}`} onClick={() => { this.activeTab(1) }}>
                                <MDBIcon icon="user-alt" className='mr-1' />
                                Đăng nhập
                            </div>
                            <div className={`col ${numTab === 2 ? "activeTab" : ""}`} onClick={() => { this.activeTab(2) }}>
                                <MDBIcon icon="user-plus" className='mr-1' />
                                Đăng ký
                            </div>
                        </div>
                    </MDBModalHeader>

                    <MDBTabContent activeItem={numTab} >
                        <MDBTabPane tabId={1} role="tabpanel">
                            <MDBModalBody>
                                <SignIn/>
                            </MDBModalBody>
                            <MDBModalFooter>
                                <div className='float-left text-left text-md-right'>
                                    <p>Chưa có tài khoản?</p>
                                    <div className='go-registry'
                                        onClick={() => { this.activeTab(2) }}>
                                        Đăng ký ngay!
                                    </div>
                                </div>
                                <MDBBtn className='ml-auto' outline onClick={this.closeModal}>Quay lại</MDBBtn>
                            </MDBModalFooter>
                        </MDBTabPane>
                        <MDBTabPane tabId={2} role="tabpanel">
                            <MDBModalBody>
                                <SignUp/>
                            </MDBModalBody>
                            <MDBModalFooter>

                                <div className='float-left text-left text-md-right'>
                                    <p>Đã có tài khoản?</p>
                                    <div className='go-login'
                                        onClick={() => { this.activeTab(1) }}>
                                        Đăng nhập ngay!
                                    </div>
                                </div>
                                <MDBBtn className='ml-auto' outline color='warning' onClick={this.closeModal}>Quay lại</MDBBtn>
                            </MDBModalFooter>
                        </MDBTabPane>
                    </MDBTabContent>
                </MDBModal>
            </div>
        );
    }
}

// get props toggleModal
const mapStateToProps = state => {
    return {
        ui: state.ui
    }
}

// call actions
const mapDispatchToProps = dispatch => {
    return {
        uiActions: bindActionCreators(uiActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalAuth);
