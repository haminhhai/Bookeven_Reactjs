import React, { Component } from 'react';
import Header from '../../layouts/Header/Header'
import Footer from '../../layouts/Footer/Footer'
import '../../styles/home.css'
import { MDBCard, MDBIcon, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBMask, MDBView, MDBCarousel, MDBCarouselInner, MDBRow, MDBCol, MDBCardImage, MDBCarouselItem } from 'mdbreact'
import BPCard from '../../components/Cards/BookPresentationCard/BookPresentationCard'
import * as lb from '../../const/listbook'
class Homepage extends Component {
  state = {}
  render() {
    const list = lb.list
    return (
      <div className="App">
        <Header />
        <div className='bestsellers'>
          <h3>Sách bán chạy nhất</h3>
          <div class="row mt-5 ">
            <div class="col ">
              <BPCard img={list[0].src}
                title={list[0].title}
                author={list[0].author}
                discountAmount={list[0].discount}
                amount={list[0].amount}
              />
            </div>
            <div class="col">
              <BPCard img={list[1].src}
                title={list[1].title}
                author={list[1].author}
                discountAmount={list[1].discount}
                amount={list[1].amount}
              />
            </div>
            <div class="col">
              <BPCard img={list[2].src}
                title={list[2].title}
                author={list[2].author}
                amount={list[2].amount}
              />
            </div>
            <div class="col">
              <BPCard img={list[3].src}
                title={list[3].title}
                author={list[3].author}
                discountAmount={list[3].discount}
                amount={list[3].amount}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Homepage;
