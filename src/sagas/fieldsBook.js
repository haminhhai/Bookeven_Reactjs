import { fork, take, call, put } from 'redux-saga/effects'
import * as types from '../const/actionType'
import { fetchListFieldsbookSuccess, fetchListFieldsbookFailed } from '../actions/fieldsBook'
import { getListFieldsbook } from '../apis/fieldsBook'

import { STATUS_CODE } from '../const/config'

/**
 * First: fetch list fieldsBook
 * Second: Call API
 * Third: check status code
 * success -> ...
 * failed -> ...
 * Fourth: turn off loading
 * Fifth: do next task
 */

function* watchFetchFieldsbookAction() {
    while (true) {
        yield take(types.FETCH_LIST_FIELDSBOOK)
        const res = yield call(getListFieldsbook)
        const { status, data } = res
        if (status === STATUS_CODE.success) {
            yield put(fetchListFieldsbookSuccess(data))
        } else {
            yield put(fetchListFieldsbookFailed(data))
        }
    }
}

function* fieldsbookSaga() {
    yield fork(watchFetchFieldsbookAction)
}

export default fieldsbookSaga