import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import * as accountActions from '../../actions/account'
import InvoiceCustomer from '../../pages/Invoice/InvoiceCustomer';

class InvoiceContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        const { fetchListInvoice, getListAddress } = this.props.accountActions
        fetchListInvoice()
        getListAddress()
    }
    render() {
        const { invoices, address } = this.props
        return <InvoiceCustomer invoices={invoices} address={address}/>
    }
}

InvoiceContainer.propTypes = {
    invoices: PropTypes.array,
    address: PropTypes.array,
    accountActions: PropTypes.shape({
    })
}

const mapStatetoProps = state => {
    return {
        address: state.account.address,
        invoices: state.account.invoices
    }
}

const mapDispatchToProps = dispatch => {
    return {
        accountActions: bindActionCreators(accountActions, dispatch),
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(InvoiceContainer);