import * as types from '../const/actionType'

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