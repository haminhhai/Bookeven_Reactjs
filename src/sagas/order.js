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
import {
    fetchAllListOrdersSuccess, fetchAllListOrdersFailed,
    fetchListOrdersByIdSuccess, fetchListOrdersByIdFailed,
    filterOrderSuccess, filterOrderFailed,
    updateOrderSuccess, updateOrderFailed,
    createOrderSuccess, createOrderFailed
} from '../actions/order'
import { fetchAllListOrders, fetchListOrdersById, createOrder, filterOrder, updateOrder } from '../apis/order'
import { toastSuccess } from '../utils/Utils'
import * as msg from '../const/message'
import { STATUS_CODE } from '../const/config'
import moment from 'moment'

function* watchfetchAllListOrders() {
    while (true) {
        yield take(types.FETCH_ALL_LIST_ORDER)
        const res = yield call(fetchAllListOrders)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchAllListOrdersSuccess(data))
        } else {
            yield put(fetchAllListOrdersFailed(data))
        }
    }
}

function* watchfetchListOrdersById({ payload }) {
    const { id } = payload
    const res = yield call(fetchListOrdersById, id)
    const { status, data } = res
    if (status === STATUS_CODE.SUCCESS) {
        yield put(fetchListOrdersByIdSuccess(data))
    } else {
        yield put(fetchListOrdersByIdFailed(data))
    }
}

function* watchFilterOrder({ payload }) {
    // const { id } = payload
    // const res = yield call(fetchListOrdersById, id)
    // console.log(res)
    // const { status, data } = res
    // if (status === STATUS_CODE.SUCCESS) {
    //     yield put(fetchListOrdersByIdSuccess(data))
    // } else {
    //     yield put(fetchListOrdersByIdFailed(data))
    // }
}

function* watchCreateOrder({ payload }) {
    var time = new Date()
    const body = {
        idAddress: payload.id,
        listBooks: payload.data,
        status: 1,
        createAt: moment(time).unix(),
        endTime: '-'
    }
    const res = yield call(createOrder, body)
    const { status, data } = res
    if (status === STATUS_CODE.CREATED) {
        yield put(createOrderSuccess(data))
        toastSuccess(msg.MSG_CREATE_ORDER_SUCCESS)
    }
    else yield put(createOrderFailed(data))
}

function* watchUpdateOrder({ payload }) {
    const res = yield call(updateOrder, payload.data)
    const { status, data } = res
    if (status === STATUS_CODE.SUCCESS) {
        toastSuccess(msg.MSG_UPDATE_ORDER_SUCCESS)
        yield put(updateOrderSuccess(data))
    }
    else yield put(updateOrderFailed(data))
}

function* orderSaga() {
    yield takeEvery(types.FETCH_LIST_ORDER_BY_ID, watchfetchListOrdersById)
    yield fork(watchfetchAllListOrders)
    yield takeEvery(types.CREATE_ORDER, watchCreateOrder)
    yield takeLatest(types.FILTER_ORDER, watchFilterOrder)
    yield takeLatest(types.UPDATE_ORDER, watchUpdateOrder)
}

export default orderSaga