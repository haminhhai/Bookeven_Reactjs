import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
    MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler,
    MDBCollapse, MDBIcon, MDBBtn, MDBBadge, MDBMask, MDBNavbarBrand, MDBContainer, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,

} from "mdbreact";
import { Breadcrumb } from 'antd';

import * as bookActions from '../../actions/book'
import * as uiActions from '../../actions/ui'
import { roles } from '../../const/config'

import '../../styles/layout.scss'

import Signinup from '../../pages/User/ModalAuthen';
import SearchBox from '../../components/SearchBox/SearchBox'

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

            authen: localStorage.getItem('authen'),

            keyWord: '',
        };
    }

    handleFilter = e => {
        const { value } = e.target
        this.setState({ keyWord: value })
    }

    handleSearch = () => {
        const { keyWord } = this.state
        const { bookActions } = this.props
        const { getKeyword, filterBooksSingle } = bookActions
        getKeyword(keyWord)
        filterBooksSingle(keyWord)
    }

    toggleNavBar = () => {
        this.setState({ openingTopNav: !this.state.openingTopNav });
    }
    toggleMenuBar = () => {
        this.setState({ openingMenuBar: !this.state.openingMenuBar });
    }
    toggleModal = (i) => {
        const { uiActions } = this.props
        const { openModal } = uiActions
        openModal(i)
    }
    Logout() {
        localStorage.removeItem('authen')
        localStorage.removeItem('role')
        window.location.reload()
    }
    render() {
        const { parent, child, cart, fieldsBook } = this.props //parent = this.props.parent
        const role = localStorage.getItem('role')
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
                                <SearchBox handleChange={this.handleFilter} handleSearch={this.handleSearch} />
                            </MDBNavbarNav>
                            {this.state.authen === null ?
                                <MDBNavbarNav className='reglog' right>
                                    <MDBBtn onClick={() => { this.toggleModal(1) }}>
                                        ĐĂNG NHẬP
                                    </MDBBtn>
                                    <MDBBtn onClick={() => { this.toggleModal(2) }}>
                                        ĐĂNG KÝ
                                    </MDBBtn>
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
                                                <Link to='/tai-khoan'>
                                                    <MDBDropdownItem>Tài khoản</MDBDropdownItem>
                                                </Link>
                                                <MDBDropdownItem onClick={this.Logout}>Đăng xuất</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBNavItem>
                                </MDBNavbarNav>
                            }
                            {
                                role === '1' &&
                                <MDBNavLink className="cart-nav waves-effect waves-light text-center" to="/gio-hang">
                                    <MDBBtn size="sm" className="cart-nav-btn mr-auto">
                                        <MDBIcon icon="shopping-cart" className='mr3' size='2x'>
                                            <MDBBadge color="danger" className='ml-1'>{total}</MDBBadge>
                                        </MDBIcon>
                                    </MDBBtn>
                                </MDBNavLink>
                            }
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
                                <h1 className='text-white'>{child !== undefined ? child : parent}</h1>
                                <Breadcrumb>
                                    <Breadcrumb.Item>
                                        <Link to='/'>Trang chủ</Link>
                                    </Breadcrumb.Item>
                                    <Breadcrumb.Item>
                                        {child !== undefined ?
                                            <Link to={`/${this.$utils.convertVietnamese(parent)}`} >
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
                                    <MDBDropdownToggle title='Danh mục sách'>
                                        <MDBIcon icon="tasks" className='mr-1' />
                                        Danh mục sách
                                        <MDBIcon icon="caret-down" />
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu >
                                        {fieldsBook.map((item, index) =>
                                            index < 7 &&
                                            <MDBDropdownItem key={index}>
                                                <Link to={'/' + item.path}>
                                                    {item.name}
                                                </Link>
                                            </MDBDropdownItem>

                                        )}
                                    </MDBDropdownMenu>
                                </MDBDropdown>

                            </div>
                            {
                                role === '1' &&
                                roles.customer.over_img_card.map((item, index) =>
                                    <Link
                                        key={index}
                                        to={`/${this.$utils.convertVietnamese(item.title)}`}
                                        className='col d-flex justify-content-center'>
                                        <MDBIcon icon={item.icon} className='mr-1' />
                                        {item.title}
                                    </Link>
                                )
                            }
                            {
                                role === '2' &&
                                roles.manager.over_img_card.map((item, index) =>
                                    <Link
                                        key={index}
                                        to={`/${this.$utils.convertVietnamese(item.title)}`}
                                        className='col d-flex justify-content-center'>
                                        <MDBIcon icon={item.icon} className='mr-1' />
                                        {item.title}
                                    </Link>
                                )
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
        cart: state.cart,
        fieldsBook: state.books.fieldsBook
    }
}

const mapDispatchToProps = dispatch => {
    return {
        uiActions: bindActionCreators(uiActions, dispatch),
        bookActions: bindActionCreators(bookActions, dispatch)

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
