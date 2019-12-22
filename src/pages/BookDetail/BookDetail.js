import React, { Component } from 'react';
import * as $ from 'jquery'

import { MDBBtn, MDBTable, MDBTableBody } from 'mdbreact';
import { Rate, InputNumber } from 'antd'

import Header from '../../layouts/Header/Header'
import CommentContainer from '../../containers/CommentContainer'
import ModalEditBook from '../../components/Cards/BookPresentationCard/ModalEditBook'

import '../../components/Exzoom/jquery.exzoom.js'

import '../../styles/bookdetail.scss'
import '../../components/Exzoom/jquery.exzoom.scss'
import RateContainer from '../../containers/RateContainer';
class BookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 1,
            modal: false,
            count: 0,
            zoomed: false
        }
    }

    changeAmount = e => {
        this.setState({ amount: e })
    }
    toggleModal = () => {
        this.setState({ modal: !this.state.modal })
    }
    addToCart = (book) => {
        this.props.onAddToCart({
            book_id: book.id,
            amount: this.state.amount
        })
    }
    componentWillReceiveProps(preProps) {
        if (preProps.detailBook.id !== this.props.detailBook.id  && !this.state.zoomed) {
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
            this.setState({ zoomed: true })
            this.props.getListRate({
                book_id: preProps.detailBook.id
            })
        }
    }
    render() {
        const { detailBook, updateListBook, fieldsBook, role, filtedBook, history, rate } = this.props //parent = this.props.parent
        const { amount, modal } = this.state
        let xhtml = null
        xhtml = <div >
            <Header carousel={false} parent={filtedBook.bookfield} child={detailBook.name} parentPath={`/sach-theo-danh-muc/${detailBook.bookfield_id}`} history={history} />
            <ModalEditBook
                id={detailBook.id}
                updateListBook={updateListBook}
                detailBook={detailBook}
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
                                        <img src={detailBook.image} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-md-8'>
                            <h1 >{detailBook.name}</h1>
                            <h5 className=''>Tác giả: {detailBook.author}</h5>
                            <div className='rate-detail'>
                                <Rate disabled value={rate.totalRate} />
                                <p>({rate.list.length} người đã đánh giá)</p>
                            </div>

                            <h4 className='mt-3'>
                                {
                                    this.$utils.calDiscountPrice(detailBook.price, detailBook.discount) !== this.$utils.formatVND(detailBook.price) &&
                                    <del className='mr-3'>{this.$utils.formatVND(detailBook.price)}</del>
                                }
                                <b>{this.$utils.calDiscountPrice(detailBook.price, detailBook.discount)}</b>
                            </h4>
                            {
                                (detailBook.inventory > 0 && role === 1) &&
                                <React.Fragment>
                                    <InputNumber className='mt-3' value={amount} min={1} max={detailBook.inventory} onChange={this.changeAmount} />
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
                                    <tr>
                                        <th colSpan='1'>Số trang</th>
                                        <th className='font-weight-bold' colSpan='2'>{detailBook.page}</th>
                                    </tr>
                                    <tr>
                                        <th colSpan='1'>Khuôn khổ</th>
                                        <th className='font-weight-bold' colSpan='2'>{detailBook.size}</th>
                                    </tr>
                                    <tr>
                                        <th colSpan='1'>Trọng lượng</th>
                                        <th className='font-weight-bold' colSpan='2'>{detailBook.weight}</th>
                                    </tr>
                                    <tr>
                                        <th colSpan='1'>Ngày phát hành</th>
                                        <th className='font-weight-bold' colSpan='2'>{detailBook.published_date}</th>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                        <div className='col-12 col-md-12'>
                            <h3>Giới thiệu sách</h3>
                            {detailBook.description}
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