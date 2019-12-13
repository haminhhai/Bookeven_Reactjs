import _get from 'lodash/get';
import { call, put, takeLatest } from 'redux-saga/effects';
import { hideLoading, showLoading } from '../actions/ui';
import { STATUS_CODE } from '../const/config';
import {
    loginFailed,
    loginSuccess,
    signupFailed,
    signupSuccess,
    logoutSuccess,
    logoutFailed,
} from '../actions/auth';
import {closeModal} from '../actions/ui'
import { login, signup, logout } from '../apis/auth';
import * as authTypes from '../const/actionType';
import axiosService from '../utils/axiosService';
import {  getUser, deleteInfo } from '../actions/account';

function* processSignup({ payload }) {
    const { email, password, phone, fullname } = payload;
    yield put(showLoading());
    try {
        const resp = yield call(signup, {
            email,
            password,
            fullname,
            phone
        });
        console.log(resp)
        const { data, status } = resp;
        if (status === STATUS_CODE.CREATED) {
            yield put(signupSuccess(data));
            yield put(closeModal())
        } else {
            yield put(signupFailed(data));
        }
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        console.log(message)
        yield put(signupFailed(message));
    } finally {
        yield put(hideLoading());
    }
}

function* processLogin({ payload }) {
    const { email, password } = payload;
    yield put(showLoading());
    try {
        const resp = yield call(login, {
            email,
            password
        });
        const { data, status } = resp;
        if (status === STATUS_CODE.SUCCESS) {
            yield put(loginSuccess(data));

            const { token, email, id } = data;
            axiosService.setHeader('Authorization', `Bearer ${token}`);
            axiosService.setHeader('Email', email);
            localStorage.setItem('TOKEN', token);
            localStorage.setItem('ID', id)
            yield put(getUser(id))
            yield put(closeModal())
        } else {
            yield put(loginFailed(data));
        }
    } catch (error) {
        const err = _get(error, 'response.data.message', {})
        yield put(loginFailed(err));
    } finally {
        yield put(hideLoading());
    }
}

function* processLogout({ payload }) {
    const { id } = payload;
    yield put(showLoading());
    try {
        const resp = yield call(logout, { id });
        console.log(resp)
        const { data, status } = resp;
        if (status === STATUS_CODE.SUCCESS) {
            yield put(logoutSuccess(data));
            localStorage.removeItem('info')
            localStorage.removeItem('ID')
            axiosService.removeHeader('Authorization')
            axiosService.removeHeader('Email')
            yield put(deleteInfo())
        } else {
            yield put(logoutFailed(data));
        }
    } catch (error) {
        const err = _get(error, 'response.data.message', {});
        yield put(loginFailed(err));
    } finally {
        yield put(hideLoading());
    }
}

function* authSaga() {
    yield takeLatest(authTypes.SIGN_UP, processSignup);
    yield takeLatest(authTypes.LOGIN, processLogin);
    yield takeLatest(authTypes.LOGOUT, processLogout);
}

export default authSaga;
