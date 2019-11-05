import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Rate } from "antd";
import './brcard.scss'
class BRCard extends Component {
    state = {}

    render() {
        const { book } = this.props
        return (
            <div className='top-rate row'>
                <img src={book.src} alt='image' />
                <span className='text-left'>
                    {book.title}
                </span>
                <div className='col-12'>
                    <Rate allowHalf defaultValue={book.rate} disabled />
                </div>
                <p>
                    {book.discount !== undefined &&
                        <del className='mr-1'>{this.$utils.formatVND(book.discount)}</del>}
                    {this.$utils.formatVND(book.amount)}
                </p>
            </div>
        );
    }
}

export default BRCard;
