import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Rate} from "antd";
import './brcard.scss'
class BRCard extends Component {
    state = {}

    render() {
        return (
            <div className='top-rate row'>
                <img src={this.props.img} alt='image'/>
                <span className='text-left'>
                    {this.props.title}
                </span>
                <div className='col-12'>
                    <Rate allowHalf defaultValue={this.props.rate} disabled/>
                </div>
                <p>
                    {this.props.discount !== undefined && 
                        <del className='mr-1'>{this.$utils.formatVND(this.props.discount)}</del>}
                    {this.$utils.formatVND(this.props.price)}
                </p>
            </div>
        );
    }
}

export default BRCard;
