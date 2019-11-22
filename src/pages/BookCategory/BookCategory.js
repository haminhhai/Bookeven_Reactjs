import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

import { Slider, Rate, Select } from 'antd'
import { MDBPagination, MDBPageNav, MDBPageItem, MDBBtn } from 'mdbreact'

import Header from '../../layouts/Header/Header'
import BookCardContainer from '../../containers/BookContainer/BookCardContainer'
import * as bookActions from '../../actions/book'
import '../../styles/bookcg.scss'

const { Option } = Select
class BookCategory extends Component {
    state = {
        minval: 0,
        maxval: 100000,
        rate: 0,
        topic: ''
    };

    setPriceRange = value => {
        this.setState({
            minval: value[0],
            maxval: value[1]
        });
    };

    changeStar = value => {
        this.setState({ rate: value })
    }

    handleSelectTopic = id => {
        this.setState({ topic: id })
    }

    handleFilter = () => {
        const { filterBooksMulti } = this.props.bookActions
        const { minval, maxval, rate, topic } = this.state
        const data = {
            price: {
                min: minval,
                max: maxval
            },
            rate: rate,
            topic: topic
        }
        filterBooksMulti(data)
    }

    loopCard(min, max, type) {
        var items = []
        for (var i = min; i < max; i++) {
            if (type === 'bp')
                items.push(<BookCardContainer index={i} type={type} className='col-lg-3 col-md-6 mb-4 ml-5' />)
            else if (type === 'br')
                items.push(<BookCardContainer index={i} type={type} />)
        }
        return items
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        const { parent, listBook, fieldsBook } = this.props //parent = this.props.parent
        const { topic, rate, maxval, minval } = this.state
        return (
            <div>
                <Header carousel={false} parent={parent} />
                <div className='bookcg-wrapper'>
                    <div className='container'>
                        <div class="row">
                            <div className="col-12 col-md-9">
                                <div className='row'>
                                    {listBook.length > 0 &&
                                        listBook.map(item =>
                                            <div className='col-lg-3 col-md-6 mb-4 ml-5'>
                                                <BookCardContainer book={item} type='bp' />
                                            </div>)
                                    }
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
                                                onChange={this.setPriceRange} />
                                            <p className='text-center mt-2'>
                                                Giá {this.$utils.formatVND(minval)} — {this.$utils.formatVND(maxval)}
                                            </p>
                                        </div>
                                        <div className='filter' >
                                            <strong>Lọc theo rating</strong>
                                            <div className='row'>
                                                <Rate className='ml-2' value={rate} onChange={this.changeStar} />
                                                <p className='mt-2 ml-2'>( ít nhất {rate} sao )</p>
                                            </div>
                                        </div>
                                        <div className='filter' >
                                            <strong>Lọc theo danh mục sách</strong>
                                            <Select
                                                value={topic}
                                                className='mt-2 mb-3'
                                                style={{ width: '100%' }}
                                                onChange={this.handleSelectTopic}>
                                                <Option value=''>Chọn danh mục</Option>
                                                {

                                                    fieldsBook.length > 0 &&
                                                    fieldsBook.map(item =>
                                                        <Option value={item.id}>
                                                            {item.name}
                                                        </Option>)
                                                }
                                            </Select>
                                        </div>
                                        <div className='row justify-content-center'>
                                            <Link to='/search'>
                                                <MDBBtn onClick={this.handleFilter} className="rounded-pill">Lọc</MDBBtn>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className='card-rcol col-md-12'>
                                        <strong>Sách bình chọn nhiều nhất</strong>
                                        {this.loopCard(0, 5, 'br')}
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

const mapStateToProps = state => {
    return {
        fieldsBook: state.books.fieldsBook
    }
}

const mapDispatchToProps = dispatch => {
    return {
        bookActions: bindActionCreators(bookActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookCategory);
