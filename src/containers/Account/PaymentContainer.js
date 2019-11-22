import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import * as accountActions from '../../actions/account'
import Payment from '../../pages/Payment/Payment';

class PaymentContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        const { getListAddress } = this.props.accountActions
        getListAddress()
    }
    render() {
        const { accountActions, cart, address } = this.props
        const { createNewAddress, createInvoice } = accountActions
        return (
            <Payment
                createInvoice={createInvoice}
                cart={cart}
                address={address}
                createNewAddress={createNewAddress} />
        );
    }
}

PaymentContainer.propTypes = {
    cart: PropTypes.array,
    address: PropTypes.array,
    accountActions: PropTypes.shape({
        getListAddress: PropTypes.func,
        createNewAddress: PropTypes.func,
        createInvoice: PropTypes.func
    })
}

const mapStatetoProps = state => {
    return {
        cart: state.cart,
        address: state.account.address
    }
}

const mapDispatchToProps = dispatch => {
    return {
        accountActions: bindActionCreators(accountActions, dispatch),
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(PaymentContainer);