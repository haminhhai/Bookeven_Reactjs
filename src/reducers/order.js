import * as types from '../const/actionType'
import {  toastSuccess} from '../utils/Utils'
import * as msg from '../const/message'
var initialState = {
    list: [],
    detail: {}
}
var orders = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_LIST_ORDER_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                list: [...data]
            }
        }
        case types.FETCH_ALL_LIST_ORDER_FAILED: {
            return {...state}
        }
        case types.FETCH_DETAIL_ORDER_SUCCESS: {
            const { data } = action.payload
            return {
                ...state,
                detail: {...data}
            }
        }
        case types.FETCH_DETAIL_ORDER_FAILED: {
            return {...state}
        }
        case types.DELETE_ORDER: {
            return {
                list: [],
                detail: {}
            }
        }
        case types.FILTER_ORDER_SUCCESS: {
            toastSuccess(msg.MSG_FILTER_ORDER_SUCCESS)
            const { data } = action.payload
            return {
                ...state,
                list: data.length > 0 ? [...data] : []
            }
        }
        case types.FILTER_ORDER_FAILED: {
            return {...state}
        }
        case types.CREATE_ORDER_SUCCESS: {
            toastSuccess(msg.MSG_CREATE_ORDER_SUCCESS)
            return {...state}
        }
        case types.CREATE_ORDER_FAILED: {
            return {...state}
        }
        case types.UPDATE_ORDER_SUCCESS: {
            toastSuccess(msg.MSG_UPDATE_ORDER_SUCCESS)
            const { data } = action.payload
            const index = state.list.findIndex(item => item.id === data.id)
            var newOrder = state.list[index]
            newOrder.shipDate = data.shipDate
            newOrder.status = data.status
            const newList = [...state.list.slice(0, index), newOrder, ...state.list.slice(index + 1)];
            return {
                ...state,
                list: [...newList]
            }
        }
        case types.UPDATE_ORDER_FAILED: {
            return {...state}
        }
        default: return {...state}
    }
}

export default orders