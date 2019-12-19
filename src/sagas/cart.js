import {
    call,
    fork,
    put,
    take,
    takeLatest,
    takeEvery,
    select
} from 'redux-saga/effects';
import _get from 'lodash/get';
import * as types from '../const/actionType'
import { hideLoading, showLoading } from '../actions/ui';
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
        try {
            yield take(types.FETCH_CART)
            const res = yield call(getCart)
            const { status, data } = res
            if (status === STATUS_CODE.SUCCESS) {
                yield put(fetchCartSuccess(data))
            } else {
                yield put(fetchCartFailed(data.message))
            }
        } catch (error) {
            const message = _get(error, 'response.data.message', {});
            yield put(fetchCartFailed(message));
        } 
    }
}

function* watchAddToCartAction({ payload }) {
    const { product, amount } = payload
    try {
        yield put(showLoading())
        var cart = yield select(state => state.cart) //get cart from store
        var checkExist = []
        if (cart.length > 0)
            checkExist = cart.filter(book => book.id === product.id) // check if product exists in cart?
        if (checkExist.length > 0) {
            checkExist[0].amount += amount
            const res = yield call(updateCart, checkExist[0])
            const { status, data } = res
            if (status === STATUS_CODE.SUCCESS) {
                yield put(updateCartSuccess(data))
            } else {
                yield put(updateCartFailed(data.message))
            }
        } else {
            product.amount = amount
            const res = yield call(addToCart, product)
            const { status, data } = res
            if (status === STATUS_CODE.CREATED) {
                yield put(addToCartSuccess(data))
            } else {
                yield put(addToCartFailed(data.message))
            }
        }
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(addToCartFailed(message));
    } finally {
        yield put(hideLoading())
    }
}

function* watchUpdateCartAction({ payload }) {
    const { product, amount } = payload
    try {
        yield put(showLoading())
        const cart = yield select(state => state.cart) //get cart from store
        const filterBook = cart.filter(book => book.id === product.id) //filter product needs to update
        if (filterBook.length > 0) {
            filterBook[0].amount = amount
            const res = yield call(updateCart, filterBook[0])
            const { status, data } = res
            if (status === STATUS_CODE.SUCCESS) {
                yield put(updateCartSuccess(data))
            } else {
                yield put(updateCartFailed(data.message))
            }
        }
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(updateCartFailed(message));
    } finally {
        yield put(hideLoading())
    }
}

function* watchRemoveItemAction({ payload }) {
    const { product } = payload
    try {
        yield put(showLoading())
        const res = yield call(removeBook, product)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(removeCartSuccess(product))
        } else {
            yield put(removeCartFailed(data.message))
        }
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(removeCartFailed(message));
    } finally {
        yield put(hideLoading())
    }
}



function* cartSaga() {
    yield fork(watchGetCartAction)
    yield takeEvery(types.ADD_TO_CART, watchAddToCartAction)
    yield takeLatest(types.UPDATE_CART, watchUpdateCartAction)
    yield takeLatest(types.REMOVE_ITEM_FROM_CART, watchRemoveItemAction)
}

export default cartSaga