import {
    call,
    fork,
    put,
    take,
    takeLatest,
    takeEvery,
    select
} from 'redux-saga/effects';
import * as types from '../const/actionType'
import {
    fetchCartSuccess,
    fetchCartFailed,
    addToCartSuccess,
    addToCartFailed,
    removeCartSuccess,
    removeCartFailed,
    updateCartSuccess,
    updateCartFailed
} from '../actions/cart'
import { getCart, addToCart, updateCart, removeBook } from '../apis/cart'

import { STATUS_CODE } from '../const/config'

function* watchGetCartAction() {
    while (true) {
        yield take(types.FETCH_CART)
        const res = yield call(getCart)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchCartSuccess(data))
        } else {
            yield put(fetchCartFailed(data))
        }
    }
}

function* watchAddToCartAction({ payload }) {
    const { product, quantity } = payload
    var cart = yield select(state => state.cart) //get cart from store
    var checkExist = []
    if (cart.length > 0)
        checkExist = cart.filter(book => book.id === product.id) // check if product exists in cart?
    if (checkExist.length > 0) {
        checkExist[0].quantity += quantity
        const res = yield call(updateCart, checkExist[0])
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(updateCartSuccess(data))
        } else {
            yield put(updateCartFailed(data))
        }
    } else {
        product.quantity = quantity
        const res = yield call(addToCart, product)
        const { status, data } = res
        if (status === STATUS_CODE.CREATED) {
            yield put(addToCartSuccess(data))
        } else {
            yield put(addToCartFailed(data))
        }
    }
}

function* watchUpdateCartAction({ payload }) {
    const { product, quantity } = payload
    const cart = yield select(state => state.cart) //get cart from store
    const filterBook = cart.filter(book => book.id === product.id) //filter product needs to update
    if (filterBook.length > 0) {
        filterBook[0].quantity = quantity
        const res = yield call(updateCart, filterBook[0])
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(updateCartSuccess(data))
        } else {
            yield put(updateCartFailed(data))
        }
    }
}

function* watchRemoveItemAction({ payload }) {
    const { product } = payload
    const res = yield call(removeBook, product.id)
    const { status, data } = res
    if (status === STATUS_CODE.SUCCESS) {
        yield put(removeCartSuccess(product))
    } else {
        yield put(removeCartFailed(data))
    }
}



function* cartSaga() {
    yield fork(watchGetCartAction)
    yield takeEvery(types.ADD_TO_CART, watchAddToCartAction)
    yield takeLatest(types.UPDATE_CART, watchUpdateCartAction)
    yield takeLatest(types.REMOVE_ITEM_FROM_CART, watchRemoveItemAction)
}

export default cartSaga