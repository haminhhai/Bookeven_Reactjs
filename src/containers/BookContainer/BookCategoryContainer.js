import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import BookCategory from '../../pages/BookCategory/BookCategory'
import * as bookActions from '../../actions/book'
class BookCategoryContainer extends Component {
    componentDidMount() {
        const { bookActions, id } = this.props
        const { filterBooksSingle } = bookActions
        if (id !== undefined)
            filterBooksSingle(id)
    }
    render() {
        const { parent, filtedBook } = this.props
        return <BookCategory
            parent={parent !== 'search' ? parent : `Kết quả tìm kiếm "${filtedBook.keyword}"`}
            listBook={filtedBook.list} />
    }
}

BookCategoryContainer.propTypes = {
    filtedBook: PropTypes.shape({
        keyword: PropTypes.string
    }),
    bookActions: PropTypes.shape({

    })
}


const mapStateToProps = state => {
    return {
        filtedBook: state.books.filtedBook,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        bookActions: bindActionCreators(bookActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookCategoryContainer);
