import React, { Component } from 'react';
import Header from '../../layouts/Header/Header'
import { MDBIcon, MDBBtn } from 'mdbreact'
import { Slider, Rate } from 'antd'
import * as lb from '../../const/listbook'
import BPCard from '../../components/Cards/BookPresentationCard/BookPresentationCard'

import '../../styles/bookcg.scss'
class BookCategory extends Component {
    state = {
        minval: this.$utils.formatVND(0),
        maxval: this.$utils.formatVND(100000)
    };

    onChange = value => {
        this.setState({
            minval: this.$utils.formatVND(value[0]),
            maxval: this.$utils.formatVND(value[1])
        });
    };
    render() {
        const list = lb.list
        return (
            <div>
                <Header carousel={false} />
                <div className='bookcg-wrapper'>
                    <div className='row'>
                        <div className='col-md-9'>
                            <div className='row'>
                                <div class="col ">
                                    <BPCard img={list[0].src}
                                        title={list[0].title}
                                        author={list[0].author}
                                        discountAmount={list[0].discount}
                                        amount={list[0].amount}
                                        aos='fade-down-right'
                                    />
                                </div>
                                <div class="col">
                                    <BPCard img={list[1].src}
                                        title={list[1].title}
                                        author={list[1].author}
                                        discountAmount={list[1].discount}
                                        amount={list[1].amount}
                                        aos='fade-up-right'
                                    />
                                </div>
                                <div class="col">
                                    <BPCard img={list[2].src}
                                        title={list[2].title}
                                        author={list[2].author}
                                        amount={list[2].amount}
                                        aos='fade-up-left'
                                    />
                                </div>
                                <div class="col" >
                                    <BPCard img={list[3].src}
                                        title={list[3].title}
                                        author={list[3].author}
                                        discountAmount={list[3].discount}
                                        amount={list[3].amount}
                                        aos='fade-down-left'
                                    />
                                </div>
                                <div class="col" >
                                    <BPCard img={list[4].src}
                                        title={list[4].title}
                                        author={list[4].author}
                                        discountAmount={list[4].discount}
                                        amount={list[4].amount}
                                        aos='fade-down-left'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='row'>
                                <div className='card-rcol col-md-12'>
                                    <strong>Lọc theo giá</strong>
                                    <Slider
                                        range
                                        step={1000}
                                        min={0}
                                        max={100000}
                                        defaultValue={[0, 100000]}
                                        onChange={this.onChange} />
                                    <MDBBtn gradient='aqua' className="align-middle float-left">Lọc</MDBBtn>
                                    <p className='float-right mt-2'>
                                        Giá {this.state.minval} — {this.state.maxval}
                                    </p>
                                </div>
                                <div className='card-rcol col-md-12'>
                                    <strong>Sách bình chọn nhiều nhất</strong>
                                    <div className='top-rate row'>
                                        <img src={list[5].src} alt='image' />
                                        <span className='text-left'>
                                            {list[4].title}
                                        </span>
                                        <div className='col-12'>
                                            <Rate allowHalf defaultValue={5} disabled/>
                                        </div>
                                        <div >
                                            {list[4].amount}
                                        </div>
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