import * as types from '../const/actionType'

var initialState = []
var cart = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_CART_SUCCESS: {
            const { data } = action.payload
            state = data
            return [...state]
        }
        case types.FETCH_CART_FAILED:
            return state
        case types.ADD_TO_CART_SUCCESS: {
            const { data } = action.payload
            state.push(data)
            return [...state]
        }
        case types.ADD_TO_CART_FAILED:
            return [...state]
        case types.UPDATE_CART_SUCCESS: {
            const { data } = action.payload
            const index = state.findIndex(item => item.id === data.id)
            const newList = [...state.slice(0, index), data, ...state.slice(index + 1)];
            return [...newList]
        }
        case types.UPDATE_CART_FAILED:
            return [...state]
        case types.REMOVE_ITEM_FROM_CART_SUCCESS: {
            const { data } = action.payload
            const newList = state.filter(item => item.id !== data.id)
            return [...newList]
        }
        case types.REMOVE_ITEM_FROM_CART_FAILED:
            return [...state]
        default: return [...state]
    }
}

export default cart