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
import { fetchListBookSuccess, fetchListBookFailed, filterBooksSingleSuccess, filterBooksMultiSuccess, fetchListFieldsbookSuccess, fetchListFieldsbookFailed } from '../actions/book'
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

function* filterBookBySingleTypeAction({ payload }) {
    yield delay(500)
    const { data } = payload
    const list = yield select(state => state.books.listBooks)
    var filterBooks = null
    if (typeof data === 'string') //filter by title
        filterBooks = list.filter(book =>
            book.title
                .trim()
                .toLowerCase()
                .includes(data.trim().toLowerCase()))
    else  //filter by topic
        filterBooks = list.filter(book => book.topic === data)
    yield put(filterBooksSingleSuccess(filterBooks))
}

function* filterBookByMultiTypeAction({ payload }) {
    yield delay(500)
    const { data } = payload
    console.log(data)
    const { min, max } = data.price
    const list = yield select(state => state.books.listBooks)
    var filterBooks = list.filter(item =>
        item.amount >= min 
        && item.amount <= max 
        && item.rate === data.rate
        && (data.topic !== '' ? item.topic === data.topic : item.topic > 0)
    )
    yield put(filterBooksMultiSuccess(filterBooks))
}


function* bookSaga() {
    yield fork(watchFetchListBookAction)
    yield fork(watchFetchFieldsbookAction)
    yield takeLatest(types.FILTER_BOOKS_SINGLE, filterBookBySingleTypeAction)
    yield takeLatest(types.FILTER_BOOKS_MULTI, filterBookByMultiTypeAction)
}

export default bookSaga