import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { MDBCard, MDBIcon, MDBCardBody, MDBCardTitle, MDBCardText, MDBMask, MDBView } from 'mdbreact'
import * as bookActions from '../../../actions/book'
import * as cont from './const'

import './style.scss'
import { bindActionCreators } from 'C:/Users/ADMIN/AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import { roles } from '../../../const/config'
import ModalEditBook from './ModalEditBook';
class BPCard extends Component {
  state = {
    data: {},
    modal: false,
    detailBook: {}
  }

  onAddToCart = book => {
    this.props.onAddToCart(book)

  }

  showModal = data => {
    this.setState({
      detailBook: data,
      modal: !this.state.modal
    })
  }

  closeModal = () => {
    this.setState({ modal: !this.state.modal })
  }

  componentDidMount() {
    const role = localStorage.getItem('role')
    if (role === '2')
      this.setState({
        data: roles.manager.couple_btn
      })
    else this.setState({ data: roles.customer.couple_btn })
  }
  render() {
    const { data, detailBook, modal } = this.state
    const { fieldsBook } = this.props
    var book = {
      id: 1,
      src: '',
      title: '',
      author: '',
      realPrice: 0,
      percentDiscount: 0,
      topic: 0,
      inventory: 0,
      rate: 0
    }
    if (this.props.book !== undefined)
      book = this.props.book
    const role = localStorage.getItem('role')
    return (
      <div className='bpcard-container'>
        <MDBCard style={{ minWidth: '14rem', height: 'auto' }} className='text-center'>
          <Link to={`/${this.$utils.convertVietnamese(book.title)}`}>
            <MDBView className='book-wrapper' hover>
              <LazyLoad height='200' offset={100} once>
                <img src={book.src} waves="true" className="imgBook" alt="" overlay="true" />
                {
                  book.percentDiscount > 0 && 
                  <div class="promotionPercent">
                  {cont.SVG}
                  <span>{book.percentDiscount + '%'}</span>
                </div>
                }
              </LazyLoad>
              <MDBMask className="flex-center" overlay="white-light" />
            </MDBView></Link>
          <MDBCardBody>
            <MDBCardTitle className="h5" title={book.title}>
              <Link className='text-dark' to={`/${this.$utils.convertVietnamese(book.title)}`}>
                {book.title}
              </Link>
            </MDBCardTitle>
            <MDBCardText className='font-italic text-muted'>
              {book.author}
            </MDBCardText>
            <div className='price'>
              {book.percentDiscount !== 0 &&
                <del>{this.$utils.formatVND(book.realPrice)}</del>}
              <p className='h3'>{this.$utils.calDiscountPrice(book.realPrice, book.percentDiscount)}</p>
            </div>
            <div className='coubtn-wrapper'>
              <div className='coubtn-border'>

                <span className='detail'>
                  <Link style={{ color: '#3c3d41' }} to={`/${this.$utils.convertVietnamese(book.title)}`}>
                    <div>
                      <MDBIcon icon={data.l_icon} />
                    </div>
                    {data.l_txt}
                  </Link>
                </span>

                <span
                  className='cart_edit'
                  onClick={role === '1' ? () => this.onAddToCart(book) : () => this.showModal(book)}>
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
          modal && <ModalEditBook data={detailBook} modal={modal} closeModal={this.closeModal} fieldsBook={fieldsBook}/>
        }
      </div >
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
