import * as types from '../const/actionType'

export const signup = (email, password, fullname, phone) => ({
    type: types.SIGN_UP,
    payload: {
        email,
        password,
        fullname,
        phone
    }
});

export const signupSuccess = data => ({
    type: types.SIGN_UP_SUCCESS,
    payload: {
        data
    }
});

export const signupFailed = error => ({
    type: types.SIGN_UP_FAILED,
    payload: {
        error
    }
});

export const signupManager = (email, password, fullname, phone) => ({
    type: types.SIGN_UP_MANAGER,
    payload: {
        email,
        password,
        fullname,
        phone
    }
});

export const signupManagerSuccess = data => ({
    type: types.SIGN_UP_MANAGER_SUCCESS,
    payload: {
        data
    }
});

export const signupManagerFailed = error => ({
    type: types.SIGN_UP_MANAGER_FAILED,
    payload: {
        error
    }
});

export const login = (email, password) => ({
    type: types.LOGIN,
    payload: {
        email,
        password
    }
});

export const loginSuccess = data => ({
    type: types.LOGIN_SUCCESS,
    payload: {
        data
    }
});

export const loginFailed = error => ({
    type: types.LOGIN_FAILED,
    payload: {
        error
    }
});

export const logout = id => ({
    type: types.LOGOUT,
    payload: {
        id
    }
});

export const logoutSuccess = data => ({
    type: types.LOGOUT_SUCCESS,
    payload: {
        data
    }
});

export const logoutFailed = error => ({
    type: types.LOGOUT_FAILED,
    payload: {
        error
    }
});



