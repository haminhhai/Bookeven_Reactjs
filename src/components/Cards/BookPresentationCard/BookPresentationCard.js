import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom'

import { MDBCard, MDBIcon, MDBCardBody, MDBCardTitle, MDBCardText, MDBMask, MDBView } from 'mdbreact'
import {Rate } from 'antd'
import * as cont from './const'

import './style.scss'
import { roles } from '../../../const/config'
import ModalEditBook from './ModalEditBook';
import empty from '../../../assets/empty.jpg'
class BPCard extends Component {
  state = {
    data: {},
    modal: false,
    id: 0,
  }

  checkAuthen = book => {
    const { role, authen, onAddToCart, openModal, getDetailBook } = this.props
    if (authen) {
      if (role === 1)
        onAddToCart({
          book_id: book.id,
          amount: 1
        })
      else {
        getDetailBook({ id: book.id })
        this.showModal(book.id)
      }
    } else {
      openModal(1, true)
    }
  }

  showModal = id => {
    this.setState({
      id: id,
      modal: !this.state.modal
    })
  }

  closeModal = () => {
    this.setState({ modal: !this.state.modal })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.role !== 0) {
      const { role } = this.props
      if (role === 2)
        this.setState({
          data: roles.manager.couple_btn
        })
      else this.setState({ data: roles.customer.couple_btn })
    }
    else this.setState({ data: roles.customer.couple_btn })
  }
  render() {
    const { data, id, modal } = this.state
    const { fieldsBook, updateListBook, fetchListBook, detailBook } = this.props
    var book = {
      id: 0,
      image: empty,
      title: 'Sách trống',
      author: 'Null',
      price: 0,
      discount: 0,
      topic: 0,
      inventory: 0,
      rate: 0
    }
    if (this.props.book !== undefined)
      book = this.props.book
    return (
      <div className='bpcard-container'>
        <MDBCard style={{ minWidth: '14rem', height: 'auto' }} className='text-center'>
          <Link to={book.author !== 'Null' ? `/chi-tiet-sach/${book.id}` : '/#'}>
            <MDBView className='book-wrapper' hover>
              <LazyLoad height='200' offset={100} once>
                <img src={book.image} waves="true" className="imgBook" alt="" overlay="true" />
                {
                  book.discount > 0 &&
                  <div className="promotionPercent">
                    {cont.SVG}
                    <span>{book.discount + '%'}</span>
                  </div>
                }
              </LazyLoad>
              <MDBMask className="flex-center" overlay="white-light" />
            </MDBView>
          </Link>
          <MDBCardBody>
            <MDBCardTitle className="h5" title={book.title}>
              <Link className='text-dark author' to={book.author !== 'Null' ? `/chi-tiet-sach/${book.id}` : '/#'}>
                {book.title}
              </Link>
            </MDBCardTitle>
            <MDBCardText className='font-italic text-muted'>
              {book.author}
            </MDBCardText>
            <div className='price'>
              {book.discount !== 0 &&
                <del>{this.$utils.formatVND(book.price)}</del>}
              <p className='h3'>{this.$utils.calDiscountPrice(book.price, book.discount)}</p>
            </div>
            <Rate disabled value={book.rate !== null ? book.rate : 0} />
            <div className='coubtn-wrapper'>
              <div className='coubtn-border'>

                <span className='detail'>
                  <Link style={{ color: '#3c3d41' }} to={book.author !== 'Null' ? `/chi-tiet-sach/${book.id}` : '/#'}>
                    <div>
                      <MDBIcon icon={data.l_icon} />
                    </div>
                    {data.l_txt}
                  </Link>
                </span>

                <span
                  className='cart_edit'
                  onClick={book.author !== 'Null' ? () => this.checkAuthen(book) : null}>
                  <div>
                    <MDBIcon icon={data.r_icon} />
                  </div>
                  {data.r_txt}
                </span>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
        {
          modal && <ModalEditBook
            id={id}
            modal={modal}
            closeModal={this.closeModal}
            fieldsBook={fieldsBook}
            updateListBook={updateListBook}
            fetchListBook={fetchListBook}
            detailBook={detailBook} />
        }
      </div >
    )
  }
}

export default BPCard;
