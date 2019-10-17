import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
    MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon, MDBFormInline, MDBBtn, MDBCol
} from "mdbreact";
import logo from '../../assets/logo.png'
import '../../styles/layout.css'
import Signinup from '../../pages/Signinup/Signinup';

class Header extends Component {
    state = {
        openingTopNav: false,
        openingMenuBar: false,
        openModal: false
      };
      
      toggleNavBar = () => {
        this.setState({ openingTopNav: !this.state.openingTopNav });
      }
      toggleMenuBar = () => {
        this.setState({ openingMenuBar: !this.state.openingMenuBar });
      }
      toggleModal = () => {
          this.setState({openModal: true})
      }
    render() {
        return (
            <div>
                <Router>
                    <MDBNavbar scrolling fixed="top" dark expand="md">
                            <img src={logo} alt=''/>
                        <MDBNavbarToggler onClick={this.toggleNavBar} />
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.openingTopNav} navbar>
                            <MDBNavbarNav left >
                                <MDBNavItem active>
                                    <MDBCol md="12">
                                        <MDBFormInline className="md-form mr-auto">
                                            <input className="form-control mr-sm-1"  type="text" placeholder="Nhập từ khóa" aria-label="Search" />
                                            <MDBBtn gradient="dusty-grass" size="sm" className="mr-auto">
                                            <MDBIcon icon="search" className='mr3'/>
                                            </MDBBtn>
                                        </MDBFormInline>
                                    </MDBCol>
                                </MDBNavItem>
                                
                            </MDBNavbarNav>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <MDBNavLink className="waves-effect waves-light" to="#!" onClick={this.toggleModal}>
                                        ĐĂNG NHẬP
                                    </MDBNavLink>
                                </MDBNavItem>
                                <MDBNavItem>
                                    <MDBNavLink className="waves-effect waves-light" to="#!">
                                        ĐĂNG KÝ
                                    </MDBNavLink>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                   
                </Router>
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    className="z-depth-1"
                >
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <div className="slider1" id='sli'/>
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <div className='slider2' id='sli' />
                            </MDBView>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                            <MDBView>
                                <div className='slider3'  id='sli'/>
                            </MDBView>
                        </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
                <Router>
                <div className='over-img-card'>
                <MDBNavbar color="heavy-rain-gradient" light expand="md">
                        <MDBNavbarToggler onClick={this.toggleMenuBar} />
                        <MDBCollapse id="navbarCollapse4" isOpen={this.state.openingMenuBar} navbar>
                            <MDBNavbarNav center >
                                <MDBNavItem>
                                        <MDBNavLink className="waves-effect waves-light" to="#!">
                                            <MDBIcon icon="tasks"className='mr-1' />
                                            Danh mục sản phẩm
                                            <MDBIcon icon="caret-down" />
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink className="waves-effect waves-light" to="#!">
                                            <MDBIcon icon="history" className='mr-1'/>
                                            Lịch sử mua hàng
                                        </MDBNavLink>
                                    </MDBNavItem>
                                    <MDBNavItem>
                                        <MDBNavLink className="waves-effect waves-light" to="#!">
                                            <MDBIcon icon="shopping-cart" className='mr-1'/>
                                            Giỏ hàng
                                        </MDBNavLink>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </div>  
                <Signinup modal={this.state.openModal} />
                </Router>
            </div>
        )
    }
}

export default Header;