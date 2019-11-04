import * as types from '../const/actionType'
import {list} from '../const/listbook'

var intialState = list

var appReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.GET_DETAIL_BOOK:
            return state
        default: return state
    }
}

export default appReducer