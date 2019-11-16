import * as types from '../const/actionType'

var intialState = {
    listBooks: [],
    detailBook: {},
    fieldsBook: []
}

var books = (state = intialState, action) => {
    switch (action.type) {
        case types.GET_DETAIL_BOOK: {
            return {
                ...state,
                detailBook: action.book,
            }
        }
        case types.FETCH_LIST_BOOK: {
            return {
                ...state,
                listBooks: [],
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
        case types.FITLER_BOOKS_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                listBooks: data
            }
        }
        case types.FETCH_LIST_FIELDSBOOK:
            return {
                ...state
            }
        case types.FETCH_LIST_FIELDSBOOK_SUCCESS:
            const { data } = action.payload
            return {
                ...state,
                fieldsBook: data
            }
        case types.FETCH_LIST_FIELDSBOOK_FAILED:
            return {...state}
        default: return state
    }
}

export default books