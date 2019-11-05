import * as types from '../const/actionType'

var intialState = ''

var message = (state = intialState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE:
            return action.message
        default: return state
    }
}

export default message