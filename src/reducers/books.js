import * as types from '../const/actionType'
import * as msg from '../const/message'
import { toastSuccess } from '../utils/Utils'
import { getListComments } from '../actions/book'

var intialState = {
    rateBook: [],
    newBook: [],
    bestSeller: [],
    bestDiscount: [],
    detailBook: {},
    fieldsBook: [],
    filtedBook: {
        list: [],
        currentPage: 1,
        pageSize: 10,
        total: 1,
        bookfield: '',
        keyword: "",
        minRate: "",
        maxRate: "",
        minPrice: "",
        maxPrice: "",
        bookfieldId: 1
    },
    comments: [],
    rate: {
        list: [],
        totalRate: 0,
        ratePercents: {}
    }
}

var books = (state = intialState, action) => {
    switch (action.type) {
        case types.GET_DETAIL_BOOK_SUCCESS: {
            const { data } = action.payload
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
            return {
                ...state
            }
        }
        case types.GET_LIST_NEWEST_SUCCESS: {
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
        case types.GET_LIST_NEWEST_FAILED: {
            return {
                ...state
            }
        }
        case types.GET_LIST_BEST_SELLER_SUCCESS: {
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
        case types.GET_LIST_BEST_SELLER_FAILED: {
            return {
                ...state
            }
        }
        case types.GET_LIST_BEST_SALES_SUCCESS: {
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
        case types.GET_LIST_BEST_SALES_FAILED: {
            return {
                ...state
            }
        }
        case types.GET_LIST_BEST_RATE_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                rateBook: [...data]
            }
        }
        case types.GET_LIST_BEST_RATE_FAILED: {
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
            return {
                ...state,
            }
        }
        case types.FITLER_BOOKS_SUCCESS: {
            const { data, req } = action.payload
            const { books, total, bookfield, page, amount } = data
            return {
                ...state,
                filtedBook: {
                    ...state.filtedBook,
                    list: books,
                    total: total,
                    bookfield: bookfield,
                    currentPage: page,
                    pageSize: amount,
                    keyword: req.title,
                    minRate: req.minRate,
                    maxRate: req.maxRate,
                    minPrice: req.minPrice,
                    maxPrice: req.maxPrice,
                    bookfieldId: req.bookField
                }
            }
        }
        case types.FITLER_BOOKS_FAILED: {
            return {
                ...state
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
            return {
                ...state,
            }
        }
        case types.ADD_NEW_BOOK_SUCCESS: {
            return {
                ...state,
            }
        }
        case types.ADD_NEW_BOOK_FAILED: {
            return {
                ...state,
            }
        }
        case types.UPLOAD_IMAGE_SUCCESS: {
            toastSuccess('Tạo ảnh thành công')
            return {
                ...state,
            }
        }
        case types.UPLOAD_IMAGE_FAILED: {
            return {
                ...state,
            }
        }
        case types.UPDATE_BOOK_SUCCESS:
            {
                toastSuccess(msg.MSG_UPDATE_BOOK_SUCCESS)
                const { data } = action.payload
                const index = state.filtedBook.findIndex(item => item.id === data.id)
                const newList = [...state.filtedBook.slice(0, index), data, ...state.filtedBook.slice(index + 1)];
                return {
                    ...state,
                    filtedBook: newList
                }
            }
        case types.UPDATE_BOOK_FAILED: {
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
            return {
                ...state,
            }
        }
        case types.ADD_COMMENT_SUCCESS: {
            getListComments({ id: state.detailBook.id })
            toastSuccess(msg.MSG_ADD_COMMENT_SUCCESS)
            return {
                ...state
            }
        }
        case types.ADD_COMMENT_FAILED: {
            return {
                ...state,
            }
        }
        case types.UPDATE_COMMENT_SUCCESS: {
            toastSuccess(msg.MSG_UPDATE_COMMENT_SUCCESS)
            const { data } = action.payload
            const index = state.comments.findIndex(item => item.id === data.comment_id)
            var newItem = state.comments[index]
            newItem.comment = data.comment
            const newList = [...state.comments.slice(0, index), newItem, ...state.comments.slice(index + 1)]
            return {
                ...state,
                comments: newList
            }
        }
        case types.UPDATE_COMMENT_FAILED: {
            return {
                ...state,
            }
        }
        case types.DELETE_COMMENT_SUCCESS: {
            const { data } = action.payload
            toastSuccess(msg.MSG_DELETE_COMMENT_SUCCESS)
            const newList = state.comments.filter(item => item.id !== data.comment_id)
            return {
                ...state,
                comments: [...newList]
            }
        }
        case types.DELETE_COMMENT_FAILED: {
            return {
                ...state,
            }
        }
        case types.GET_LIST_RATE_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                rate: {
                    totalRate: data.totalRate,
                    list: [...data.rateList],
                    ratePercents: {...data.ratesPercent}
                }
            }
        }
        case types.GET_LIST_RATE_FAILED: {
            return {
                ...state,
            }
        }
        case types.RATE_BOOK_SUCCESS: {
            return {
                ...state,
            }
        }
        case types.RATE_BOOK_FAILED: {
            return {
                ...state,
            }
        }case types.UPDATE_RATE_SUCCESS: {
            return {
                ...state,
            }
        }
        case types.UPDATE_RATE_FAILED: {
            return {
                ...state,
            }
        }
        case types.FOUR_NEWEST_SUCCESS: {
            const { data } = action.payload

            return {
                ...state,
                newBook: [...data.books]
            }
        }
        case types.FOUR_NEWEST_FAILED: {
            return {
                ...state,
            }
        }
        case types.FOUR_BEST_SELLER_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                bestSeller: [...data.books]
            }
        }
        case types.FOUR_BEST_SELLER_FAILED: {
            return {
                ...state,
            }
        }
        case types.FOUR_BEST_DISCOUNT_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                bestDiscount: [...data.books]
            }
        }
        case types.FOUR_BEST_DISCOUNT_FAILED: {
            return {
                ...state,
            }
        }
        default: return { ...state }
    }
}

export default books