import React, { Component } from 'react';
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn, MDBNav, MDBNavItem, MDBNavLink, MDBIcon, MDBTabPane, MDBTabContent, MDBInput, MDBCardBody } from 'mdbreact'
import '../../styles/reglog.scss'
import Spinner from '../../components/Spinners/Spinner'
class Signinup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false, //isOpening modal
            activeItem: "1", //number of Tab content
            curTab: this.props.numTab, //current Tab active

        }
    }
    //open modal
    toggleModal = () => {
        this.setState({ modal: !this.state.modal })
    }
    //active the current tab
    activeTab(i) {
        if (i === 1) {
            this.setState({
                activeItem: "1",
                curTab: 1
            })

        }
        else {
            this.setState({
                activeItem: "2",
                curTab: 2
            })
        }

    }
    //change tabs content
    changeTabs = (tab) => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.modal)
            this.setState({ modal: nextProps.modal })
        if (nextProps.numTab === 1) {
            this.setState({
                activeItem: "1",
                curTab: 1
            })
        }
        else {
            this.setState({
                activeItem: "2",
                curTab: 2
            })
        }

    }
    render() {
        return (
            <div className='card-reg-log'>
                <Spinner title='Loading' />
                <MDBModal isOpen={this.state.modal} centered >
                    <MDBModalHeader>
                        <div className='row'>
                            <div className={`col ${this.state.curTab === 1 ? "activeTab" : ""}`} onClick={() => { this.activeTab(1) }}>
                                <MDBIcon icon="user-alt" className='mr-1' />
                                Đăng nhập
                            </div>
                            <div className={`col ${this.state.curTab === 2 ? "activeTab" : ""}`} onClick={() => { this.activeTab(2) }}>
                                <MDBIcon icon="user-plus" className='mr-1' />
                                Đăng ký
                            </div>
                        </div>
                    </MDBModalHeader>

                    <MDBTabContent activeItem={this.state.activeItem} >
                        <MDBTabPane tabId="1" role="tabpanel">
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
                                <MDBBtn className='ml-auto' outline onClick={this.toggleModal}>Quay lại</MDBBtn>
                            </MDBModalFooter>
                        </MDBTabPane>
                        <MDBTabPane fade tabId="2" role="tabpanel">
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
                                <MDBBtn className='ml-auto' outline color='warning' onClick={this.toggleModal}>Quay lại</MDBBtn>
                            </MDBModalFooter>
                        </MDBTabPane>
                    </MDBTabContent>
                </MDBModal>
            </div>
        );
    }
}

export default Signinup;
