import * as types from '../const/actionType'

var intialState = []

var fieldsBook = (state = intialState, action) => {
    switch (action.type) {
        case types.FETCH_LIST_FIELDSBOOK:
            return [...state]
        case types.FETCH_LIST_FIELDSBOOK_SUCCESS:
            const { data } = action.payload
            return data
        case types.FETCH_LIST_FIELDSBOOK_FAILED:
            return [...state]
        default: return state
    }
}

export default fieldsBook