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
        const { parent, books, path, bookActions, fieldsBook, history } = this.props
        const { filtedBook, rateBook } = books
        const { filterBooksMulti, getBooksByBFID, getListBestNewest, getListBestSeller, getListBestSales } = bookActions
        return <BookField
            parent={parent}
            filtedBook={filtedBook} 
            path={path} 
            filterBooksMulti={filterBooksMulti} 
            fieldsBook={fieldsBook}
            getBooksByBFID={getBooksByBFID}
            history={history}
            rateBook={rateBook}
            getListBestNewest={getListBestNewest}
            getListBestSeller={getListBestSeller}
            getListBestSales={getListBestSales} />
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
        books: state.books,
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
