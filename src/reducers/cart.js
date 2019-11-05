import * as types from '../const/actionType'

var data = JSON.parse(localStorage.getItem('CART'))
var intialState = [
    {
        product: {
            src: 'https://nxbkimdong.com.vn/sites/default/files/styles/uc_product/public/kim-dong_bia_195mmx260mm.jpg?itok=Wp5OCpwL',
            title: 'Kim Đồng',
            author: 'Nhiều tác giả',
            discount: 98000,
            amount: 51000,
            topic: 1,
            iventory: 15,
            rate: 4
        },
        quantity: 5
        
    }
]

var appReducer = (state = intialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            return state
        default: return state
    }
}

export default appReducer