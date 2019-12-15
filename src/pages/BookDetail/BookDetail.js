import React, { Component } from 'react';
import * as $ from 'jquery'

import { MDBBtn, MDBTable, MDBTableBody, MDBBadge } from 'mdbreact';
import { Rate, InputNumber } from 'antd'

import Header from '../../layouts/Header/Header'
import CommentContainer from '../../containers/CommentContainer'
import ModalEditBook from '../../components/Cards/BookPresentationCard/ModalEditBook'

import '../../components/Exzoom/jquery.exzoom.js'
import * as index from './index.js'

import '../../styles/bookdetail.scss'
import '../../components/Exzoom/jquery.exzoom.scss'
import RateContainer from '../../containers/RateContainer';

class BookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            modal: false
        }
    }

    changeQuantity = e => {
        this.setState({ quantity: e })
    }
    toggleModal = () => {
        this.setState({ modal: !this.state.modal })
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
        this.props.onAddToCart(book, this.state.quantity)
    }
    render() {
        const { parent, detailBook, updateListBook, fieldsBook, role } = this.props //parent = this.props.parent
        const { quantity, modal } = this.state
        console.log(role)
        let xhtml = null
        if (detailBook.hasOwnProperty('id'))
            xhtml = <div >
                <Header carousel={false} parent={parent} child={detailBook.title} />
                <ModalEditBook
                    updateListBook={updateListBook}
                    data={detailBook}
                    closeModal={this.toggleModal}
                    fieldsBook={fieldsBook}
                    modal={modal} />
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

                                <h4 className='mt-3'>
                                    <del className='mr-3'>{this.$utils.formatVND(detailBook.realPrice)}</del>
                                    <b>{this.$utils.calDiscountPrice(detailBook.realPrice, detailBook.percentDiscount)}</b>
                                </h4>
                                {
                                    (detailBook.inventory > 0 && role === 1) &&
                                    <React.Fragment>
                                        <InputNumber className='mt-3' value={quantity} min={1} max={detailBook.inventory} onChange={this.changeQuantity} />
                                        <MDBBtn className='add-cart-btn ml-3' onClick={() => this.addToCart(detailBook)}>Thêm vào giỏ</MDBBtn>
                                    </React.Fragment>
                                }
                                {
                                    (detailBook.inventory === 0 && role === 1) &&
                                    <MDBBtn className='add-cart-btn' disabled>Hết hàng!</MDBBtn>
                                }
                                {
                                    role === 2 &&
                                    <MDBBtn className='add-cart-btn' onClick={() => this.toggleModal()}>Chỉnh sửa</MDBBtn>
                                }
                            </div>
                        </div>
                        <div className='book-review row mt-4'>
                            <div className='col-12 col-md-12'>
                                <h3>Thông tin chi tiết</h3>
                                <MDBTable striped bordered>
                                    <MDBTableBody>
                                        {index.data.map((item, index) =>
                                            <tr key={index}>
                                                <th colSpan='1'>{item.title}</th>
                                                <th className='font-weight-bold' colSpan='2'>{item.content}</th>
                                            </tr>
                                        )
                                        }
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
                                    <CommentContainer />
                                </div>
                            </div>
                            <div className='col-12 col-md-12 last-child'>
                                <h3>Đánh giá</h3>
                                <RateContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        return xhtml;
    }
}


export default BookDetail;