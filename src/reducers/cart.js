import * as types from '../const/actionType'

var data = JSON.parse(localStorage.getItem('CART'))
var intialState = data ? data : []

var appReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            return state
        default: return state
    }
}

export default appReducer