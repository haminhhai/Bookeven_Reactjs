import React, { Component } from 'react';
import ReadMoreReact from 'read-more-react';

import Header from '../../layouts/Header/Header'
import '../../styles/bookdetail.scss'
import Magnifier from "react-magnifier";
import { MDBBtn} from 'mdbreact';
import { Rate, InputNumber } from 'antd'

import * as lb from '../../const/listbook'
const list = lb.list
const desc = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
class BookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    changeQuantity = e => {
        console.log(e)
    }
    render() {
        return (
            <div >
                <Header carousel={false} />
                <div className='book-detail'>
                    <div className='container'>
                        <div className=' row'>
                            <div className='col-12 col-md-4'>
                                <Magnifier src={list[4].src}
                                    width='100%'
                                    mgWidth={180}
                                    mgHeight={180} />
                            </div>
                            <div className='col-12 col-md-8'>
                                <h1 className='t'>{list[4].title}</h1>
                                <div className='rate-detail'>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <p>(2 người đã đánh giá)</p>
                                </div>
                                <ReadMoreReact text={desc} readMoreText='Xem thêm' />
                                <InputNumber className='mt-3' min={1} defaultValue={3} onChange={this.changeQuantity} />
                                <MDBBtn className='add-cart-btn ml-3'>Thêm vào giỏ</MDBBtn>
                            </div>
                        </div>

                    </div>
                </div>
            </div >
        );
    }
}

export default BookDetail;