import * as types from '../const/actionType'

export const fetchCart = () => {
    return {
        type: types.FETCH_CART,
    }
}

export const fetchCartSuccess = data => {
    return {
        type: types.FETCH_CART_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchCartFailed = error => {
    return {
        type: types.FETCH_CART_FAILED,
        payload: {
            error
        }
    }
}

export const addToCart = data => {
    return {
        type: types.ADD_TO_CART,
        payload: {
            data
        }
    }
}

export const addToCartSuccess = data => {
    return {
        type: types.ADD_TO_CART_SUCCESS,
        payload: {
            data
        }
    }
}

export const addToCartFailed = error => {
    return {
        type: types.ADD_TO_CART_FAILED,
        payload: {
            error
        }
    }
}

export const updateCart = data => {
    return {
        type: types.UPDATE_CART,
        payload: {
            data
        }
    }
}

export const updateCartSuccess = data => {
    return {
        type: types.UPDATE_CART_SUCCESS,
        payload: {
            data
        }
    }
}

export const updateCartFailed = error => {
    return {
        type: types.UPDATE_CART_FAILED,
        payload: {
            error
        }
    }
}

export const removeCart = data => {
    return {
        type: types.REMOVE_ITEM_FROM_CART,
        payload: {
            data
        }
    }
}

export const removeCartSuccess = data => {
    return {
        type: types.REMOVE_ITEM_FROM_CART_SUCCESS,
        payload: {
            data
        }
    }
}

export const removeCartFailed = error => {
    return {
        type: types.REMOVE_ITEM_FROM_CART_FAILED,
        payload: {
            error
        }
    }
}
