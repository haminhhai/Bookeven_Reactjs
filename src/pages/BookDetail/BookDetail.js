import React, { Component } from 'react';
import ReadMoreReact from 'read-more-react';
import { connect } from 'react-redux'
import * as $ from 'jquery'

import { MDBBtn, MDBTable, MDBTableBody, MDBTabPane } from 'mdbreact';
import Header from '../../layouts/Header/Header'
import { Rate, InputNumber, Tabs } from 'antd'

import '../../components/Exzoom/jquery.exzoom.js'
import * as index from './index.js'

import '../../styles/bookdetail.scss'
import '../../components/Exzoom/jquery.exzoom.scss'

const { TabPane } = Tabs


class BookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    changeQuantity = e => {
        console.log(e)
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
    render() {
        console.log(this.props)
        const {parent, child} = this.props //parent = this.props.parent
        var currentBook = this.props.detailBook

        return (
            <div >
                <Header carousel={false} parent={parent} child={child}/>

                <div className='book-detail'>
                    <div className='container'>
                        <div className='book-general row'>
                            <div className='col-12 col-md-4'>
                                <div className="exzoom" id="exzoom">
                                    <div className="exzoom_img_box">
                                        <div className='exzoom_img_ul'>
                                            <img src={currentBook.src} alt=''/>
                                        </div>
                                    </div>
                                </div>
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
                                        {index.data.map((item, index) => {
                                            return (
                                                <tr key={index}>
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
                                    <TabPane tab="Mô tả" key="1">
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

const MapDispatchToProps = (dispatch, props) => {
    return {
        
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(BookDetail);