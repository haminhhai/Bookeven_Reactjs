import * as types from '../const/actionType'

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
