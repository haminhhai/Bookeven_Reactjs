import {
    call,
    fork,
    put,
    take,
    delay,
    takeLatest,
    select,
    takeEvery
} from 'redux-saga/effects';
import * as types from '../const/actionType'
import { fetchListBookSuccess, fetchListBookFailed, filterBooksSuccess, fetchListFieldsbookSuccess, fetchListFieldsbookFailed } from '../actions/book'
import { getListBooks, getListFieldsbook } from '../apis/book'

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
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchListBookSuccess(data))

        } else {
            yield put(fetchListBookFailed(data))
        }
    }
}

function* filterBookAction({ payload }) {
    yield delay(500)
    const { keyword } = payload
    const list = yield select(state => state.books.listBooks)
    const filterBooks = list.filter(book =>
        book.title
            .trim()
            .toLowerCase()
            .includes(keyword.trim().toLowerCase()))
    yield put(filterBooksSuccess(filterBooks))
}

function* watchFetchFieldsbookAction() {
    while (true) {
        yield take(types.FETCH_LIST_FIELDSBOOK)
        const res = yield call(getListFieldsbook)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchListFieldsbookSuccess(data))
        } else {
            yield put(fetchListFieldsbookFailed(data))
        }
    }
}

function* bookSaga() {
    yield fork(watchFetchListBookAction)
    yield fork(watchFetchFieldsbookAction)
    yield takeLatest(types.FILTER_BOOKS, filterBookAction)
}

export default bookSaga