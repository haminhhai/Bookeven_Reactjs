import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact'
import Header from '../../layouts/Header/Header'
import '../../styles/home.scss'
import BPCard from '../../components/Cards/BookPresentationCard/BookPresentationCard'
import * as lb from '../../const/listbook'

class Homepage extends Component {
  state = {}
  render() {
    const list = lb.list
    return (
      <div className='home-container'>
        <Header />
        <div className='wrapper'>
          <div className='container'>
            <h3 className='font-weight-bold'>
              <MDBIcon icon="chart-line" className='mr-2' />
              Sách bán chạy nhất</h3>
            <div class="row mt-5">
              <div class="col-lg-3 col-md-6">
                <BPCard img={list[0].src}
                  title={list[0].title}
                  author={list[0].author}
                  discountAmount={list[0].discount}
                  amount={list[0].amount}
                  aos='fade-down-right'
                />
              </div>
              <div class="col-lg-3 col-md-6">
                <BPCard img={list[1].src}
                  title={list[1].title}
                  author={list[1].author}
                  discountAmount={list[1].discount}
                  amount={list[1].amount}
                  aos='fade-up-right'
                />
              </div>
              <div class="col-lg-3 col-md-6">
                <BPCard img={list[2].src}
                  title={list[2].title}
                  author={list[2].author}
                  amount={list[2].amount}
                  aos='fade-up-left'
                />
              </div>
              <div class="col-lg-3 col-md-6" >
                <BPCard img={list[3].src}
                  title={list[3].title}
                  author={list[3].author}
                  discountAmount={list[3].discount}
                  amount={list[3].amount}
                  aos='fade-down-left'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='wrapper' style={{ backgroundColor: '#2F2B35' }}>
          <div className='container' >
            <h3 className='text-white font-weight-bold'>
              <MDBIcon icon="splotch" className='mr-2' />
              Sách mới</h3>
            <div class="row mt-5 ">
              <div class="col-lg-3 col-md-6 ">
                <BPCard img={list[4].src}
                  title={list[4].title}
                  author={list[4].author}
                  discountAmount={list[4].discount}
                  amount={list[4].amount}
                  aos='fade-down-right'
                />
              </div>
              <div class="col-lg-3 col-md-6">
                <BPCard img={list[5].src}
                  title={list[5].title}
                  author={list[5].author}
                  discountAmount={list[5].discount}
                  amount={list[5].amount}
                  aos='fade-up-right'
                />
              </div>
              <div class="col-lg-3 col-md-6">
                <BPCard img={list[6].src}
                  title={list[6].title}
                  author={list[6].author}
                  amount={list[6].amount}
                  aos='fade-up-left'
                />
              </div>
              <div class="col-lg-3 col-md-6" >
                <BPCard img={list[7].src}
                  title={list[7].title}
                  author={list[7].author}
                  discountAmount={list[7].discount}
                  amount={list[7].amount}
                  aos='fade-down-left'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='wrapper' style={{ backgroundColor: '#EDF3F4' }}>
          <div className='container' >
            <h3 className='font-weight-bold'>
              <MDBIcon icon="level-down-alt" className='mr-2' />
              Sách giảm giá mạnh</h3>
            <div class="row mt-5 ">
              <div class="col-lg-3 col-md-6 ">
                <BPCard img={list[8].src}
                  title={list[8].title}
                  author={list[8].author}
                  discountAmount={list[8].discount}
                  amount={list[8].amount}
                  aos='fade-down-right'
                />
              </div>
              <div class="col-lg-3 col-md-6">
                <BPCard img={list[9].src}
                  title={list[9].title}
                  author={list[9].author}
                  discountAmount={list[9].discount}
                  amount={list[9].amount}
                  aos='fade-up-right'
                />
              </div>
              <div class="col-lg-3 col-md-6">
                <BPCard img={list[10].src}
                  title={list[10].title}
                  author={list[10].author}
                  amount={list[10].amount}
                  aos='fade-up-left'
                />
              </div>
              <div class="col-lg-3 col-md-6" >
                <BPCard img={list[11].src}
                  title={list[11].title}
                  author={list[11].author}
                  discountAmount={list[11].discount}
                  amount={list[11].amount}
                  aos='fade-down-left'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
