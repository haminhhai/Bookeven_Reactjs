import * as types from '../const/actionType'

var initialState = {
    address: [],
    info: []
}
var account = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LIST_ADDRESS_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                address: data
            }
        }
        case types.CREATE_NEW_ADDRESS_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                address: [
                    ...state.address,
                    data
                ]
            }
        }
        case types.UPDATE_ADDRESS_SUCCESS: {
            const { data } = action.payload
            const index = state.address.findIndex(item => item.id === data.id)
            const newList = [...state.address.slice(0, index), data, ...state.address.slice(index + 1)];
            return {
                ...state,
                address: [...newList]
            }
        }
        case types.DELETE_ADDRESS_SUCCESS: {
            const { id } = action.payload
            const newList = state.address.filter(item => item.id !== id)
            return {
                ...state,
                address: [...newList]
            }
        }
        default: return { ...state }
    }
}

export default account