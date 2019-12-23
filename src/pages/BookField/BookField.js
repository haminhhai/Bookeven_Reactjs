import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import { Slider, Select, Pagination, Checkbox } from 'antd'
import { MDBBtn, MDBIcon } from 'mdbreact'

import Header from '../../layouts/Header/Header'
import BookCardContainer from '../../containers/BookContainer/BookCardContainer'
import '../../styles/bookcg.scss'

const { Option } = Select
class BookField extends Component {
    state = {
        minval: 0,
        maxval: 1000000,
        minrate: 1,
        maxrate: 5,
        topic: '',
        checkPrice: false,
        checkRate: false,
        checkBookfield: false
    }

    toggleCheck = type => {
        this.setState({
            [type]: !this.state[type]
        })
    }

    setPriceRange = value => {
        this.setState({
            minval: value[0],
            maxval: value[1]
        });
    };

    setRateRange = value => {
        this.setState({
            minrate: value[0],
            maxrate: value[1]
        });
    };

    handleSelectTopic = id => {
        this.setState({ topic: id })
    }

    handleFilter = () => {
        const { filterBooks, filtedBook } = this.props
        var params = this.state
        var { minval, maxval, minrate, maxrate, topic, checkBookfield, checkPrice, checkRate } = params
        if (!checkBookfield)
            topic = ""
        if (!checkPrice) {
            minval = ""
            maxval = ""
        }
        if (!checkRate) {
            minrate = ""
            maxrate = ""
        }
        const data = {
            minPrice: minval,
            title: filtedBook.keyword,
            maxPrice: maxval,
            minRate: minrate,
            maxRate: maxrate,
            bookField: topic,
            amount: 12,
            page: 1,
        }
        filterBooks(data)
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
        const { filtedBook, path, getBooksByBFID, getListBestNewest, getListBestSeller, getListBestSales, filterBooks } = this.props
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
        else if (path.includes('search')) {
            var params = filtedBook
            var { checkBookfield, checkPrice, checkRate, bookfieldId, minRate, maxRate, minPrice, maxPrice, keyword } = params
            if (!checkBookfield)
                bookfieldId = ""
            if (!checkPrice) {
                minPrice = ""
                maxPrice = ""
            }
            if (!checkRate) {
                minRate = ""
                maxRate = ""
            }
            const body = {
                title: keyword,
                bookField: bookfieldId,
                minRate: minRate,
                maxRate: maxRate,
                minPrice: minPrice,
                maxPrice: maxPrice,
                amount: pageSize,
                page: current
            }
            filterBooks(body)
        }

    }
    changePage = page => {
        const { path, getBooksByBFID, filtedBook, getListBestNewest, getListBestSeller, getListBestSales, filterBooks } = this.props
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
        else if (path.includes('search')) {
            var params = filtedBook
            var { checkBookfield, checkPrice, checkRate, bookfieldId, minRate, maxRate, minPrice, maxPrice, keyword } = params
            if (!checkBookfield)
                bookfieldId = ""
            if (!checkPrice) {
                minPrice = ""
                maxPrice = ""
            }
            if (!checkRate) {
                minRate = ""
                maxRate = ""
            }
            const body = {
                title: keyword,
                bookField: bookfieldId,
                minRate: minRate,
                maxRate: maxRate,
                minPrice: minPrice,
                maxPrice: maxPrice,
                amount: filtedBook.pageSize,
                page: page
            }
            filterBooks(body)
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
                    amount: 12,
                    page: 1
                })
        }
        else if (path.includes('sach-moi')) {
            getListBestNewest({
                amount: 12,
                page: 1
            })
        }
        else if (path.includes('sach-ban-chay')) {
            getListBestSeller({
                amount: 12,
                page: 1
            })
        }
        else if (path.includes('sach-giam-gia')) {
            getListBestSales({
                amount: 12,
                page: 1
            })
        }
        else if (path.includes('search')) {
            const { filterBooks } = this.props
            const body = {
                title: "",
                bookField: "",
                minRate: "",
                maxRate: "",
                minPrice: "",
                maxPrice: "",
                amount: 12,
                page: 1
            }
            filterBooks(body)
        }
    }
    filterType = parent => {
        const { filtedBook } = this.props
        switch (parent) {
            case 'search':
                return `Kết quả cho tìm kiếm của bạn`
            default:
                return filtedBook.bookfield
        }
    }

    render() {
        const { parent, filtedBook, fieldsBook, history, rateBook } = this.props //parent = this.props.parent
        const { topic, maxval, minval, minrate, maxrate, checkRate, checkBookfield, checkPrice } = this.state
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
                                        defaultPageSize={12}
                                        pageSizeOptions={['12', '24', '36', '48']}
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-md-3">
                                <div className='row'>
                                    <div className='card-rcol col-md-12'>
                                        <div className='filter'>
                                            <Checkbox checked={checkPrice} onChange={() => this.toggleCheck('checkPrice')}><strong>Lọc theo giá</strong></Checkbox>
                                            <Slider
                                                disabled={!checkPrice}
                                                range
                                                step={1000}
                                                min={0}
                                                max={1000000}
                                                defaultValue={[0, 1000000]}
                                                onChange={this.setPriceRange} />
                                            <p className='text-center mt-2'>
                                                Giá {this.$utils.formatVND(minval)} — {this.$utils.formatVND(maxval)}
                                            </p>
                                        </div>
                                        <div className='filter' >
                                            <Checkbox checked={checkRate} onChange={() => this.toggleCheck('checkRate')}><strong>Lọc theo rating</strong></Checkbox>
                                            <Slider
                                                disabled={!checkRate}
                                                range
                                                step={1}
                                                min={1}
                                                max={5}
                                                defaultValue={[1, 5]}
                                                onChange={this.setRateRange} />
                                            <p className='text-center mt-2'>
                                                {minrate}<MDBIcon icon="star" />
                                                — {maxrate}<MDBIcon icon="star" />
                                            </p>
                                        </div>
                                        <div className='filter' >
                                            <Checkbox checked={checkBookfield} onChange={() => this.toggleCheck('checkBookfield')}><strong>Lọc theo danh mục sách</strong></Checkbox>
                                            <Select
                                                disabled={!checkBookfield}
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
                                                <MDBBtn
                                                    disabled={checkBookfield || checkPrice || checkRate ? false : true}
                                                    onClick={this.handleFilter}
                                                    className="rounded-pill">
                                                    Lọc
                                                    </MDBBtn>
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
