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
        const { fetchAllListOrders, deleteListOrder } = this.props.orderActions
        const { info } = this.props
        if (info.role === 1)
            fetchAllListOrders()
        else {
            deleteListOrder()
        }
    }
    render() {
        const { orders, orderActions, info } = this.props
        const { updateOrder, fetchDetailOrder, filterOrder } = orderActions
        if (info.role === 1 )
            return <OrderCustomer fetchDetailOrder={fetchDetailOrder} orders={orders.list} detail={orders.detail} role={info.role} />
        else return <OrderManager fetchDetailOrder={fetchDetailOrder} 
        orders={orders.list} detail={orders.detail} updateOrder={updateOrder} role={info.role}
        filterOrder={filterOrder} />
    }
}

OrderContainer.propTypes = {
    orders: PropTypes.object,
    orderActions: PropTypes.shape({
        fetchAllListOrders: PropTypes.func,
        updateOrder: PropTypes.func
    })
}

const mapStatetoProps = state => {
    return {
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