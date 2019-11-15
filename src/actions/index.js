import * as types from '../const/actionType'

import callApi from '../utils/apiCaller'
export const openModal = (numTab, isOpen) => {
    return {
        type: types.OPEN_MODAL,
        numTab, // numTab: numTab,
        isOpen // isOpen: isOpen
    }
}

export const closeModal =  isOpen => {
    return {
        type: types.CLOSE_MODAL,
        isOpen // isOpen: isOpen
    }
}

export const getDetailBook =  book => {
    return {
        type: types.GET_DETAIL_BOOK,
        book // book: book
    }
}

export const fetchAllProductsRequest = () => {
    return async (dispatch) => {
        const res = await callApi('products', 'GET', null)
        dispatch(fetchAllProducts(res.data))
    }
}

export const fetchAllProducts = product => {
    return {
        type: types.FETCH_ALL_PRODUCTS,
        product // product: product
    }
}

export const fetchAllFieldsRequest = () => {
    return async (dispatch) => {
        const res = await callApi('fieldsBook', 'GET', null)
        dispatch(fetchAllFieldsBook(res.data))
    }
}

export const fetchAllFieldsBook = field => {
    return {
        type: types.FETCH_LIST_FIELDSBOOK,
        field // field: field
    }
}

export const addToCart =  (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product, // product: product
        quantity, // quantity: quantity
    }
}

export const changeMessage =  message => {
    return {
        type: types.CHANGE_MESSAGE,
        message, // message: message
    }
}

export const removeProduct =  product => {
    return {
        type: types.REMOVE_ITEM_FROM_CART,
        product, // product: product
    }
}

export const updateCart =  (product, quantity) => {
    return {
        type: types.UPDATE_CART,
        product, // product: product
        quantity, // quantity: quantity
    }
}