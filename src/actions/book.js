import * as types from '../const/actionType'

export const getDetailBook = book => {
    return {
        type: types.GET_DETAIL_BOOK,
        book
    }
}

export const fetchListBook = () => {
    return {
        type: types.FETCH_LIST_BOOK 
    }
}

export const fetchListBookSuccess = data => {
    return {
        type: types.FETCH_LIST_BOOK_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchListBookFailed = error => {
    return {
        type: types.FETCH_LIST_BOOK_FAILED,
        payload: {
            error
        }
    }
}

export const filterBooks  = keyword => {
    return {
        type: types.FILTER_BOOKS,
        payload: {
            keyword
        }
    }
}

export const filterBooksSuccess  = data => {
    return {
        type: types.FITLER_BOOKS_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchListFieldsbook = () => {
    return {
        type: types.FETCH_LIST_FIELDSBOOK 
    }
}

export const fetchListFieldsbookSuccess = data => {
    return {
        type: types.FETCH_LIST_FIELDSBOOK_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchListFieldsbookFailed = error => {
    return {
        type: types.FETCH_LIST_FIELDSBOOK_FAILED,
        payload: {
            error
        }
    }
}