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

export const fetchDetailOrder = data => {
    return {
        type: types.FETCH_DETAIL_ORDER,
        payload: {
            data
        }
    }
}

export const fetchDetailOrderSuccess = data => {
    return {
        type: types.FETCH_DETAIL_ORDER_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchDetailOrderFailed = error => {
    return {
        type: types.FETCH_DETAIL_ORDER_FAILED,
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

export const createOrder =  data => {
    return {
        type: types.CREATE_ORDER,
        payload: {
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

export const filterOrder =  data => {
    return {
        type: types.FILTER_ORDER,
        payload: {
            data
        }
    }
}

export const filterOrderSuccess = data => {
    return {
        type: types.FILTER_ORDER_SUCCESS,
        payload: {
            data
        }
    }
}

export const filterOrderFailed = error => {
    return {
        type: types.FILTER_ORDER_FAILED,
        payload: {
            error
        }
    }
}

export const deleteListOrder = () => {
    return {
        type: types.DELETE_ORDER,
    }
}