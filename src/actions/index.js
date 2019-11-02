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