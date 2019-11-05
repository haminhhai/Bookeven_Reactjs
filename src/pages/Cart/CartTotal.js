import React, { Component } from 'react'
import { MDBIcon, MDBBtn, MDBTable, MDBTableBody } from 'mdbreact';
import { InputNumber } from 'antd'

import '../../styles/cart.scss'

class CartTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    showTotalAmount = cart => {
        var total = 0
        if(cart.length > 0)
            cart.map(item => {
                total += item.product.amount * item.quantity
            })

        return this.$utils.formatVND(total)
    }
    render() {
        const { cart } = this.props
        return (
            <div className='collateral'>
                <div className='total-amount'>
                    <h2>Xác nhận thanh toán</h2>
                    <MDBTable >
                        <MDBTableBody>
                            <tr>
                                <td>Tạm tính</td>
                                <td>{ this.showTotalAmount(cart)}</td>
                            </tr>
                            <tr >
                                <td className='font-weight-bold'>Tổng tiền</td>
                                <td className='font-weight-bold'>{ this.showTotalAmount(cart)}</td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                    <MDBBtn>Thanh toán</MDBBtn>
                </div>
            </div>
        );
    }
}


export default CartTotal;