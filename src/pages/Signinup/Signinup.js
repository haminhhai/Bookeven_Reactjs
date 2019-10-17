import React, { Component } from 'react';
import { MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBBtn, MDBNav, MDBNavItem, MDBNavLink, MDBIcon, MDBTabPane, MDBTabContent } from 'mdbreact'
import '../../styles/reglog.css'
class Signinup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modal: false,
            activeItem: "1"
        }
    }
    //open modal
    toggleModal = () => {
        this.setState({ modal: !this.state.modal })
    }
    //change tabs
    changeTabs = (tab) => {
        if (this.state.activeItem !== tab) {
            this.setState({
                activeItem: tab
            });
        }
    };
    //active the current tab
    activeTab = () => {
        var tabs = document.getElementsByClassName('tab')
        // eslint-disable-next-line array-callback-return
        tabs.map((item) => {
            item.className = item.className.replace(' active', '')
            this.className += 'active'
        })
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.modal)
            this.setState({ modal: nextProps.modal })
    }
    render() {
        return (
            <div className='card-reg-log'>>
                <MDBModal fade isOpen={this.state.modal} centered >
                    <MDBModalHeader>
                        <div className='row'>
                            <div className='tab-active col' onClick={this.activeTab}>
                                <MDBIcon icon="user-alt" className='mr-1'/>
                                Đăng nhập
                            </div>
                            <div className='tab col' onClick={() => this.activeTab}>
                                <MDBIcon icon="user-plus" className='mr-1'/>
                                Đăng ký
                            </div>
                        </div>
                    </MDBModalHeader>
                    <MDBModalBody>

                        <MDBTabContent fade activeItem={this.state.activeItem} >
                            <MDBTabPane fade tabId="1" role="tabpanel">
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Nihil odit magnam minima, soluta doloribus reiciendis
                                    molestiae placeat unde eos molestias. Quisquam aperiam,
                                    pariatur. Tempora, placeat ratione porro voluptate odit
                                    minima.
                                </p>
                            </MDBTabPane>
                            <MDBTabPane fade tabId="2" role="tabpanel">
                                <p className="mt-2">
                                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                    voluptate odit minima. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Nihil odit magnam minima,
                                    soluta doloribus reiciendis molestiae placeat unde eos
                                    molestias.
                                </p>
                                <p>
                                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                    voluptate odit minima. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Nihil odit magnam minima,
                                    soluta doloribus reiciendis molestiae placeat unde eos
                                    molestias.
                                </p>
                            </MDBTabPane>
                        </MDBTabContent>
                    </MDBModalBody>
                    <MDBModalFooter>
                        <MDBBtn color="" onClick={this.toggleModal}>Close</MDBBtn>
                        <MDBBtn color="primary">Save changes</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </div>
        );
    }
}

export default Signinup;
