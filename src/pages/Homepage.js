import React, { Component } from 'react';
import { MDBIcon } from 'mdbreact'
import { Redirect, Link } from 'react-router-dom'

import Header from '../layouts/Header/Header'
import '../styles/home.scss'
import BookCardContainer from '../containers/BookContainer/BookCardContainer'

class Homepage extends Component {
  state = {
    redir: false,
    path: '',
    title: ''
  }

  loopCard(min, max) {
    var items = []
    for (var i = min; i < max; i++)
      items.push(<BookCardContainer key={i} index={i} type='bp' className='col-lg-3 col-md-6'/>)
    return items
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    const { redir, path } = this.state
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
              {this.loopCard(0, 4) }
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
              {this.loopCard(4, 8) }
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
              {this.loopCard(8, 12)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Homepage;
