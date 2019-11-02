import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { MDBCard, MDBIcon, MDBCardBody, MDBCardTitle, MDBCardText, MDBMask, MDBView } from 'mdbreact'

import { categoryTopic } from '../../../const/listbook'
import * as actions from '../../../actions/index'
import './bpcard.scss'

//data for CoupleButton Component
const data = {
  icon1: 'info-circle',
  text1: 'Chi tiết',
  icon2: 'shopping-cart',
  text2: 'Mua'
}
class BPCard extends Component {
  state = {
    redir: false,
    path: '',
    title: ''
  }
  getInform = () => {
    const book = this.props.book
    var category = Object.assign({}, categoryTopic.filter((item) => {
      return item.id === book.topic
    }))
    book.category = category[0]
    localStorage.setItem('detail-book', JSON.stringify(book))

    this.setState({
      redir: true,
      path: book.category.path,
      title: book.title
    })

    this.props.onChangeBook(book)

  }

  render() {
    const book = this.props.book
    const { redir, path, title } = this.state
    if (redir)
      return <Redirect to={`/detail/${path}/${title}`} />
    return (
      <div className='bpcard-container'>
        <MDBCard style={{ minWidth: '14rem', height: 'auto' }} className='text-center'>
          <MDBView className='book-wrapper' hover onClick={this.getInform}>
            <LazyLoad height='200' offset={100} once>
              <img src={book.src} waves="true" className="imgBook" alt="" overlay="true" />
            </LazyLoad>
            <MDBMask className="flex-center" overlay="white-light" />
          </MDBView>
          <MDBCardBody>
            <MDBCardTitle className="h5" style={{ fontWeight: 600, color: '#0de24a' }}>{book.title}</MDBCardTitle>
            <MDBCardText className='font-italic text-muted'>
              {book.author}
            </MDBCardText>
            <div className='price'>
              {book.discountAmount !== undefined &&
                <del>{this.$utils.formatVND(book.discountAmount)}</del>}
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
                <span className='cart' >
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

const MapDispatchToProps = (dispatch, props) => {
  return {
    onChangeBook: book => {
      dispatch(actions.getDetailBook(book))
    }
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(BPCard);
