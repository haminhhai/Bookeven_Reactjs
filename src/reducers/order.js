import * as types from '../const/actionType'

var initialState = []
var orders = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_LIST_ORDER_SUCCESS: {
            const { data } = action.payload
            return [...data]
        }
        case types.FETCH_LIST_ORDER_BY_ID_SUCCESS: {
            const { data } = action.payload
            return [...data]
        }
        case types.FILTER_ORDER_SUCCESS: {
            return [...state]
        }
        case types.CREATE_ORDER_SUCCESS: {
            const { data } = action.payload
            state.push(data)
            return [...state]
        }
        case types.UPDATE_ORDER_SUCCESS: {
            const { data } = action.payload
            const index = state.findIndex(item => item.id === data.id)
            const newList = [...state.slice(0, index), data, ...state.slice(index + 1)];
            return [...newList]
        }
        default: return [...state]
    }
}

export default orders