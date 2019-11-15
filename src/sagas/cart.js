import {
    call,
    fork,
    put,
    take,
  } from 'redux-saga/effects';
import * as types from '../const/actionType'
import { 
    addToCartSuccess,
    addToCartFailed,
    removeCartSuccess,
    removeCartFailed,
    updateCartSuccess,
    updateCartFailed
 } from '../actions/cart'
import { getCart, addToCart, updateCart, removeBook } from '../apis/cart'

import { STATUS_CODE } from '../const/config'

/**
 * First: fetch list book
 * Second: Call API
 * Third: check status code
 * success -> ...
 * failed -> ...
 * Fourth: turn off loading
 * Fifth: do next task
 */
function* watchAddToCartAction() {
    while (true) {
        yield take(types.ADD_TO_CART)
        const res = yield call(addToCart)
        const { status, data } = res
        if (status === STATUS_CODE.success) {
            yield put(addToCartSuccess(data))
        } else {
            yield put(addToCartFailed(data))
        }
    }
}

function* bookSaga() {
    yield fork(watchAddToCartAction)
}

export default bookSaga