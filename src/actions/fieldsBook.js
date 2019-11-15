import * as types from '../const/actionType'

export const fetchListFieldsbook = () => {
    return {
        type: types.FETCH_LIST_FIELDSBOOK 
    }
}

export const fetchListFieldsbookSuccess = data => {
    return {
        type: types.FETCH_LIST_FIELDSBOOK_SUCCESS,
        payload: {
            data
        }
    }
}

export const fetchListFieldsbookFailed = error => {
    return {
        type: types.FETCH_LIST_FIELDSBOOK_FAILED,
        payload: {
            error
        }
    }
}