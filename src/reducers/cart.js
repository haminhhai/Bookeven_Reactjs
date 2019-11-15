import * as types from '../const/actionType'

import apiCaller from '../utils/apiCaller'

import * as utils from '../utils/Utils'

apiCaller('cart', "GET", null).then(res => {
    localStorage.setItem('cart', JSON.stringify(res.data))
})
var data = JSON.parse(localStorage.getItem('cart'))
var initialState = data ? data : []
var cart = (state = initialState, action) => {
    var { product, quantity } = action
    var index = -1
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductInCart(state, product)
            var newproduct = {}
            if (index !== -1) {
                state[index].quantity += quantity
                newproduct = {
                    product: product,
                    quantity: state[index].quantity
                }
                apiCaller(`cart/${state[index].id}`, "PUT", newproduct)
            }
            else {
                newproduct = {
                    id: utils.idGenarator(),
                    product: product,
                    quantity: quantity
                }
                state.push(newproduct)
                console.log(state)
                apiCaller("cart", "POST", newproduct)
            }

            return [...state]
        case types.REMOVE_ITEM_FROM_CART:
            index = findProductInCart(state, product)
            if (index !== -1) {
                apiCaller(`cart/${state[index].id}`, 'DELETE', null)
                state.splice(index, 1)
            }

            return [...state]
        case types.UPDATE_CART:
            index = findProductInCart(state, product)
            console.log(product, quantity)
            var productUpdate = {}
            if (index !== -1) {
                state[index].quantity = quantity
                productUpdate = {
                    product: product,
                    quantity: quantity
                }
            }
            apiCaller(`cart/${state[index].id}`, "PUT", productUpdate)
            return [...state]
        default: return [...state]
    }
}

//return !== -1 is duplicate
var findProductInCart = (cart, product) => {
    var index = -1
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++)
            if (cart[i].product.id === product.id) {
                index = i
                break
            }
    }
    return index
}

export default cart