import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import * as bookActions from '../../actions/book'
import NBBtn from '../../components/Buttons/NewBookBtn/NewBookBtn';
class NewBookContainer extends Component {
    state = {  }
    render() { 
        const { fieldsBook, info } = this.props
        let xhtml = null
        if (info.role === 2)
            xhtml = <NBBtn fieldsBook={fieldsBook}/>
        return xhtml
    }
}

NewBookContainer.propTypes = {
    fieldsBook: PropTypes.array,
  }

const mapStateToProps = state => {
    return {
        fieldsBook: state.books.fieldsBook,
        info: state.account.info
    }
}

const mapDispatchToProps = dispatch => {
    return {
        bookActions: bindActionCreators(bookActions, dispatch)
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(NewBookContainer);