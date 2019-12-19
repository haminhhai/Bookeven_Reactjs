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
            image: empty,
            title: '',
            author: '',
            price: 0,
            discount: 0,
            topic: 0,
            inventory: 0,
            rate: 0
        }
        if (this.props.book !== undefined)
            book = this.props.book
        return (
            <div className='top-rate row'>
                <Link to={`/chi-tiet-sach/${book.id}`}>
                    <img src={book.image} alt='' />
                </Link>
                <span className='text-left' title={book.title}>
                    <Link className='text-dark' to={`/chi-tiet-sach/${book.id}`}>
                        {book.title}
                    </Link>
                </span>
                <div className='col-12'>
                    <Rate allowHalf defaultValue={book.rate} disabled />
                </div>
                <p>
                    {book.discount > 0 &&
                        <del className='mr-1'>{this.$utils.formatVND(book.price)}</del>}
                    {this.$utils.calDiscountPrice(book.price, book.discount)}
                </p>
            </div>
        );
    }
}

export default BRCard;
