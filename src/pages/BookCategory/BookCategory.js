import React, { Component } from 'react';
import { connect } from 'react-redux'

import { Slider, Rate } from 'antd'
import { MDBPagination, MDBPageNav, MDBPageItem, MDBBtn } from 'mdbreact'

import Header from '../../layouts/Header/Header'
import BPCard from '../../components/Cards/BookPresentationCard/BookPresentationCard'
import BRCard from '../../components/Cards/BookRateCard/BookRateCard'

import * as actions from '../../actions/index'
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
        const { parent, products } = this.props //parent = this.props.parent
        return (
            <div>
                <Header carousel={false} parent={parent} />
                <div className='bookcg-wrapper'>
                    <div className='container'>
                        <div class="row">
                            <div className="col-12 col-md-9">
                                <div className='row'>
                                    {products.map((item, index) => {
                                        if (index < 9)
                                            return (
                                                <div className="col-lg-3 col-md-6 mb-4 ml-5" key={index}>
                                                    <BPCard book={item}
                                                    />
                                                </div>
                                            )
                                    })}
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
                                        <MDBBtn onClick={() => { console.log(333) }} gradient='aqua' className="align-middle">Lọc</MDBBtn>

                                    </div>
                                    <div className='card-rcol col-md-12'>
                                        <strong>Sách bình chọn nhiều nhất</strong>
                                        {
                                            products.map((item, index) => {
                                                if (index > 4 && index < 10)
                                                    return (
                                                        <BRCard book={item}/>
                                                    )
                                            })
                                        }

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

const MapStateToProps = state => {
    return {
        products: state.products
    }
}

const MapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(MapStateToProps, null)(BookCategory);
