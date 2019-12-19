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
    changePasswordSuccess, changePasswordFailed,
    getListAddress as getListAddress2
} from '../actions/account'
import { getListAddress, createNewAddress, updateAddress, deleteAddress, getInfo, updateInfo, changePassword } from '../apis/account'
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
                yield put(getListAddressFailed(data.message))
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
    try {
        yield put(showLoading());
        const res = yield call(createNewAddress, payload.data)
        const { status, data } = res
        if (status === STATUS_CODE.CREATED) {
            yield put(createNewAddressSuccess(data))
            yield put(getListAddress2())
        }
        else yield put(createNewAddressFailed(data.message))
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
            yield put(updateAddressSuccess(address))
        }
        else yield put(updateAddressFailed(data.message))
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(updateAddressFailed(message));
    } finally {
        yield put(hideLoading());
    }
}

function* watchDeleteAddressAction({ payload }) {
    try {
        yield put(showLoading());
        const res = yield call(deleteAddress, payload.data)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(deleteAddressSuccess(payload.data))
            getListAddress()
        } else {
            yield put(deleteAddressFailed(data.message))
        }
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(deleteAddressFailed(message));
    } finally {
        yield put(hideLoading());
    }
}

function* watchGetUserAction() {
    try {
        yield put(showLoading());
        const res = yield call(getInfo)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(getUserSuccess(data))
        } else {
            yield put(getUserFailed(data.message))
        }
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
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
            yield put(updateUserSuccess(payload.data))
        } else {
            yield put(updateUserFailed(data.message))
        }
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(updateUserFailed(message));
    } finally {
        yield put(hideLoading());
    }
}

function* watchChangePasswordAction({ payload }) {
    try {
        yield put(showLoading());
        const res = yield call(changePassword, payload.data)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(changePasswordSuccess(data))
        } else {
            yield put(changePasswordFailed(data.message))
        }
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(changePasswordFailed(message));
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
    yield takeLatest(types.CHANGE_PASSWORD, watchChangePasswordAction)
}

export default accountSaga