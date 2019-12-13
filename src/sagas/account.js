import {
    call,
    fork,
    put,
    take,
    takeLatest,
    takeEvery,
} from 'redux-saga/effects';
import _get from 'lodash/get';
import * as types from '../const/actionType'
import { hideLoading, showLoading } from '../actions/ui';
import {
    getListAddressSuccess, getListAddressFailed,
    createNewAddressSuccess, createNewAddressFailed,
    updateAddressSuccess, updateAddressFailed,
    deleteAddressSuccess, deleteAddressFailed,
    getUserSuccess, getUserFailed,
    updateUserSuccess, updateUserFailed,
} from '../actions/account'
import { getListAddress, createNewAddress, updateAddress, deleteAddress, getInfo, updateInfo } from '../apis/account'
import { STATUS_CODE } from '../const/config'

function* watchGetAddressAction() {
    while (true) {
        yield take(types.GET_LIST_ADDRESS)
        try {
            yield put(showLoading());
            const res = yield call(getListAddress)
            const { status, data } = res
            if (status === STATUS_CODE.SUCCESS) {
                yield put(getListAddressSuccess(data))
            } else {
                yield put(getListAddressFailed(data))
            }
        } catch (error) {
            const message = _get(error, 'response.data.message', {});
            yield put(getListAddressFailed(message));
        } finally {
            yield put(hideLoading());
        }
    }
}

function* watchCreateAddressAction({ payload }) {
    yield put(showLoading());
    try {
        const res = yield call(createNewAddress, payload.data)
        const { status, data } = res
        if (status === STATUS_CODE.CREATED) {
            yield put(createNewAddressSuccess(data))
        }
        else yield put(createNewAddressFailed(data))
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(createNewAddressFailed(message));
    } finally {
        yield put(hideLoading());
    }
}

function* watchUpdateAddressAction({ payload }) {
    const address = payload.data
    try {
        yield put(showLoading());
        const res = yield call(updateAddress, address)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(updateAddressSuccess(data))
        }
        else yield put(updateAddressFailed(data))
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(updateAddressFailed(message));
    } finally {
        yield put(hideLoading());
    }
}

function* watchDeleteAddressAction({ payload }) {
    const { id } = payload
    try {
        yield put(showLoading());
        const res = yield call(deleteAddress, id)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(deleteAddressSuccess(id))
        } else {
            yield put(deleteAddressFailed(data))
        }
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(deleteAddressFailed(message));
    } finally {
        yield put(hideLoading());
    }
}

function* watchGetUserAction({ payload }) {
    const { id } = payload
    try {
        yield put(showLoading());
        const res = yield call(getInfo, id)
        console.log(res)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(getUserSuccess(data))
        } else {
            yield put(getUserFailed(data))
        }
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        console.log(message)
        yield put(getUserFailed(message));
    } finally {
        yield put(hideLoading());
    }
}

function* watchUpdateUserAction({ payload }) {
    try {
        yield put(showLoading());
        const res = yield call(updateInfo, payload.data)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(updateUserSuccess(data))
        } else {
            yield put(updateUserFailed(data))
        }
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(updateUserFailed(message));
    } finally {
        yield put(hideLoading());
    }
}

function* accountSaga() {
    yield fork(watchGetAddressAction)
    yield takeEvery(types.CREATE_NEW_ADDRESS, watchCreateAddressAction)
    yield takeLatest(types.UPDATE_ADDRESS, watchUpdateAddressAction)
    yield takeLatest(types.DELETE_ADDRESS, watchDeleteAddressAction)
    yield takeLatest(types.GET_USER, watchGetUserAction)
    yield takeLatest(types.UPDATE_USER, watchUpdateUserAction)
}

export default accountSaga