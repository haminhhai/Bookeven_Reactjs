import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBIcon, MDBFormInline, MDBBtn, MDBCol, MDBBadge, MDBMask
} from "mdbreact";
import logo from '../../assets/logo.png'
import '../../styles/layout.scss'
import Signinup from '../../pages/Home/Signinup';

import img from '../../assets/banner.jpg'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openingTopNav: false,
            openingMenuBar: false,
    
            openModal: false,
            numTab: 1,
    
            isCarousel: this.props.carousel
        };
    }

    toggleNavBar = () => {
        this.setState({ openingTopNav: !this.state.openingTopNav });
    }
    toggleMenuBar = () => {
        this.setState({ openingMenuBar: !this.state.openingMenuBar });
    }
    toggleModal = (i) => {
        this.setState({ openModal: true })
        if (i === 1)
            this.setState({ numTab: 1 })
        else this.setState({ numTab: 2 })
    }
    render() {
        return (
            <div>
                <MDBNavbar scrolling fixed="top" dark expand="md">
                    <Link to='/'>
                        <img src={logo} alt='' />
                    </Link>
                    <MDBNavbarToggler onClick={this.toggleNavBar} />
                    <MDBCollapse id="navbarCollapse3" isOpen={this.state.openingTopNav} navbar>
                        <MDBNavbarNav center="true" >
                            <MDBNavItem active>
                                <MDBCol md="12">
                                    <MDBFormInline className="md-form mr-auto">
                                        <input className="form-control mr-sm-1" type="text" placeholder="Nhập từ khóa" aria-label="Search" />
                                        <MDBBtn gradient="dusty-grass" size="sm" className="mr-auto">
                                            <MDBIcon icon="search" className='mr3' />
                                        </MDBBtn>
                                    </MDBFormInline>
                                </MDBCol>
                            </MDBNavItem>

                        </MDBNavbarNav>
                        <MDBNavbarNav right>
                            <MDBNavItem>
                                <MDBNavLink className="cart-nav waves-effect waves-light text-center" to="#!">
                                    <MDBBtn size="sm" className="mr-auto">
                                        <MDBIcon icon="shopping-basket" className='mr3' size='2x'>
                                            <MDBBadge color="danger" className='ml-1'>12</MDBBadge>
                                        </MDBIcon>
                                    </MDBBtn>
                                </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light text-center" to="#!" onClick={() => { this.toggleModal(1) }}>
                                    ĐĂNG NHẬP
                                    </MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem>
                                <MDBNavLink className="waves-effect waves-light text-center" to="#!" onClick={() => { this.toggleModal(2) }}>
                                    ĐĂNG KÝ
                                    </MDBNavLink>
                            </MDBNavItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBNavbar>
                {
                    this.state.isCarousel || this.state.isCarousel === undefined ?
                        <MDBCarousel
                            activeItem={1}
                            length={3}
                            showControls={true}
                            showIndicators={true}
                            className="z-depth-1">
                            <MDBCarouselInner>
                                <MDBCarouselItem itemId="1">
                                    <MDBView>
                                        <div className="slider1" id='sli' />
                                    </MDBView>
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="2">
                                    <MDBView>
                                        <div className='slider2' id='sli' />
                                    </MDBView>
                                </MDBCarouselItem>
                                <MDBCarouselItem itemId="3">
                                    <MDBView>
                                        <div className='slider3' id='sli' />
                                    </MDBView>
                                </MDBCarouselItem>
                            </MDBCarouselInner>

                        </MDBCarousel> :
                        <MDBView id='sli' src={img}>
                            <MDBMask overlay="black-strong" className="flex-center flex-column text-white text-center">
                                <h1 className='text-white'>Bookeven</h1>
                                <h6 className='text-white font-italic'>Home / Bookstore</h6>
                            </MDBMask>
                        </MDBView>
                }
                <div className='container'>
                    <div className='over-img-card' >
                        <MDBNavbar className='row' color="heavy-rain-gradient" light expand="md">
                            <div className='col-sm-4 col-md-4'>
                                <MDBIcon icon="tasks" className='mr-1' />
                                Danh mục sách
                            </div>
                            <Link className='col-sm-4 col-md-4' to='/store'>
                                <MDBIcon icon="swatchbook" className='mr-1' />
                                Cửa hàng
                            </Link>
                            <div className='col-sm-4 col-md-4'>
                                <MDBIcon icon="history" className='mr-1' />
                                Lịch sử mua hàng
                            </div>
                        </MDBNavbar>
                    </div>
                </div>
                <Signinup modal={this.state.openModal} numTab={this.state.numTab} />
            </div>
        )
    }
}

export default Header;