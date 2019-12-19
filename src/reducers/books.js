import * as types from '../const/actionType'
import * as msg from '../const/message'
import { toastSuccess, toastError } from '../utils/Utils'

var intialState = {
    listBooks: [],
    detailBook: {},
    fieldsBook: [],
    filtedBook: {
        list: [],
        currentPage: 1,
        pageSize: 1,
        total: 1,
        bookfield: '',
        keyword: ''
    },
    comments: []
}

var books = (state = intialState, action) => {
    switch (action.type) {
        case types.GET_DETAIL_BOOK_SUCCESS: {
            const { data } = action.payload
            console.log(data)
            return {
                ...state,
                detailBook: data,
                filtedBook: {
                    ...state.filtedBook,
                    bookfield: data.bookfield
                }
            }
        }
        case types.GET_DETAIL_BOOK_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state
            }
        }
        case types.GET_LIST_BY_BF_ID_SUCCESS: {
            const { books, total, bookfield, page, amount } = action.payload.data
            return {
                ...state,
                filtedBook: {
                    ...state.filtedBook,
                    list: books,
                    total: total,
                    bookfield: bookfield,
                    currentPage: page,
                    pageSize: amount
                }
            }
        }
        case types.GET_LIST_BY_BF_ID_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state
            }
        }
        case types.FETCH_LIST_BOOK_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                listBooks: data
            }

        }
        case types.FETCH_LIST_BOOK_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state,
            }
        }
        case types.FITLER_BOOKS_SINGLE_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                filtedBook: {
                    ...state.filtedBook,
                    list: data
                }
            }
        }
        case types.FITLER_BOOKS_SINGLE_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state,
            }
        }
        case types.FITLER_BOOKS_MULTI_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                filtedBook: {
                    list: data,
                    keyword: ''
                }
            }
        }
        case types.FITLER_BOOKS_MULTI_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state
            }
        }
        case types.GET_KEYWORD: {
            const { keyword } = action.payload
            return {
                ...state,
                filtedBook: {
                    ...state.filtedBook,
                    keyword: keyword
                }
            }
        }
        case types.FETCH_LIST_FIELDSBOOK_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                fieldsBook: data
            }
        }
        case types.FETCH_LIST_FIELDSBOOK_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state,
            }
        }
        case types.UPDATE_BOOK_SUCCESS:
            {
                toastSuccess(msg.MSG_UPDATE_BOOK_SUCCESS)
                const { data } = action.payload
                const index = state.listBooks.findIndex(item => item.id === data.id)
                const newList = [...state.listBooks.slice(0, index), data, ...state.listBooks.slice(index + 1)];
                return {
                    ...state,
                    listBooks: newList
                }
            }
        case types.UPDATE_BOOK_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state
            }
        }
        case types.GET_LIST_COMMENTS_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                comments: data
            }
        }
        case types.GET_LIST_COMMENTS_FAILED: {
            const { error } = action.payload
            toastError(error)
            return { 
                ...state,
             }
        }
        case types.ADD_COMMENT_SUCCESS: {
            const { data } = action.payload
            toastSuccess(msg.MSG_ADD_COMMENT_SUCCESS)
            return {
                ...state,
                comments: [
                    ...state.comments,
                    data
                ]
            }
        }
        case types.ADD_COMMENT_FAILED: {
            const { error } = action.payload
            toastError(error)
            return { 
                ...state,
             }
        }
        default: return { ...state }
    }
}

export default books