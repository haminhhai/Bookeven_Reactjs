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
    getListAddressSuccess, getListAddressFailed,
    createNewAddressSuccess, createNewAddressFailed,
    updateAddressSuccess, updateAddressFailed,
    deleteAddressSuccess, deleteAddressFailed,
    fetchListInvoiceSuccess, fetchListInvoiceFailed,
    createInvoiceSuccess, createInvoiceFailed
} from '../actions/account'
import { getListAddress, createNewAddress, updateAddress, deleteAddress, fetchListInvoices, createInvoice } from '../apis/account'
import { toastSuccess } from '../utils/Utils'
import * as msg from '../const/message'
import { STATUS_CODE } from '../const/config'
import moment from 'moment'

function* watchGetAddressAction() {
    while (true) {
        yield take(types.GET_LIST_ADDRESS)
        const res = yield call(getListAddress)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(getListAddressSuccess(data))
        } else {
            yield put(getListAddressFailed(data))
        }
    }
}

function* watchCreateAddressAction({ payload }) {
    const res = yield call(createNewAddress, payload.data)
    const { status, data } = res
    if (status === STATUS_CODE.CREATED) {
        yield put(createNewAddressSuccess(data))
        toastSuccess(msg.MSG_CREATED_ADDRESS_SUCCESS)
    }
    else yield put(createNewAddressFailed(data))
}

function* watchUpdateAddressAction({ payload }) {
    const address = payload.data
    const res = yield call(updateAddress, address)
    const { status, data } = res
    if (status === STATUS_CODE.SUCCESS) {
        yield put(updateAddressSuccess(data))
        toastSuccess(msg.MSG_UPDATE_ADDRESS_SUCCESS)
    }
    else yield put(updateAddressFailed(data))


}

function* watchDeleteAddressAction({ payload }) {
    const { id } = payload
    const res = yield call(deleteAddress, id)
    const { status, data } = res
    if (status === STATUS_CODE.SUCCESS) {
        yield put(deleteAddressSuccess(id))
        toastSuccess(msg.MSG_DELETE_ADDRESS_SUCCESS)
    } else {
        yield put(deleteAddressFailed(data))
    }
}

function* watchFetchListInvoices() {
    while(true)
    {
        yield take(types.FETCH_LIST_INVOICE)
        const res = yield call(fetchListInvoices)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchListInvoiceSuccess(data))
        } else {
            yield put(fetchListInvoiceFailed(data))
        }
    }
}

function* watchCreateInvoice({ payload }) {
    var time = new Date()
    const body = {
        idAddress: payload.id,
        listBooks: payload.data,
        status: 1,
        createAt: moment.unix(time / 1000000)._i,
        endTime: '-'
    }
    const res = yield call(createInvoice, body)
    const { status, data } = res
    if( status === STATUS_CODE.CREATED) {
        yield put(createInvoiceSuccess(data))
        toastSuccess(msg.MST_CREATE_INVOICE_SUCCESS)
    }
    else yield put(createInvoiceFailed(data))
}

function* accountSaga() {
    yield fork(watchGetAddressAction)
    yield fork(watchFetchListInvoices)
    yield takeEvery(types.CREATE_NEW_ADDRESS, watchCreateAddressAction)
    yield takeEvery(types.CREATE_INVOICE, watchCreateInvoice)
    yield takeLatest(types.UPDATE_ADDRESS, watchUpdateAddressAction)
    yield takeLatest(types.DELETE_ADDRESS, watchDeleteAddressAction)
}

export default accountSaga