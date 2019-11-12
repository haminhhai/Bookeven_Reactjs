import * as types from '../const/actionType'

var data = JSON.parse(localStorage.getItem('CART'))
var intialState = data ? data : []

var cart = (state = intialState, action) => {
    var { product, quantity } = action
    var index = -1
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductInCart(state, product)
            if (index !== -1)
                state[index].quantity += quantity
            else {
                state.push({
                    product: product,
                    quantity: quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        case types.REMOVE_ITEM_FROM_CART:
            index = findProductInCart(state, product)
            if(index !== -1)
                state.splice(index, 1)
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        case types.UPDATE_CART:
            index = findProductInCart(state, product)
            console.log(product, quantity)
            if(index !== -1)
                state[index].quantity = quantity
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        default: return [...state]
    }
}

//return !== -1 is duplicate
var findProductInCart = (cart, product) => {
    var index = -1
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++)
            if (cart[i].product.id === product.id)
            {
                index = i
                break
            }
    }
    return index
}

export default cart