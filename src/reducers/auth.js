import { toastError, toastSuccess } from '../utils/Utils';
import * as types from '../const/actionType';

const id = localStorage.getItem('ID')
var bool = id ? true : false
const initialState = {
    authen: bool,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_UP_SUCCESS: {
            toastSuccess('Đăng ký thành công!');
            return {
                ...state
            };
        }
        case types.SIGN_UP_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state
            };
        }
        case types.SIGN_UP_MANAGER_SUCCESS: {
            toastSuccess('Đăng ký tài khoản quản lý thành công!');
            return {
                ...state
            };
        }
        case types.SIGN_UP_MANAGER_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state
            };
        }
        case types.LOGIN_SUCCESS: {
            toastSuccess('Chào mừng bạn quay lại với Bookeven!');
            return {
                authen: true
            };
        }
        case types.LOGIN_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state
            };
        }
        case types.LOGOUT_SUCCESS: {
            toastSuccess('Đăng xuất thành công');
            return { authen: false };
        }
        case types.LOGOUT_FAILED: {
            const { error } = action.payload;
            toastError(error);
            return {
                ...state
            };
        }
        default:
            return state;
    }
};

export default reducer;
