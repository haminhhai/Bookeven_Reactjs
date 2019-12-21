import {
    call,
    fork,
    put,
    take,
    takeLatest,
    takeEvery,
    select,
    delay
} from 'redux-saga/effects';
import * as types from '../const/actionType'
import { hideLoading, showLoading } from '../actions/ui';
import _get from 'lodash/get';
import {
    fetchAllListOrdersSuccess, fetchAllListOrdersFailed,
    fetchDetailOrderSuccess, fetchDetailOrderFailed,
    filterOrderSuccess, filterOrderFailed,
    updateOrderSuccess, updateOrderFailed,
    createOrderSuccess, createOrderFailed,
    
} from '../actions/order'
import { fetchCart } from '../actions/cart'
import { fetchAllListOrders, fetchDetailOrder, createOrder, filterOrder, updateOrder } from '../apis/order'
import { toastSuccess } from '../utils/Utils'
import * as msg from '../const/message'
import { STATUS_CODE } from '../const/config'

import { MSG_ERROR_OCCUR } from '../const/message'
function* watchfetchAllListOrders() {
    while (true) {
        yield take(types.FETCH_ALL_LIST_ORDER)
        try {
            yield put(showLoading())
            const res = yield call(fetchAllListOrders)
            const { status, data } = res
            console.log(res)
            if (status === STATUS_CODE.SUCCESS) {
                yield put(fetchAllListOrdersSuccess(data))
            } else {
                yield put(fetchAllListOrdersFailed(data.message))
            }
        } catch (error) {
            var message = _get(error, 'response.data.message', {});
            if (typeof message === 'object')
                message = MSG_ERROR_OCCUR
            yield put(fetchAllListOrdersFailed(message));
        } finally {
            yield put(hideLoading())
        }
    }
}

function* watchfetchDetailOrder({ payload }) {
    try {
        console.log(payload.data)
        yield put(showLoading())
        const res = yield call(fetchDetailOrder, payload.data)
        const { status, data } = res
        console.log(res)
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchDetailOrderSuccess(data))
        } else {
            yield put(fetchDetailOrderFailed(data.message))
        }
    } catch (error) {
        var message = _get(error, 'response.data.message', {});
        if (typeof message === 'object')
            message = MSG_ERROR_OCCUR
        yield put(fetchDetailOrderFailed(message));
    } finally {
        yield put(hideLoading())
    }
}

function* watchFilterOrder({ payload }) {
    try {
        yield put(showLoading())
        const res = yield call(filterOrder, payload.data)
        const { status, data } = res
        console.log(res)
        if (status === STATUS_CODE.SUCCESS) {
            yield put(filterOrderSuccess(data))
        }
        else yield put(filterOrderFailed(data.message))
    } catch (error) {
        var message = _get(error, 'response.data.message', {});
        if (typeof message === 'object')
            message = MSG_ERROR_OCCUR
        yield put(filterOrderFailed(message));
    } finally {
        yield put(hideLoading())
    }
}

function* watchCreateOrder({ payload }) {
    try {
        yield put(showLoading())
        const res = yield call(createOrder, payload.data)
        const { status, data } = res
        console.log(res)
        if (status === STATUS_CODE.SUCCESS) {
            yield put(createOrderSuccess(data))
        }
        else yield put(createOrderFailed(data.message))
    } catch (error) {
        var message = _get(error, 'response.data.message', {});
        if (typeof message === 'object')
            message = MSG_ERROR_OCCUR
        yield put(createOrderFailed(message));
    } finally {
        yield put(hideLoading())
    }
}

function* watchUpdateOrder({ payload }) {
    try {
        yield put(showLoading())
        const res = yield call(updateOrder, payload.data)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            toastSuccess(msg.MSG_UPDATE_ORDER_SUCCESS)
            yield put(updateOrderSuccess(data))
        }
        else yield put(updateOrderFailed(data.message))
    } catch (error) {
        var message = _get(error, 'response.data.message', {});
        if (typeof message === 'object')
            message = MSG_ERROR_OCCUR
        yield put(updateOrderFailed(message));
    } finally {
        yield put(hideLoading())
    }
}

function* orderSaga() {
    yield takeEvery(types.FETCH_DETAIL_ORDER, watchfetchDetailOrder)
    yield fork(watchfetchAllListOrders)
    yield takeEvery(types.CREATE_ORDER, watchCreateOrder)
    yield takeLatest(types.FILTER_ORDER, watchFilterOrder)
    yield takeLatest(types.UPDATE_ORDER, watchUpdateOrder)
}

export default orderSaga