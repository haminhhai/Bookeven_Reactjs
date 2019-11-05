import React, { Component } from 'react'
import { MDBIcon, MDBBtn } from 'mdbreact';
import { InputNumber } from 'antd'

import '../../styles/cart.scss'
import product from '../../reducers/products';
import * as msg from '../../const/message'

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onDelete = product => {
        var { onRemoveProduct, onChangeMessage } = this.props
        onRemoveProduct(product)
        onChangeMessage(msg.MSG_DELETE_BOOK_IN_CART_SUCCESS)
    }   
    render() {
        var { item} = this.props
        return (
            <tr>
                <td className='remove align-middle'>
                    <MDBBtn onClick={() => {this.onDelete(item.product)}}>
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
                <td className='price align-middle'>
                    <del className='mr-1'>{this.$utils.formatVND(item.product.discount)}</del>
                    {this.$utils.formatVND(item.product.amount)}
                </td>
                <td className='total align-middle font-weight-bold'>
                    {this.$utils.formatVND(item.product.amount * item.quantity)}
                </td>

            </tr>
        );
    }
}


export default CartItem;