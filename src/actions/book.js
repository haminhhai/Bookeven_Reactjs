import * as types from '../const/actionType'

export const getDetailBook = data => {
    return {
        type: types.GET_DETAIL_BOOK,
        payload: {
            data
        }
    }
}

export const getDetailBookSuccess = data => {
    return {
        type: types.GET_DETAIL_BOOK_SUCCESS,
        payload: {
            data
        }
    }
}

export const getDetailBookFailed = error => {
    return {
        type: types.GET_DETAIL_BOOK_FAILED,
        payload: {
            error
        }
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

export const updateListBook = data => {
    return {
        type: types.UPDATE_BOOK,
        payload: {
            data
        }
    }
}

export const updateListBookSuccess = data => {
    return {
        type: types.UPDATE_BOOK_SUCCESS,
        payload: {
            data
        }
    }
}

export const updateListBookFailed = error => {
    return {
        type: types.UPDATE_BOOK_FAILED,
        payload: {
            error
        }
    }
}

export const getListComments = ISBN => {
    return {
        type: types.GET_LIST_COMMENTS,
        payload: {
            ISBN
        }
    }
}

export const getListCommentsSuccess = data => {
    return {
        type: types.GET_LIST_COMMENTS_SUCCESS,
        payload: {
            data
        }
    }
}

export const getListCommentsFailed = error => {
    return {
        type: types.GET_LIST_COMMENTS_FAILED,
        payload: {
            error
        }
    }
}

export const addComment = data => {
    return {
        type: types.ADD_COMMENT,
        payload: {
            data
        }
    }
}

export const addCommentSuccess = data => {
    return {
        type: types.ADD_COMMENT_SUCCESS,
        payload: {
            data
        }
    }
}

export const addCommentFailed = error => {
    return {
        type: types.ADD_COMMENT_FAILED,
        payload: {
            error
        }
    }
}