import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BookField from '../../pages/BookField/BookField'
import * as bookActions from '../../actions/book'
class BookFieldContainer extends Component {
    componentDidMount() {
        const { bookActions, id } = this.props
        const { filterBooksSingle } = bookActions
        if (id !== undefined)
            filterBooksSingle(id)
    }
    render() {
        const { parent, filtedBook, path, bookActions, fieldsBook, history } = this.props
        const { filterBooksMulti, getBooksByBFID } = bookActions
        return <BookField
            parent={parent}
            filtedBook={filtedBook} 
            path={path} 
            filterBooksMulti={filterBooksMulti} 
            fieldsBook={fieldsBook}
            getBooksByBFID={getBooksByBFID}
            history={history} />
    }
}

BookFieldContainer.propTypes = {
    filtedBook: PropTypes.shape({
        keyword: PropTypes.string
    }),
    bookActions: PropTypes.shape({

    })
}


const mapStateToProps = state => {
    return {
        filtedBook: state.books.filtedBook,
        path: state.router.location.pathname,
        fieldsBook: state.books.fieldsBook
    }
}

const mapDispatchToProps = dispatch => {
    return {
        bookActions: bindActionCreators(bookActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookFieldContainer);
