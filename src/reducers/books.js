import * as types from '../const/actionType'

var intialState = {
    listBooks: []
}

var products = (state = intialState, action) => {
    switch (action.type) {
        case types.FETCH_LIST_BOOK:
            return {
                ...state,
                listBooks: [],
            }
        case types.FETCH_LIST_BOOK_SUCCESS:
            const { data } = action.payload
            return {
                ...state,
                listBooks: data
            }
        case types.FETCH_LIST_BOOK_FAILED:
            return {
                ...state,
                listBooks: [],
            }
        default: return state
    }
}

export default products