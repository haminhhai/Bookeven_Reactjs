import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Slider, Rate, Select, Pagination } from 'antd'
import { MDBBtn } from 'mdbreact'

import Header from '../../layouts/Header/Header'
import BookCardContainer from '../../containers/BookContainer/BookCardContainer'
import '../../styles/bookcg.scss'

const { Option } = Select
class BookField extends Component {
    state = {
        minval: 0,
        maxval: 100000,
        rate: 0,
        topic: '',
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
        const { filterBooksMulti } = this.props
        const { minval, maxval, rate, topic } = this.state
        const data = {
            price: {
                min: minval,
                max: maxval
            },
            rate: rate,
            topic: topic,
        }
        filterBooksMulti(data)
    }

    loopCard(min, max, type) {
        var items = []
        for (var i = min; i < max; i++) {
            if (type === 'bp')
                items.push(<BookCardContainer key={i} index={i} type={type} className='col-lg-3 col-md-6 mb-4 ml-5' />)
            else if (type === 'br')
                items.push(<BookCardContainer key={i} index={i} type={type} />)
        }
        return items
    }
    onShowSizeChange = (current, pageSize) => {
        const { path, getBooksByBFID, getListBestNewest, getListBestSeller, getListBestSales } = this.props
        if (path.includes('sach-theo-danh-muc')) {
            var id = this.$utils.getNumberFromString(path)
            if (typeof id === 'number')
                getBooksByBFID({
                    bookField_id: id,
                    amount: pageSize,
                    page: current
                })
        }
        else if (path.includes('sach-moi')) {
            getListBestNewest({
                amount: pageSize,
                page: current
            })
        }
        else if (path.includes('sach-ban-chay')) {
            getListBestSeller({
                amount: pageSize,
                page: current
            })
        }
        else if (path.includes('sach-giam-gia')) {
            getListBestSales({
                amount: pageSize,
                page: current
            })
        }
    }
    changePage = page => {
        const { path, getBooksByBFID, filtedBook, getListBestNewest, getListBestSeller, getListBestSales } = this.props
        if (path.includes('sach-theo-danh-muc')) {
            var id = this.$utils.getNumberFromString(path)
            if (typeof id === 'number')
                getBooksByBFID({
                    bookField_id: id,
                    amount: filtedBook.pageSize,
                    page: page
                })
        }
        else if (path.includes('sach-moi')) {
            getListBestNewest({
                amount: filtedBook.pageSize,
                page: page
            })
        }
        else if (path.includes('sach-ban-chay')) {
            getListBestSeller({
                amount: filtedBook.pageSize,
                page: page
            })
        }
        else if (path.includes('sach-giam-gia')) {
            getListBestSales({
                amount: filtedBook.pageSize,
                page: page
            })
        }
    };
    componentDidMount() {
        window.scrollTo(0, 0)
        const { getBooksByBFID, getListBestNewest, getListBestSeller, getListBestSales, path } = this.props
        if (path.includes('sach-theo-danh-muc')) {
            var id = this.$utils.getNumberFromString(path)
            if (typeof id === 'number')
                getBooksByBFID({
                    bookField_id: id,
                    amount: 10,
                    page: 1
                })
        }
        else if (path.includes('sach-moi')) {
            getListBestNewest({
                amount: 10,
                page: 1
            })
        }
        else if (path.includes('sach-ban-chay')) {
            getListBestSeller({
                amount: 10,
                page: 1
            })
        }
        else if (path.includes('sach-giam-gia')) {
            getListBestSales({
                amount: 10,
                page: 1
            })
        }
    }
    filterType = parent => {
        const { filtedBook } = this.props
        switch (parent) {
            case 'search':
                return `Kết quả tìm kiếm "${filtedBook.keyword}"`
            default:
                return filtedBook.bookfield
        }
    }
    render() {
        const { parent, filtedBook, fieldsBook, history, rateBook } = this.props //parent = this.props.parent
        const { topic, rate, maxval, minval } = this.state
        return (
            <div>
                <Header carousel={false} parent={this.filterType(parent)} history={history} />
                <div className='bookcg-wrapper'>
                    <div className='container'>
                        <div className="row">
                            <div className="col-12 col-md-9">
                                <div className='row'>
                                    {filtedBook.list.length > 0 &&
                                        filtedBook.list.map((item, index) =>
                                            <div key={index} className='col-lg-3 col-md-6 mb-4 ml-5'>
                                                <BookCardContainer book={item} type='bp' />
                                            </div>)
                                    }
                                </div>
                                <div className='pagi-store row'>
                                    <Pagination
                                        showSizeChanger
                                        defaultCurrent={1}
                                        onChange={this.changePage}
                                        onShowSizeChange={this.onShowSizeChange}
                                        total={filtedBook.total}
                                    />
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
                                                    fieldsBook.map((item, index) =>
                                                        <Option key={index} value={item.id}>
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
                                        {
                                            rateBook.length > 0 &&
                                            rateBook.map((item, i) =>
                                                <BookCardContainer key={i} book={item} type='br' />)
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

export default BookField
