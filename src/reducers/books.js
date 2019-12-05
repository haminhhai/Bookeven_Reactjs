import * as types from '../const/actionType'

var intialState = {
    listBooks: [],
    detailBook: {},
    fieldsBook: [],
    filtedBook: {
        list: [],
        keyword: ''
    },
    comments: []
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
            return { ...state }
        case types.UPDATE_BOOK_SUCCESS:
            {
                const { data } = action.payload
                const index = state.listBooks.findIndex(item => item.id === data.id)
                const newList = [...state.listBooks.slice(0, index), data, ...state.listBooks.slice(index + 1)];
                return {
                    ...state,
                    listBooks: newList
                }
            }
        case types.GET_LIST_COMMENTS_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                comments: data
            }
        }
        case types.ADD_COMMENT_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                comments: [
                    ...state.comments,
                    data
                ]
            }
        }
        default: return { ...state }
    }
}

export default books