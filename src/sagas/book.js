import {
    call,
    fork,
    put,
    take,
  } from 'redux-saga/effects';
import * as types from '../const/actionType'
import { fetchListBookSuccess, fetchListBookFailed } from '../actions/book'
import { getListBooks } from '../apis/book'

import { STATUS_CODE } from '../const/config'

/**
 * First: fetch list book
 * Second: Call API
 * Third: check status code
 * success -> ...
 * failed -> ...
 * Fourth: turn off loading
 * Fifth: do next task
 */
function* watchFetchListBookAction() {
    while (true) {
        yield take(types.FETCH_LIST_BOOK)
        const res = yield call(getListBooks)
        const { status, data } = res
        if (status === STATUS_CODE.success) {
            yield put(fetchListBookSuccess(data))
        } else {
            yield put(fetchListBookFailed(data))
        }
    }
}

function* bookSaga() {
    yield fork(watchFetchListBookAction)
}

export default bookSaga