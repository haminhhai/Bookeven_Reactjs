import * as types from '../const/actionType'

const initialState = {
    toggleModal: {
        numTab: 0,
        isOpen: false,
    },
    showLoading: false,
    message: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_MODAL:
            var openModal = {
                numTab: action.numTab,
                isOpen: true
            }
            return {
                ...state,
                toggleModal: openModal
            }
        case types.CLOSE_MODAL:
            var closeModal = {
                numTab: 0,
                isOpen: false
            }
            return {
                ...state,
                toggleModal: closeModal
            }
        case types.SHOW_LOADING:
            return {
                ...state,
                showLoading: true
            }
        case types.HIDE_LOADING:
            return {
                ...state,
                showLoading: false
            }

        case types.CHANGE_MESSAGE:
            return {
                ...state,
                message: action.message
            }
        default: return state
    }
}

export default reducer