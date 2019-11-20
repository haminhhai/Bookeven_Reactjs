import * as types from '../const/actionType'

var initialState = {
    address: []
}
var account = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_LIST_ADDRESS_SUCCESS: {
            const { data } = action.payload
            return {
                address: data
            }
        }
        case types.CREATE_NEW_ADDRESS_SUCCESS: {
            const { data } = action.payload
            return {
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
                address: [...newList]
            }
        }
        case types.DELETE_ADDRESS_SUCCESS: {
            const { id } = action.payload
            const newList = state.address.filter(item => item.id !== id)
            return {
                address: [...newList]
            }
        }
        default: return { ...state }
    }
}

export default account