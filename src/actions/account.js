    import * as types from '../const/actionType'

export const getListAddress = () => {
    return {
        type: types.GET_LIST_ADDRESS
    }
}

export const getListAddressSuccess = data => {
    return {
        type: types.GET_LIST_ADDRESS_SUCCESS,
        payload: {
            data
        }
    }
}

export const getListAddressFailed = error => {
    return {
        type: types.GET_LIST_ADDRESS_FAILED,
        payload: {
            error
        }
    }
}

export const createNewAddress = data => {
    return {
        type: types.CREATE_NEW_ADDRESS,
        payload: {
            data
        }
    }
}

export const createNewAddressSuccess = data => {
    return {
        type: types.CREATE_NEW_ADDRESS_SUCCESS,
        payload: {
            data
        }
    }
}

export const createNewAddressFailed = error => {
    return {
        type: types.CREATE_NEW_ADDRESS_FAILED,
        payload: {
            error
        }
    }
}

export const updateAddress = data => {
    return {
        type: types.UPDATE_ADDRESS,
        payload: {
            data
        }
    }
}

export const updateAddressSuccess = data => {
    return {
        type: types.UPDATE_ADDRESS_SUCCESS,
        payload: {
            data
        }
    }
}

export const updateAddressFailed = error => {
    return {
        type: types.UPDATE_ADDRESS_FAILED,
        payload: {
            error
        }
    }
}

export const deleteAddress = id => {
    return {
        type: types.DELETE_ADDRESS,
        payload: {
            id
        }
    }
}

export const deleteAddressSuccess = id => {
    return {
        type: types.DELETE_ADDRESS_SUCCESS,
        payload: {
            id
        }
    }
}

export const deleteAddressFailed = error => {
    return {
        type: types.DELETE_ADDRESS_FAILED,
        payload: {
            error
        }
    }
}

export const getUser = id => ({
    type: types.GET_USER,
    payload: {
        id
    }
});

export const getUserSuccess = data => ({
    type: types.GET_USER_SUCCESS,
    payload: {
        data
    }
});

export const getUserFailed = error => ({
    type: types.GET_USER_FAILED,
    payload: {
        error
    }
});

export const updateUser = data => ({
    type: types.UPDATE_USER,
    payload: {
        data
    }
});

export const updateUserSuccess = data => ({
    type: types.UPDATE_USER_SUCCESS,
    payload: {
        data
    }
});

export const updateUserFailed = error => ({
    type: types.UPDATE_USER_FAILED,
    payload: {
        error
    }
});

export const deleteInfo = () => ({
    type: types.DELETE_INFO,
});
