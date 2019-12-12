import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import * as bookActions from '../../actions/book'
import NBBtn from '../../components/Buttons/NewBookBtn/NewBookBtn';
class NewBookContainer extends Component {
    state = {  }
    render() { 
        const { fieldsBook } = this.props
        return (
            <NBBtn fieldsBook={fieldsBook}/>
        )
    }
}

NewBookContainer.propTypes = {
    fieldsBook: PropTypes.array,
  }

const mapStateToProps = state => {
    return {
        fieldsBook: state.books.fieldsBook
    }
}

const mapDispatchToProps = dispatch => {
    return {
        bookActions: bindActionCreators(bookActions, dispatch)
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(NewBookContainer);