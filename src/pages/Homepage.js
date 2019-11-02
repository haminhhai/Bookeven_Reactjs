import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact'
import Header from '../layouts/Header/Header'
import '../styles/home.scss'
import BPCard from '../components/Cards/BookPresentationCard/BookPresentationCard'
import {list} from '../const/listbook'

class Homepage extends Component {
  state = {}
  render() {

    return (
      <div className='home-container'>
        <Header />
        <div className='wrapper'>
          <div className='container'>
            <h3 className='font-weight-bold'>
              <MDBIcon icon="chart-line" className='mr-2' />
              Sách bán chạy nhất</h3>
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
            <h3 className='text-white font-weight-bold'>
              <MDBIcon icon="splotch" className='mr-2' />
              Sách mới</h3>
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
            <h3 className='font-weight-bold'>
              <MDBIcon icon="level-down-alt" className='mr-2' />
              Sách giảm giá mạnh</h3>
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

export default Homepage;
