import { SHOW_LOADING, HIDE_LOADING, OPEN_MODAL, CLOSE_MODAL, CHANGE_MESSAGE } from '../const/actionType'

export const showLoading = () => ({
    type: SHOW_LOADING
})

export const hideLoading = () => ({
    type: HIDE_LOADING
})

export const openModal = numTab => {
    return {
        type: OPEN_MODAL,
        numTab,
    }
}

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    }
}

export const changeMessage =  message => {
    return {
        type: CHANGE_MESSAGE,
        message, 
    }
}

