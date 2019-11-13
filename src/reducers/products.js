import * as types from '../const/actionType'

import apiCaller from '../utils/apiCaller'
var intialState = []
apiCaller('products', 'GET', null).then(res => {
    intialState = res.data
    console.log(intialState)
})
console.log(intialState)


var product = (state = intialState, action) => {
    switch (action.type) {
        case types.GET_DETAIL_BOOK:
            return state
        default: return state
    }
}

export default product