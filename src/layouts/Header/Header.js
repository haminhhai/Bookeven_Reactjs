import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
    MDBCollapse, MDBIcon, MDBBtn, MDBBadge, MDBMask, MDBNavbarBrand, MDBContainer, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,

} from "mdbreact";
import { Breadcrumb } from 'antd';

import { connect } from 'react-redux'
import * as actions from '../../actions/index'
import { fieldsBook } from '../../const/listbook'

import '../../styles/layout.scss'

import Signinup from '../../pages/User/ModalAuthen';

import img from '../../assets/banner.jpg'
import logo from '../../assets/logo.png'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openingTopNav: false,
            openingMenuBar: false,

            openModal: false,
            numTab: 1,

            isCarousel: this.props.carousel,

            authen: localStorage.getItem('authen')
        };
    }

    toggleNavBar = () => {
        this.setState({ openingTopNav: !this.state.openingTopNav });
    }
    toggleMenuBar = () => {
        this.setState({ openingMenuBar: !this.state.openingMenuBar });
    }
    toggleModal = (i) => {
        this.props.onOpenModal(i, true)
    }
    Logout() {
        localStorage.removeItem('authen')
        window.location.reload()
    }
    render() {
        const { parent, child, cart } = this.props //parent = this.props.parent
        var total = 0
        if (cart.length > 0)
            cart.forEach(element => {
                total += element.quantity
            });

        return (
            <div>
                <MDBNavbar scrolling fixed="top" dark expand="md">
                    <MDBContainer>
                        <MDBNavbarBrand href='/'>
                            <img src={logo} alt='' />
                        </MDBNavbarBrand>
                        <MDBNavbarToggler onClick={this.toggleNavBar} />
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.openingTopNav} navbar>
                            <MDBNavbarNav left>
                                <div className="input-field text-center">
                                    <div className="choices" data-type="text" aria-haspopup="true" aria-expanded="false" dir="ltr">
                                        <div className="choices__inner">
                                            <input className="choices__input" placeholder="Tìm sách..." />
                                        </div>
                                        <div className="choices__list choices__list--dropdown" aria-expanded="false">
                                        </div>
                                    </div>
                                    <button className="btn-search">
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </MDBNavbarNav>
                            {this.state.authen === null ?
                                <MDBNavbarNav className='reglog' right>
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
                                :
                                <MDBNavbarNav className='reglog' right>
                                    <MDBNavItem>
                                        <MDBDropdown>
                                            <MDBDropdownToggle title='Chào Bookevener'>
                                                <MDBIcon className='mr-2' icon="book-reader" size='2x' />
                                                Chào Bookevener!
                                            </MDBDropdownToggle>
                                            <MDBDropdownMenu >
                                                <Link to='/account'>
                                                    <MDBDropdownItem>Tài khoản</MDBDropdownItem>
                                                </Link>
                                                <MDBDropdownItem onClick={this.Logout}>Đăng xuất</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            }
                            <MDBNavLink className="cart-nav waves-effect waves-light text-center" to="/cart">
                                <MDBBtn size="sm" className="cart-nav-btn mr-auto">
                                    <MDBIcon icon="shopping-cart" className='mr3' size='2x'>
                                        <MDBBadge color="danger" className='ml-1'>{total}</MDBBadge>
                                    </MDBIcon>
                                </MDBBtn>
                            </MDBNavLink>
                        </MDBCollapse>
                    </MDBContainer>
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
                                <h1 className='text-white'>{parent}</h1>
                                <Breadcrumb>
                                    <Breadcrumb.Item>
                                        <Link to='/'>Trang chủ</Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        {child !== undefined ?
                                            <Link to='' onClick={document.documentElement.scrollTop = 0}>
                                                {parent}
                                            </Link> :
                                            parent
                                        }
                                    </Breadcrumb.Item>
                                    {child !== undefined &&
                                        <Breadcrumb.Item>
                                            {child}
                                        </Breadcrumb.Item>
                                    }
                                </Breadcrumb>
                            </MDBMask>
                        </MDBView>
                }
                <div className='container'>
                    <div className='over-img-card' >
                        <MDBNavbar className='row' color="heavy-rain-gradient" light expand="md">
                            <div className='col d-flex justify-content-center'>
                                <MDBDropdown>
                                    <MDBDropdownToggle title='Chào Bookevener'>
                                        <MDBIcon icon="tasks" className='mr-1' />
                                        Danh mục sách
                                            </MDBDropdownToggle>
                                    <MDBDropdownMenu >
                                        {fieldsBook.map((item, index) => {
                                            if (index < 7)
                                                return (
                                                    <MDBDropdownItem key={index}>
                                                        <Link to={'/' + item.path}>
                                                            {item.name}
                                                        </Link>
                                                    </MDBDropdownItem>
                                                )
                                        })}
                                    </MDBDropdownMenu>
                                </MDBDropdown>

                            </div>
                            <Link className='col d-flex justify-content-center' to='/cua-hang-sach' >
                                <MDBIcon icon="user-edit" className='mr-1' />
                                Tác giả
                            </Link>
                            {this.state.authen !== null &&
                                <div className='col d-flex justify-content-center'>
                                    <MDBIcon icon="history" className='mr-1' />
                                    Lịch sử mua hàng
                                </div>
                            }
                        </MDBNavbar>
                    </div>
                </div>
                <Signinup modal={this.state.openModal} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onOpenModal: (numTab, isOpen) => {
            dispatch(actions.openModal(numTab, isOpen))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
