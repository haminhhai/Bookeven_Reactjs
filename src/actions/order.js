import * as types from '../const/actionType'

export const fetchAllListOrders = () => {
    return {
        type: types.FETCH_ALL_LIST_ORDER,
    }
}

export const fetchAllListOrdersSuccess = data => {
    return {
        type: types.FETCH_ALL_LIST_ORDER_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchAllListOrdersFailed = error => {
    return {
        type: types.FETCH_ALL_LIST_ORDER_FAILED,
        payload: {
            error
        }
    }
}

export const fetchListOrdersById = id => {
    return {
        type: types.FETCH_LIST_ORDER_BY_ID,
        payload: {
            id
        }
    }
}

export const fetchListOrdersByIdSuccess = data => {
    return {
        type: types.FETCH_LIST_ORDER_BY_ID_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchListOrdersByIdFailed = error => {
    return {
        type: types.FETCH_LIST_ORDER_BY_ID_FAILED,
        payload: {
            error
        }
    }
}

export const updateOrder =  data => {
    return {
        type: types.UPDATE_ORDER,
        payload: {
            data
        }
    }
}

export const updateOrderSuccess = data => {
    return {
        type: types.UPDATE_ORDER_SUCCESS,
        payload: {
            data
        }
    }
}

export const updateOrderFailed = error => {
    return {
        type: types.UPDATE_ORDER_FAILED,
        payload: {
            error
        }
    }
}

export const createOrder = (id, data) => {
    return {
        type: types.CREATE_ORDER,
        payload: {
            id,
            data
        }
    }
}

export const createOrderSuccess = data => {
    return {
        type: types.CREATE_ORDER_SUCCESS,
        payload: {
            data
        }
    }
}

export const createOrderFailed = error => {
    return {
        type: types.CREATE_ORDER_FAILED,
        payload: {
            error
        }
    }
}