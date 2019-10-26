import * as types from '../const/actionType'

var intialState = [
    {
        numTab: 0,
        isOpen: false,
    }
]

var myReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.OPEN_MODAL:
            var openModal = [
                {
                    numTab: action.numTab,
                    isOpen: action.isOpen
                }
            ]
            return openModal
        case types.CLOSE_MODAL:
            var closeModal = [
                {
                    numTab: 0,
                    isOpen: action.isOpen
                }
            ]
            return closeModal
        default: return state
    }
}

export default myReducer