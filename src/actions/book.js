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

export const getBooksByBFID = data => {
    return {
        type: types.GET_LIST_BY_BF_ID,
        payload: {
            data
        }
    }
}

export const getBooksByBFIDSuccess = data => {
    return {
        type: types.GET_LIST_BY_BF_ID_SUCCESS,
        payload: {
            data
        }
    }
}

export const getBooksByBFIDFailed = error => {
    return {
        type: types.GET_LIST_BY_BF_ID_FAILED,
        payload: {
            error
        }
    }
}

export const getListBestSeller = data => {
    return {
        type: types.GET_LIST_BEST_SELLER,
        payload: {
            data
        }
    }
}

export const getListBestSellerSuccess = data => {
    return {
        type: types.GET_LIST_BEST_SELLER_SUCCESS,
        payload: {
            data
        }
    }
}

export const getListBestSellerFailed = error => {
    return {
        type: types.GET_LIST_BEST_SELLER_FAILED,
        payload: {
            error
        }
    }
}

export const getListBestSales = data => {
    return {
        type: types.GET_LIST_BEST_SALES,
        payload: {
            data
        }
    }
}

export const getListBestSalesSuccess = data => {
    return {
        type: types.GET_LIST_BEST_SALES_SUCCESS,
        payload: {
            data
        }
    }
}

export const getListBestSalesFailed = error => {
    return {
        type: types.GET_LIST_BEST_SALES_FAILED,
        payload: {
            error
        }
    }
}

export const getListBestNewest = data => {
    return {
        type: types.GET_LIST_NEWEST,
        payload: {
            data
        }
    }
}

export const getListBestNewestSuccess = data => {
    return {
        type: types.GET_LIST_NEWEST_SUCCESS,
        payload: {
            data
        }
    }
}

export const getListBestNewestFailed = error => {
    return {
        type: types.GET_LIST_NEWEST_FAILED,
        payload: {
            error
        }
    }
}

export const getListBestRate = data => {
    return {
        type: types.GET_LIST_BEST_RATE,
        payload: {
            data
        }
    }
}

export const getListBestRateSuccess = data => {
    return {
        type: types.GET_LIST_BEST_RATE_SUCCESS,
        payload: {
            data
        }
    }
}

export const getListBestRateFailed = error => {
    return {
        type: types.GET_LIST_BEST_RATE_FAILED,
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

export const filterBooksSingleFailed = error => {
    return {
        type: types.FITLER_BOOKS_SINGLE_FAILED,
        payload: {
            error
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

export const filterBooksMultiFailed = error => {
    return {
        type: types.FITLER_BOOKS_MULTI_FAILED,
        payload: {
            error
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

export const getListComments = data => {
    return {
        type: types.GET_LIST_COMMENTS,
        payload: {
            data
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

export const updateComment = data => {
    return {
        type: types.UPDATE_COMMENT,
        payload: {
            data
        }
    }
}

export const updateCommentSuccess = data => {
    return {
        type: types.UPDATE_COMMENT_SUCCESS,
        payload: {
            data
        }
    }
}

export const updateCommentFailed = error => {
    return {
        type: types.UPDATE_COMMENT_FAILED,
        payload: {
            error
        }
    }
}

export const deleteComment = data => {
    return {
        type: types.DELETE_COMMENT,
        payload: {
            data
        }
    }
}

export const deleteCommentSuccess = data => {
    return {
        type: types.DELETE_COMMENT_SUCCESS,
        payload: {
            data
        }
    }
}

export const deleteCommentFailed = error => {
    return {
        type: types.DELETE_COMMENT_FAILED,
        payload: {
            error
        }
    }
}