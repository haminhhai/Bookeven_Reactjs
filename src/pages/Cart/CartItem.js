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

    onDelete = product => {
        var { onRemoveProduct } = this.props
        onRemoveProduct({
            book_id: product.id
        })
    }

    onChangeAmount = (e) => {
        var { onUpdateProduct } = this.props
        var { item } = this.props
        onUpdateProduct({
            book_id: item.id,
            amount: e
        })

    }
    render() {
        var { item } = this.props
        return (
            <tr>
                <td className='remove align-middle'>
                    <MDBBtn onClick={() => { this.onDelete(item) }}>
                        <MDBIcon icon="times" />
                    </MDBBtn>
                </td>
                <td className='imgBook align-middle'>
                    <img src={item.image} alt={item.name} />
                </td>
                <td className='name align-middle'>{item.name}</td>
                <td className='amount align-middle'>
                    <InputNumber min={1} max={item.inventory} defaultValue={item.amount} onChange={this.onChangeAmount} />
                </td>
                <td className='price align-middle'>
                    {this.$utils.formatVND(item.price) !== this.$utils.calDiscountPrice(item.price, item.discount) && 
                    <del className='mr-1'>{this.$utils.formatVND(item.price)}</del>}
                    {this.$utils.calDiscountPrice(item.price, item.discount)}
                </td>
                <td className='total align-middle font-weight-bold'>
                    {this.$utils.calTotalPrice(item.price, item.discount, item.amount)}
                </td>
            </tr>
        )
    }
}


export default CartItem;