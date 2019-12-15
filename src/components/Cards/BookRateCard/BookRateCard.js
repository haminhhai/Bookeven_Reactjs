import React, { Component } from 'react';
import { Rate } from "antd";
import { Link } from 'react-router-dom'
import './style.scss'
import empty from '../../../assets/empty.jpg'
class BRCard extends Component {
    state = {}

    render() {
        var book = {
            id: 1,
            src: empty,
            title: '',
            author: '',
            realPrice: 0,
            percentDiscount: 0,
            topic: 0,
            inventory: 0,
            rate: 0
        }
        if (this.props.book !== undefined)
            book = this.props.book
        return (
            <div className='top-rate row'>
                <Link to={`/${this.$utils.convertVietnamese(book.title)}`}>
                    <img src={book.src} alt='' />
                </Link>
                <span className='text-left' title={book.title}>
                    <Link className='text-dark' to={`/${this.$utils.convertVietnamese(book.title)}`}>
                        {book.title}
                    </Link>
                </span>
                <div className='col-12'>
                    <Rate allowHalf defaultValue={book.rate} disabled />
                </div>
                <p>
                    {book.percentDiscount > 0 &&
                        <del className='mr-1'>{this.$utils.formatVND(book.realPrice)}</del>}
                    {this.$utils.calDiscountPrice(book.realPrice, book.percentDiscount)}
                </p>
            </div>
        );
    }
}

export default BRCard;
