import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact'
import { connect } from 'react-redux'
import {Redirect, Link} from 'react-router-dom'

import Header from '../layouts/Header/Header'
import '../styles/home.scss'
import BPCard from '../components/Cards/BookPresentationCard/BookPresentationCard'
import * as actions from '../actions/index'

class Homepage extends Component {
  state = {
    redir: false,
    path: '',
    title: ''
  }


  render() {
    const {redir, path} = this.state
    const list = this.props.products
    if (redir)
      return <Redirect to={`/${path}`} />
    return (
      <div className='home-container'>
        <Header />
        <div className='wrapper'>
          <div className='container'>
            <h3 className='title font-weight-bold'>
              <Link to='/ban-chay-nhat'>
                <MDBIcon icon="chart-line" className='mr-2' />
                Sách bán chạy nhất
              </Link>
            </h3>
            <div className="row mt-5">
              {list.map((item, index) => {
                if (index < 4)
                  return (
                    <div className="col-lg-3 col-md-6">
                      <BPCard book={item}
                      />
                    </div>
                  )
              })}
            </div>
          </div>
        </div>
        <div className='wrapper' style={{ backgroundColor: '#2F2B35' }}>
          <div className='container' >
            <h3 className='title text-white font-weight-bold'>
              <Link  to='/sach-moi'>
                <MDBIcon icon="splotch" className='mr-2' />
                Sách mới
              </Link>
            </h3>
            <div className="row mt-5 ">
              {list.map((item, index) => {
                if (index > 3 && index < 8)
                  return (
                    <div className="col-lg-3 col-md-6">
                      <BPCard book={item}
                      />
                    </div>
                  )
              })}
            </div>
          </div>
        </div>
        <div className='wrapper' style={{ backgroundColor: '#EDF3F4' }}>
          <div className='container' >
            <h3 className='title font-weight-bold'>
              <Link  to='/sach-giam-gia'>
                <MDBIcon icon="level-down-alt" className='mr-2' />
                Sách giảm giá mạnh
              </Link>
            </h3>
            <div className="row mt-5 ">
              {list.map((item, index) => {
                if (index > 7 && index < 12)
                  return (
                    <div className="col-lg-3 col-md-6">
                      <BPCard book={item}
                      />
                    </div>
                  )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    products: state.products
  }
}

const MapDispatchToProps = (dispatch, props) => {
  return {
    
  }
}

export default connect(MapStateToProps, MapDispatchToProps)(Homepage);
