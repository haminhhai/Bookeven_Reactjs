import React, { Component } from 'react';
import BookDB from '../../pages/BookDatabase/BookDB';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

import * as bookActions from '../../actions/book'
class BookDBContainer extends Component {
    state = {  }
    render() { 
        const { fieldsBook } = this.props
        return ( 
            <BookDB fieldsBook={fieldsBook}/>
         );
    }
}

BookDBContainer.propTypes = {
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
 
export default connect(mapStateToProps, mapDispatchToProps)(BookDBContainer);