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

export const filterBooksSingle = data => {
    return {
        type: types.FILTER_BOOKS_SINGLE,
        payload: {
            data
        }
    }
}

export const filterBooksSingleSuccess = data => {
    return {
        type: types.FITLER_BOOKS_SINGLE_SUCCESS,
        payload: {
            data
        }
    }
}

export const filterBooksMulti = data => {
    return {
        type: types.FILTER_BOOKS_MULTI,
        payload: {
            data
        }
    }
}

export const filterBooksMultiSuccess = data => {
    return {
        type: types.FITLER_BOOKS_MULTI_SUCCESS,
        payload: {
            data
        }
    }
}

export const getKeyword = keyword => {
    return {
        type: types.GET_KEYWORD,
        payload: {
            keyword
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