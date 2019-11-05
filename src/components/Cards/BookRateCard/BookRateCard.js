import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Rate } from "antd";
import './brcard.scss'
class BRCard extends Component {
    state = {}

    render() {
        const { product } = this.props
        return (
            <div className='top-rate row'>
                <img src={product.src} alt='image' />
                <span className='text-left'>
                    {product.title}
                </span>
                <div className='col-12'>
                    <Rate allowHalf defaultValue={product.rate} disabled />
                </div>
                <p>
                    {product.discount >= 0 &&
                        <del className='mr-1'>{this.$utils.formatVND(product.discount)}</del>}
                    {this.$utils.formatVND(product.amount)}
                </p>
            </div>
        );
    }
}

export default BRCard;
