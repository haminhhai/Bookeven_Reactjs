import React, { Component } from 'react'
import { MDBIcon, MDBBtn } from 'mdbreact';
import { InputNumber } from 'antd'

import '../../styles/cart.scss'

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        var { item } = this.props
        return (
            <tr>
                <td className='remove align-middle'>
                    <MDBBtn gradient="purple">
                        <MDBIcon icon="times" />
                    </MDBBtn>
                </td>
                <td className='imgBook align-middle'>
                    <img src={item.product.src} alt={item.product.title} />
                </td>
                <td className='name align-middle'>{item.product.title}</td>
                <td className='quantity align-middle'>
                    <InputNumber min={1} defaultValue={item.quantity} />
                </td>
                <td className='price align-middle'>{item.product.amount}</td>
                <td className='total align-middle font-weight-bold'>
                    {this.$utils.formatVND(item.product.amount * item.quantity)}
                </td>
            </tr>
        );
    }
}


export default CartItem;