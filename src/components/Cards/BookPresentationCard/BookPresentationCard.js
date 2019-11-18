import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { MDBCard, MDBIcon, MDBCardBody, MDBCardTitle, MDBCardText, MDBMask, MDBView } from 'mdbreact'
import * as bookActions from '../../../actions/book'

import './style.scss'
import { bindActionCreators } from 'C:/Users/ADMIN/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

//data for CoupleButton Component
const data = {
  icon1: 'info-circle',
  text1: 'Chi tiết',
  icon2: 'shopping-cart',
  text2: 'Mua'
}
class BPCard extends Component {
  state = {
  }

  onAddToCart = book => {
    this.props.onAddToCart(book)

  }
  render() {
    var book = {
      id: 1,
      src: '',
      title: '',
      author: '',
      discount: 0,
      amount: 0,
      topic: 0,
      iventory: 0,
      rate: 0
    }
    if (this.props.book !== undefined)
      book = this.props.book
    return (
      <div className='bpcard-container'>
        <MDBCard style={{ minWidth: '14rem', height: 'auto' }} className='text-center'>
          <Link to={`/${this.$utils.convertVietnamese(book.title)}`}>
            <MDBView className='book-wrapper' hover>
              <LazyLoad height='200' offset={100} once>
                <img src={book.src} waves="true" className="imgBook" alt="" overlay="true" />
              </LazyLoad>
              <MDBMask className="flex-center" overlay="white-light" />
            </MDBView></Link>
          <MDBCardBody>
            <MDBCardTitle className="h5" title={book.title}>
              <Link to={`/${this.$utils.convertVietnamese(book.title)}`}>
                {book.title}
              </Link>
            </MDBCardTitle>
            <MDBCardText className='font-italic text-muted'>
              {book.author}
            </MDBCardText>
            <div className='price'>
              {book.discount !== undefined &&
                <del>{this.$utils.formatVND(book.discount)}</del>}
              <p className='h3'>{this.$utils.formatVND(book.amount)}</p>
            </div>
            <div className='coubtn-wrapper'>
              <div className='coubtn-border'>
                <span className='detail' onClick={this.getInform}>
                  <div>
                    <MDBIcon icon={data.icon1} />
                  </div>
                  {data.text1}
                </span>
                <span className='cart' onClick={() => { this.onAddToCart(book) }}>
                  <div>
                    <MDBIcon icon={data.icon2} />
                  </div>
                  {data.text2}
                </span>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </div>
    )
  }
}

const MapStateToProps = state => {
  return {
  }
}

const MapDispatchToProps = dispatch => {
  return {
    bookActions: bindActionCreators(bookActions, dispatch)
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(BPCard);
