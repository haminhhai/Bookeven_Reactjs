import React, { Component } from 'react';
import ReadMoreReact from 'read-more-react';
import * as $ from 'jquery'

import { MDBBtn, MDBTable, MDBTableBody, MDBTabPane } from 'mdbreact';
import { Rate, InputNumber, Tabs } from 'antd'

import Header from '../../layouts/Header/Header'
import Comments from '../../components/Comments/Comments'

import '../../components/Exzoom/jquery.exzoom.js'
import * as index from './index.js'

import '../../styles/bookdetail.scss'
import '../../components/Exzoom/jquery.exzoom.scss'

const { TabPane } = Tabs


class BookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1
        }
    }

    changeQuantity = e => {
        this.setState({ quantity: e })
    }

    componentDidMount() {
        $(function () {

            $("#exzoom").exzoom({
                // thumbnail nav options
                "navWidth": 60,
                "navHeight": 60,
                "navItemNum": 5,
                "navItemMargin": 7,

                // autoplay
                "autoPlay": true,

                // autoplay interval in milliseconds
                "autoPlayTimeout": 2000
            });

        });
    }

    addToCart = (book) => {
        this.props.checkIventory(book, this.state.quantity)
    }
    render() {
        const { parent, child, detailBook } = this.props //parent = this.props.parent
        return (
            <div >
                <Header carousel={false} parent={parent} child={child} />

                <div className='book-detail'>
                    <div className='container'>
                        <div className='book-general row'>
                            <div className='col-12 col-md-4'>
                                <div className="exzoom" id="exzoom">
                                    <div className="exzoom_img_box">
                                        <div className='exzoom_img_ul'>
                                            <img src={detailBook.src} alt='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-8'>
                                <h1 >{detailBook.title}</h1>
                                <h5 className=''>Tác giả: {detailBook.author}</h5>
                                <div className='rate-detail'>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <p>(2 người đã đánh giá)</p>
                                </div>
                                <ReadMoreReact text={index.desc} readMoreText='Xem thêm' />
                                <InputNumber className='mt-3' min={1} max={detailBook.iventory} defaultValue={1} onChange={this.changeQuantity} />
                                <MDBBtn className='add-cart-btn ml-3' onClick={() => { this.addToCart(detailBook) }}>Thêm vào giỏ</MDBBtn>
                            </div>
                        </div>
                        <div className='book-review row mt-4'>
                            <div className='col-12 col-md-12'>
                                <h3>Thông tin chi tiết</h3>
                                <MDBTable striped bordered>
                                    <MDBTableBody>
                                        {index.data.map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <th colSpan='1'>{item.title}</th>
                                                    <th clssName='font-weight-bold' colspan='2'>{item.content}</th>
                                                </tr>
                                            )
                                        })}
                                    </MDBTableBody>
                                </MDBTable>
                            </div>
                            <div className='col-12 col-md-12'>
                                <h3>Giới thiệu sách</h3>
                                {index.longdesc}
                            </div>
                            <div className='col-12 col-md-12'>
                                <h3>Bình luận</h3>
                                <div className='comment-system'>
                                    <Comments/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}


export default BookDetail;