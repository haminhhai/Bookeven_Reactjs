import * as types from '../const/actionType'

var data = JSON.parse(localStorage.getItem('detail-book'))

var intialState = data ? data : []

var myReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.GET_DETAIL_BOOK:
            var newBook = action.book
            return newBook
        default: return state
    }
}

export default myReducer