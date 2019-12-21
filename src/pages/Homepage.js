import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../layouts/Header/Header'
import '../styles/home.scss'
import BookCardContainer from '../containers/BookContainer/BookCardContainer'
import * as bookActions from '../actions/book'
class Homepage extends Component {
  state = {
    redir: false,
    path: '',
    title: ''
  }

  loopCard(book) {
    var items = []
    for (var i = 0; i < 4; i++)
      items.push(
        <div key={i} className='col-lg-3 col-md-6'>
          <BookCardContainer key={i} book={book[i]} type='bp' />
        </div>
      )
    return items
  }
  componentDidMount() {
    window.scrollTo(0, 0)
    const { bookActions } = this.props
    const { fourNewest, foutBestSeller, fourBestDiscount } = bookActions
    const body = {
      amount: 4,
      page: 1
    }
    fourNewest(body)
    foutBestSeller(body)
    fourBestDiscount(body)
  }
  render() {
    const { redir, path } = this.state
    const { history, books } = this.props
    const {newBook, bestSeller, bestDiscount}  = books
    console.log(newBook)
    if (redir)
      return <Redirect to={`/${path}`} />
    return (
      <div className='home-container'>
        <Header history={history}/>
        <div className='wrapper'>
          <div className='container'>
            <h3 className='title font-weight-bold'>
              <Link to='/sach-ban-chay'>
                <MDBIcon icon="chart-line" className='mr-2' />
                Sách bán chạy nhất
              </Link>
            </h3>
            <div className="row mt-5">
              {this.loopCard(newBook)}
            </div>
          </div>
        </div>
        <div className='wrapper' style={{ backgroundColor: '#2F2B35' }}>
          <div className='container' >
            <h3 className='title text-white font-weight-bold'>
              <Link to='/sach-moi'>
                <MDBIcon icon="splotch" className='mr-2' />
                Sách mới
              </Link>
            </h3>
            <div className="row mt-5 ">
              {this.loopCard(bestSeller)}
            </div>
          </div>
        </div>
        <div className='wrapper' style={{ backgroundColor: '#EDF3F4' }}>
          <div className='container' >
            <h3 className='title font-weight-bold'>
              <Link to='/sach-giam-gia'>
                <MDBIcon icon="level-down-alt" className='mr-2' />
                Sách giảm giá mạnh
              </Link>
            </h3>
            <div className="row mt-5 ">
              {this.loopCard(bestDiscount)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const MapStateToProps = state => {
  return {
    books: state.books
  }
}

const MapDispatchToProps = dispatch => {
  return {
    bookActions: bindActionCreators(bookActions, dispatch)
  }
}


export default connect(MapStateToProps, MapDispatchToProps)(Homepage);
