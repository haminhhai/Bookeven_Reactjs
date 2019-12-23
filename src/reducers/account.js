import * as types from '../const/actionType'
import * as msg from '../const/message'
import { toastSuccess, toastError } from '../utils/Utils'
const defaultInfo = {
    id: 0,
    email: '',
    phone: '',
    fullname: '',
    role: 0,
}
var initialState = {
    address: [],
    info: defaultInfo
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
        case types.GET_LIST_ADDRESS_FAILED: {
            return {
                ...state,
            }
        }
        case types.CREATE_NEW_ADDRESS_SUCCESS: {
            toastSuccess(msg.MSG_CREATED_ADDRESS_SUCCESS)
            return {
                ...state
            }
        }
        case types.CREATE_NEW_ADDRESS_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state,
            }
        }
        case types.UPDATE_ADDRESS_SUCCESS: {
            toastSuccess(msg.MSG_UPDATE_ADDRESS_SUCCESS)
            const { data } = action.payload
            const index = state.address.findIndex(item => item.id === data.address_id)
            const newList = [...state.address.slice(0, index), data, ...state.address.slice(index + 1)];
            return {
                ...state,
                address: [...newList]
            }
        }
        case types.UPDATE_ADDRESS_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state,
            }
        }
        case types.DELETE_ADDRESS_SUCCESS: {
            toastSuccess(msg.MSG_DELETE_ADDRESS_SUCCESS)
            const { data } = action.payload
            const newList = state.address.filter(item => item.id !== data.address_id)
            return {
                ...state,
                address: [...newList]
            }
        }
        case types.DELETE_ADDRESS_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state,
            }
        }
        case types.GET_USER_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                info: {...data}
            }
        }
        case types.GET_USER_FAILED: {
            return {
                ...state,
            }
        }
        case types.UPDATE_USER_SUCCESS: {
            const { data } = action.payload
            toastSuccess(msg.MSG_UPDATE_USER_SUCCESS)
            return {
                ...state,
                info: {
                    ...state.info,
                    fullname: data.fullname,
                    phone: data.phone
                }
            }
        }
        case types.UPDATE_USER_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state,
            }
        }
        case types.CHANGE_PASSWORD_SUCCESS: {
            toastSuccess(msg.MSG_CHANGE_PASSWORD_SUCCESS)
            return {
                ...state
            }
        }
        case types.CHANGE_PASSWORD_FAILED: {
            const { error } = action.payload
            toastError(error)
            return {
                ...state,
            }
        }
        case types.DELETE_INFO: {
            return {
                ...state,
                info: defaultInfo
            }
        }
        default: return { ...state }
    }
}

export default account