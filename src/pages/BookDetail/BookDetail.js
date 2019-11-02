import React, { Component } from 'react';
import ReadMoreReact from 'read-more-react';
import Magnifier from "react-magnifier";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Header from '../../layouts/Header/Header'

import '../../styles/bookdetail.scss'

import { MDBBtn, MDBTable, MDBTableBody, MDBTabPane } from 'mdbreact';
import { Rate, InputNumber, Tabs } from 'antd'

import * as index from './index.js'

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
        console.log(this.props.detailBook)
        var currentBook = this.props.detailBook
        const {match} = this.props.match
        const url = match.url
        return (
            <div >
                <Header carousel={false} />
                <div className='book-detail'>
                    <div className='container'>
                        <div className='book-general row'>
                            <div className='col-12 col-md-4'>
                                <Magnifier src={currentBook.src}
                                    width='100%'
                                    mgWidth={180}
                                    mgHeight={180} />
                            </div>
                            <div className='col-12 col-md-8'>
                                <h1 >{currentBook.title}</h1>
                                <h5 className=''>Tác giả: {currentBook.author}</h5>
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

const MapStateToProps = state => {
    return {
        detailBook: state.detailBook
    }
}

export default connect(MapStateToProps, null)(BookDetail);