import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';

import Account from '../../pages/AccountSystem/Account'
import * as accountActions from '../../actions/account'
class AccountContainer extends Component {
    render() {
        var { account, accountActions } = this.props
        const { createNewAddress, updateAddress, deleteAddress, updateUser, changePassword } = accountActions
        return (
            <Account
                address={account.address}
                createNewAddress={createNewAddress} 
                updateAddress={updateAddress}
                deleteAddress={deleteAddress}
                updateUser={updateUser}
                changePassword={changePassword}
                info={account.info}/>
        );
    }
}

AccountContainer.propTypes = {
    account: PropTypes.shape({
        address: PropTypes.array
    }),
    accountActions: PropTypes.shape({
        getListAddress: PropTypes.func,
        createNewAddress: PropTypes.func,
        updateAddress: PropTypes.func,
        deleteAddress: PropTypes.func,
    }),
}

const MapStateToProps = state => {
    return {
        account: state.account,
    }
}

const MapDispatchToProps = dispatch => {
    return {
        accountActions: bindActionCreators(accountActions, dispatch)
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(AccountContainer);
