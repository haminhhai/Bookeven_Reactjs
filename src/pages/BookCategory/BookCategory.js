import React, { Component } from 'react';
import Header from '../../layouts/Header/Header'
import { Slider, Rate } from 'antd'
import { MDBPagination, MDBPageNav, MDBPageItem, MDBBtn } from 'mdbreact'
import * as lb from '../../const/listbook'
import BPCard from '../../components/Cards/BookPresentationCard/BookPresentationCard'
import BRCard from '../../components/Cards/BookRateCard/BookRateCard'
import '../../styles/bookcg.scss'
class BookCategory extends Component {
    state = {
        minval: this.$utils.formatVND(0),
        maxval: this.$utils.formatVND(100000),
        rate: 1,
    };

    onChange = value => {
        this.setState({
            minval: this.$utils.formatVND(value[0]),
            maxval: this.$utils.formatVND(value[1])
        });
    };

    changeStar = value => {
        this.setState({ rate: value })
    }
    render() {
        const list = lb.list
        return (
            <div>
                <Header carousel={false} />
                <div className='bookcg-wrapper'>
                    <div className='container'>
                        <div class="row">
                            <div className="col-12 col-md-9">
                                <div className='row'>
                                    <div className="col-lg-3 col-md-6 mb-4 ml-5">
                                        <BPCard img={list[0].src}
                                            title={list[0].title}
                                            author={list[0].author}
                                            discountAmount={list[0].discount}
                                            amount={list[0].amount}
                                            aos='fade-down-right'
                                        />
                                    </div>
                                    <div className="col-lg-3 col-md-6 mb-4 ml-5">
                                        <BPCard img={list[0].src}
                                            title={list[0].title}
                                            author={list[0].author}
                                            discountAmount={list[0].discount}
                                            amount={list[0].amount}
                                            aos='fade-down-right'
                                        />
                                    </div>
                                    <div className="col-lg-3 col-md-6 mb-4 ml-5">
                                        <BPCard img={list[0].src}
                                            title={list[0].title}
                                            author={list[0].author}
                                            discountAmount={list[0].discount}
                                            amount={list[0].amount}
                                            aos='fade-down-right'
                                        />
                                    </div>
                                    <div className="col-lg-3 col-md-6 mb-4 ml-5">
                                        <BPCard img={list[0].src}
                                            title={list[0].title}
                                            author={list[0].author}
                                            discountAmount={list[0].discount}
                                            amount={list[0].amount}
                                            aos='fade-down-right'
                                        />
                                    </div>
                                </div>
                                <div className='pagi-store row'>
                                    <MDBPagination circle>
                                        <MDBPageItem disabled>
                                            <MDBPageNav className="page-link">
                                                <span>Đầu</span>
                                            </MDBPageNav>
                                        </MDBPageItem>
                                        <MDBPageItem disabled>
                                            <MDBPageNav className="page-link" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
                                                <span className="sr-only">Previous</span>
                                            </MDBPageNav>
                                        </MDBPageItem>
                                        <MDBPageItem active>
                                            <MDBPageNav className="page-link">
                                                1 <span className="sr-only">(current)</span>
                                            </MDBPageNav>
                                        </MDBPageItem>
                                        <MDBPageItem>
                                            <MDBPageNav className="page-link">
                                                2
                                </MDBPageNav>
                                        </MDBPageItem>
                                        <MDBPageItem>
                                            <MDBPageNav className="page-link">
                                                &raquo;
                                </MDBPageNav>
                                        </MDBPageItem>
                                        <MDBPageItem>
                                            <MDBPageNav className="page-link">
                                                Cuối
                                </MDBPageNav>
                                        </MDBPageItem>
                                    </MDBPagination>
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className='row'>
                                    <div className='card-rcol col-md-12'>
                                        <div className='filter'>
                                            <strong>Lọc theo giá</strong>
                                            <Slider
                                                range
                                                step={1000}
                                                min={0}
                                                max={100000}
                                                defaultValue={[0, 100000]}
                                                onChange={this.onChange} />
                                            <p className='text-center mt-2'>
                                                Giá {this.state.minval} — {this.state.maxval}
                                            </p>
                                        </div>
                                        <div className='filter' >
                                            <strong>Lọc theo rating</strong>
                                            <div className='row'>
                                                <Rate className='ml-2' defaultValue={1} onChange={this.changeStar} />
                                                <p className='mt-2 ml-2'>( ít nhất {this.state.rate} sao )</p>
                                            </div>
                                        </div>
                                        <MDBBtn gradient='aqua' className="align-middle">Lọc</MDBBtn>

                                    </div>
                                    <div className='card-rcol col-md-12'>
                                        <strong>Sách bình chọn nhiều nhất</strong>
                                        <BRCard img={list[5].src}
                                            title={list[5].title}
                                            rate={5}
                                            price={list[5].amount} />
                                        <BRCard img={list[6].src}
                                            title={list[6].title}
                                            rate={5}
                                            discount={list[5].discount}
                                            price={list[6].amount} />
                                        <BRCard img={list[7].src}
                                            title={list[7].title}
                                            rate={5}
                                            price={list[7].amount} />
                                        <BRCard img={list[8].src}
                                            title={list[8].title}
                                            rate={5}
                                            price={list[8].amount} />
                                        <BRCard img={list[9].src}
                                            title={list[9].title}
                                            rate={4.5}
                                            price={list[9].amount} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BookCategory;
