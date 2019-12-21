import * as types from '../const/actionType'
import { toastError, toastSuccess} from '../utils/Utils'
import * as msg from '../const/message'
var initialState = []
var orders = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_LIST_ORDER_SUCCESS: {
            const { data } = action.payload
            return [...data]
        }
        case types.FETCH_ALL_LIST_ORDER_FAILED: {
            const { error } = action.payload
            toastError(error)
            return [...state]
        }
        case types.FETCH_LIST_ORDER_BY_ID_SUCCESS: {
            const { data } = action.payload
            return [...data]
        }
        case types.FETCH_LIST_ORDER_BY_ID_FAILED: {
            const { error } = action.payload
            toastError(error)
            return [...state]
        }
        case types.FILTER_ORDER_SUCCESS: {
            return [...state]
        }
        case types.FILTER_ORDER_FAILED: {
            const { error } = action.payload
            toastError(error)
            return [...state]
        }
        case types.CREATE_ORDER_SUCCESS: {
            toastSuccess(msg.MSG_CREATE_ORDER_SUCCESS)
            return [...state]
        }
        case types.CREATE_ORDER_FAILED: {
            const { error } = action.payload
            toastError(error)
            return [...state]
        }
        case types.UPDATE_ORDER_SUCCESS: {
            toastSuccess(msg.MSG_UPDATE_ORDER_SUCCESS)
            const { data } = action.payload
            const index = state.findIndex(item => item.id === data.id)
            const newList = [...state.slice(0, index), data, ...state.slice(index + 1)];
            return [...newList]
        }
        case types.UPDATE_ORDER_FAILED: {
            const { error } = action.payload
            toastError(error)
            return [...state]
        }
        default: return [...state]
    }
}

export default orders