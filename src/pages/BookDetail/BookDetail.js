import React, { Component } from 'react';
import ReadMoreReact from 'read-more-react';
import Magnifier from "react-magnifier";

import Header from '../../layouts/Header/Header'

import '../../styles/bookdetail.scss'

import { MDBBtn, MDBTable, MDBTableBody, MDBTabPane } from 'mdbreact';
import { Rate, InputNumber, Tabs } from 'antd'

import * as lb from '../../const/listbook'
import * as index from './index.js'

const list = lb.list

const {TabPane} = Tabs

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
                        <div className='book-general row'>
                            <div className='col-12 col-md-4'>
                                <Magnifier src='https://www.nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/de-men-phieu-luu-ky-_13x19_bia_tb2019-1.jpg?itok=T3r2mS-Q'
                                    width='100%'
                                    mgWidth={180}
                                    mgHeight={180} />
                            </div>
                            <div className='col-12 col-md-8'>
                                <h1 >{list[2].title}</h1>
                                <h5 className=''>Tác giả: {list[2].author}</h5>
                                <div className='rate-detail'>
                                    <Rate disabled allowHalf defaultValue={4.5} />
                                    <p>(2 người đã đánh giá)</p>
                                </div>
                                <ReadMoreReact text={index.desc} readMoreText='Xem thêm' />
                                <InputNumber className='mt-3' min={1} defaultValue={1} onChange={this.changeQuantity} />
                                <MDBBtn className='add-cart-btn ml-3'>Thêm vào giỏ</MDBBtn>
                            </div>
                        </div>
                        <div className='book-review row mt-4'>
                            <div className='col-12 col-md-4'>
                                <MDBTable striped bordered>
                                    <MDBTableBody>
                                        {index.data.map((item) => {
                                            return (
                                                <tr>
                                                    <th>{item.title}</th>
                                                    <th className='font-weight-bold'>{item.content}</th>
                                                </tr>
                                            )
                                        })}
                                    </MDBTableBody>
                                </MDBTable>
                            </div>
                            <div className='col-12 col-md-8'>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="Giới thiệu" key="1">
                                        {index.longdesc}
                                    </TabPane>
                                    <TabPane tab="Bình luận" key="2">
                                        Content of Tab Pane 2
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default BookDetail;