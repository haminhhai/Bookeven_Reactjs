import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import * as accountActions from '../../actions/account'
import * as orderActions from '../../actions/order'
import OrderCustomer from '../../pages/Order/OrderCustomer';
import OrderManager from '../../pages/Order/OrderManager'

class OrderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        const { getListAddress } = this.props.accountActions
        const { fetchAllListOrders, fetchListOrdersById } = this.props.orderActions
        const { info } = this.props
        if (info.role === 2)
            fetchAllListOrders()
        else fetchListOrdersById(info.id)
        getListAddress()
    }
    render() {
        const { orders, address, orderActions, info } = this.props
        const { updateOrder } = orderActions
        if (info.role === 1 )
            return <OrderCustomer orders={orders} address={address} role={info.role} />
        else return <OrderManager orders={orders} address={address} updateOrder={updateOrder} role={info.role} />
    }
}

OrderContainer.propTypes = {
    orders: PropTypes.array,
    address: PropTypes.array,
    accountActions: PropTypes.shape({
        getListAddress: PropTypes.func
    }),
    orderActions: PropTypes.shape({
        fetchAllListOrders: PropTypes.func,
        fetchListOrdersById: PropTypes.func,
        updateOrder: PropTypes.func
    })
}

const mapStatetoProps = state => {
    return {
        address: state.account.address,
        orders: state.orders,
        info: state.account.info
    }
}

const mapDispatchToProps = dispatch => {
    return {
        accountActions: bindActionCreators(accountActions, dispatch),
        orderActions: bindActionCreators(orderActions, dispatch)
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(OrderContainer);