import * as types from '../const/actionType'

var intialState = {
    listBooks: [],
    detailBook: {},
    fieldsBook: [],
    filtedBook: {
        list: [],
        keyword: ''
    }
}

var books = (state = intialState, action) => {
    switch (action.type) {
        case types.GET_DETAIL_BOOK_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                detailBook: data,
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
                listBooks: [],
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
        case types.FETCH_LIST_FIELDSBOOK_SUCCESS:
            const { data } = action.payload
            return {
                ...state,
                fieldsBook: data
            }
        case types.FETCH_LIST_FIELDSBOOK_FAILED:
            return {...state}
        default: return {...state}
    }
}

export default books