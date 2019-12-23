import _get from 'lodash/get';
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import { hideLoading, showLoading } from '../actions/ui';
import { STATUS_CODE } from '../const/config';
import {
    loginFailed,
    loginSuccess,
    signupFailed,
    signupSuccess,
    signupManagerFailed,
    signupManagerSuccess,
    logoutSuccess,
    logoutFailed,
    login as onLogin
} from '../actions/auth';
import {fetchCart} from '../actions/cart'
import { closeModal } from '../actions/ui'
import { login, signup, logout, signup_manager } from '../apis/auth';
import * as authTypes from '../const/actionType';
import axiosService from '../utils/axiosService';
import { getUser, deleteInfo } from '../actions/account';

import { MSG_ERROR_OCCUR } from '../const/message'
function* processSignup({ payload }) {
    const { email, password, phone, fullname } = payload;
    try {
        yield put(showLoading());
        const resp = yield call(signup, {
            email,
            password,
            fullname,
            phone
        });
        const { data, status } = resp;
        if (status === STATUS_CODE.CREATED) {
            yield put(signupSuccess(data))
            yield delay(1000)
            yield put(onLogin(email, password))
            yield put(closeModal())
        } else {
            yield put(signupFailed(data.message));
        }
    } catch (error) {
        var message = _get(error, 'response.data.message', {});
        if (typeof message === 'object')
            message = MSG_ERROR_OCCUR
        yield put(signupFailed(message));
    } finally {
        yield put(hideLoading());
    }
}

function* processSignupManager({ payload }) {
    const { email, password, phone, fullname } = payload;
    try {
        yield put(showLoading());
        const resp = yield call(signup_manager, {
            email,
            password,
            fullname,
            phone
        });
        const { data, status } = resp;
        if (status === STATUS_CODE.CREATED) {
            yield put(signupManagerSuccess(data));
        } else {
            yield put(signupManagerFailed(data.message));
        }
    } catch (error) {
        var message = _get(error, 'response.data', {});
        if (typeof message === 'object')
            message = MSG_ERROR_OCCUR
        yield put(signupManagerFailed(message));
    } finally {
        yield put(hideLoading());
    }
}

function* processLogin({ payload }) {
    const { email, password } = payload;
    try {
        yield put(showLoading());
        const resp = yield call(login, {
            email,
            password
        });
        const { data, status } = resp;
        if (status === STATUS_CODE.SUCCESS) {
            yield put(loginSuccess(data));
            const { token, email, id, role } = data;
            axiosService.setHeader('authorization', `Bearer ${token}`);
            axiosService.setHeader('email', email);
            axiosService.setHeader('id', parseInt(id));
            localStorage.setItem('TOKEN', token);
            localStorage.setItem('ID', id)
            localStorage.setItem('EMAIL', email)
            yield put(getUser())
            if(role === 1)
                yield put(fetchCart())
            yield put(closeModal())
        } else {
            yield put(loginFailed(data.message));
        }
    } catch (error) {
        var err = _get(error, 'response.data.message', {})
        if (typeof message === 'object')
            err = MSG_ERROR_OCCUR
        yield put(loginFailed(err));
    } finally {
        yield put(hideLoading());
    }
}

function* processLogout({ payload }) {
    const { id } = payload;
    try {
        yield put(showLoading());
        const resp = yield call(logout, { id });
        const { data, status } = resp;
        if (status === STATUS_CODE.SUCCESS) {
            yield put(logoutSuccess(data));
            localStorage.removeItem('ID')
            localStorage.removeItem('TOKEN')
            localStorage.removeItem('EMAIL')
            axiosService.removeHeader('authorization')
            axiosService.removeHeader('email')
            axiosService.removeHeader('id');
            yield put(deleteInfo())
        } else {
            yield put(logoutFailed(data.message));
        }
    } catch (error) {
        var err = _get(error, 'response.data.message', {});
        if (typeof message === 'object')
            err = MSG_ERROR_OCCUR
        yield put(loginFailed(err));
    } finally {
        yield put(hideLoading());
    }
}

function* authSaga() {
    yield takeLatest(authTypes.SIGN_UP, processSignup);
    yield takeLatest(authTypes.SIGN_UP_MANAGER, processSignupManager);
    yield takeLatest(authTypes.LOGIN, processLogin);
    yield takeLatest(authTypes.LOGOUT, processLogout);
}

export default authSaga;
