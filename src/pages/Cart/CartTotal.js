import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MDBBtn, MDBTable, MDBTableBody } from 'mdbreact';

import '../../styles/cart.scss'

class CartTotal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { cart } = this.props
        let xhtml = null
        if (cart.length > 0)
            xhtml = <div className='collateral'>
                <div className='total-percentDiscount'>
                    <h2>Xác nhận thanh toán</h2>
                    <MDBTable >
                        <MDBTableBody>
                            <tr>
                                <td>Tạm tính</td>
                                <td>{this.$utils.calculateTotalCart(cart, 'vnd')}</td>
                            </tr>
                            <tr >
                                <td className='font-weight-bold'>Tổng tiền</td>
                                <td className='font-weight-bold'>{this.$utils.calculateTotalCart(cart, 'vnd')}</td>
                            </tr>
                        </MDBTableBody>
                    </MDBTable>
                    <Link to='/payment'>
                        <MDBBtn>Thanh toán</MDBBtn>
                    </Link>
                </div>
            </div>
        return xhtml
    }
}


export default CartTotal;