import {
    call,
    fork,
    put,
    take,
    takeLatest,
    takeEvery
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

import { MSG_ERROR_OCCUR } from '../const/message'
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
            var message = _get(error, 'response.data.message', {});
            if (typeof message === 'object')
                message = MSG_ERROR_OCCUR
            yield put(fetchCartFailed(message));
        }
    }
}

function* watchAddToCartAction({ payload }) {
    try {
        yield put(showLoading())
        const res = yield call(addToCart, payload.data)
        const { status, data } = res
        var body = {
            ...data,
            amount: payload.data.amount
        }
        if (status === STATUS_CODE.CREATED) {
            yield put(addToCartSuccess(body))
        } else if (status === STATUS_CODE.SUCCESS) {
            yield put(updateCartSuccess(payload.data))
        } else {
            yield put(addToCartFailed(data.message))
        }

    } catch (error) {
        var message = _get(error, 'response.data.message', {});
        if (typeof message === 'object')
            message = MSG_ERROR_OCCUR
        yield put(addToCartFailed(message));
    } finally {
        yield put(hideLoading())
    }
}

function* watchUpdateCartAction({ payload }) {
    try {
        yield put(showLoading())
        const res = yield call(updateCart, payload.data)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(updateCartSuccess(payload.data))
        } else {
            yield put(updateCartFailed(data.message))
        }

    } catch (error) {
        var message = _get(error, 'response.data.message', {});
        if (typeof message === 'object')
            message = MSG_ERROR_OCCUR
        yield put(updateCartFailed(message));
    } finally {
        yield put(hideLoading())
    }
}

function* watchRemoveItemAction({ payload }) {
    try {
        yield put(showLoading())
        const res = yield call(removeBook, payload.data)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(removeCartSuccess(payload.data))
        } else {
            yield put(removeCartFailed(data.message))
        }
    } catch (error) {
        var message = _get(error, 'response.data.message', {});
        if (typeof message === 'object')
            message = MSG_ERROR_OCCUR
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