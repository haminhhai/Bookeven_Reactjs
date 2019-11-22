import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn,  } from 'mdbreact';
import Header from '../../layouts/Header/Header'
import '../../styles/cart.scss'
import MessageContainer from '../../containers/MessageContainer';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        var { children } = this.props
        return (
            <div >
                <Header carousel={false} parent='Giỏ hàng' />

                <div className='cart-wrapper'>
                    <div className='container'>
                        <MessageContainer />
                        <MDBTable className='mt-4'>
                            {
                                typeof children[0] !== 'string' &&
                                <MDBTableHead color="aqua-gradient" textWhite>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>&nbsp;</th>
                                        <th>Tên sách</th>
                                        <th>Số lượng</th>
                                        <th>Đơn giá</th>
                                        <th>Tổng</th>
                                    </tr>
                                </MDBTableHead>
                            }
                            <MDBTableBody>
                                {children[0]}
                                {
                                    typeof children[0] !== 'string' ?
                                        <tr>
                                            <td colSpan='12' className='actions'>
                                                <div className='coupon' >
                                                    <input
                                                        type="text"
                                                        className="form-control mr-2"
                                                        placeholder="Mã giảm giá"
                                                    />
                                                    <MDBBtn>Áp dụng</MDBBtn>
                                                </div>
                                            </td>
                                        </tr> :
                                        <tr>
                                            <td colSpan='12' className='actions'>
                                                <div className='coupon' >
                                                    <Link to='/'>
                                                        <MDBBtn>Quay lại cửa hàng</MDBBtn>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                }
                            </MDBTableBody>
                        </MDBTable>
                        {children[1]}
                    </div>
                </div>
            </div >
        );
    }
}

const MapStateToProps = state => {
    return {
    }
}

const MapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Cart);