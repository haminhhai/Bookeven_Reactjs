import React, { Component } from 'react';
import { Rate } from "antd";
import { Link } from 'react-router-dom'
import './style.scss'
class BRCard extends Component {
    state = {}

    render() {
        var book = {
            id: 1,
            src: '',
            title: '',
            author: '',
            discount: 0,
            amount: 0,
            topic: 0,
            iventory: 0,
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
                    {book.discount >= 0 &&
                        <del className='mr-1'>{this.$utils.formatVND(book.discount)}</del>}
                    {this.$utils.formatVND(book.amount)}
                </p>
            </div>
        );
    }
}

export default BRCard;
