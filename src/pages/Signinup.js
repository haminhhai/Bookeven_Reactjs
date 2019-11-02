import React, { Component } from 'react';
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn, MDBIcon, MDBTabPane, MDBTabContent, MDBInput } from 'mdbreact'
import { connect } from 'react-redux'
import '../styles/reglog.scss'
import * as actions from '../actions/index'

class Signinup extends Component {
    //open modal
    closeModal = () => {
        this.props.onCloseModal(false)
    }
    //active the current tab
    activeTab(i) {
        this.props.onChangeTab(i)

    }
    render() {
        var { numTab, isOpen } = this.props.toggleModal[0] // numTab: this.props.toggleModal[0].numTab
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
                                <div className='row'>
                                    <div className='col'>
                                        <form>
                                            <div className="grey-text">
                                                <MDBInput
                                                    label="Nhập email của bạn"
                                                    icon="envelope"
                                                    group
                                                    type="email"
                                                    validate
                                                    error="wrong"
                                                    success="right"
                                                />
                                                <MDBInput
                                                    label="Nhập mật khẩu"
                                                    icon="lock"
                                                    group
                                                    type="password"
                                                    validate
                                                />

                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className='text-center'>

                                    <MDBBtn gradient="aqua" className='font-weight-bold text-white'>
                                        ĐĂNG NHẬP
                                    <MDBIcon icon="sign-in-alt" className='ml-2' />
                                    </MDBBtn>
                                </div>
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
                        <MDBTabPane fade tabId={2} role="tabpanel">
                            <MDBModalBody>
                                <form>
                                    <div className="grey-text">
                                        <MDBInput
                                            label="Nhập email của bạn"
                                            icon="envelope"
                                            group
                                            type="email"
                                            validate
                                            error="wrong"
                                            success="right"
                                        />
                                        <MDBInput
                                            label="Nhập mật khẩu"
                                            icon="lock"
                                            group
                                            type="password"
                                            validate
                                        />
                                        <MDBInput
                                            label="Nhập lại mật khẩu"
                                            icon="lock"
                                            group
                                            type="password"
                                            validate
                                        />
                                    </div>
                                </form>
                                <div className='text-center'>
                                    <MDBBtn gradient="peach" className='font-weight-bold text-white'>
                                        ĐĂNG KÝ
                                    <MDBIcon icon="sign-out-alt" className='ml-2' />
                                    </MDBBtn>
                                </div>
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
        toggleModal: state.toggleModal
    }
}

// call actions
const mapDispatchToProps = (dispatch, props) => {
    return {
        onCloseModal: (isOpen) => {
            dispatch(actions.closeModal(isOpen))
        },

        onChangeTab: (numTab) => {
            dispatch(actions.openModal(numTab, true))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signinup);
