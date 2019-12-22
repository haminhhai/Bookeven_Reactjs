import { SHOW_LOADING, HIDE_LOADING, OPEN_MODAL, CLOSE_MODAL } from '../const/actionType'

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


