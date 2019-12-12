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
import {
    fetchListBookSuccess, fetchListBookFailed,
    filterBooksSingleSuccess, filterBooksMultiSuccess,
    fetchListFieldsbookSuccess, fetchListFieldsbookFailed,
    getDetailBookSuccess, getDetailBookFailed,
    updateListBookSuccess, updateListBookFailed,
    getListCommentsSuccess, getListCommentsFailed,
    addCommentSuccess, addCommentFailed
} from '../actions/book'
import { getListBooks, getListFieldsbook, updateListBooks, getListComments, addComment } from '../apis/book'

import { STATUS_CODE } from '../const/config'
import { toastSuccess } from '../utils/Utils'
import * as msg from '../const/message'

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

function* watchGetBookDetailAction({payload}) {
    const { data } = payload
    const list = yield select(state => state.books.listBooks)
    const filterBook = list.filter(item => item.id === data)
    yield put(getDetailBookSuccess(filterBook[0]))
}


function* watchGetListComments({payload}) {
    const { ISBN } = payload
    const res = yield call(getListComments, ISBN)
    const { status, data } = res
    if(status === STATUS_CODE.SUCCESS)
        yield put(getListCommentsSuccess(data))
    else yield put(getListCommentsFailed(data))
}

function* filterBookBySingleTypeAction({ payload }) {
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
    const { data } = payload
    const { min, max } = data.price
    const list = yield select(state => state.books.listBooks)
    var filterBooks = list.filter(item =>
        item.realPrice >= min
        && item.realPrice <= max
        && item.rate === data.rate
        && (data.topic !== '' ? item.topic === data.topic : item.topic > 0)
    )
    yield put(filterBooksMultiSuccess(filterBooks))
}

function* updateBookAction({ payload }) {
    const res = yield call(updateListBooks, payload.data)
    const { status, data } = res
    if(status === STATUS_CODE.SUCCESS) {
        yield put(updateListBookSuccess(data))
        toastSuccess(msg.MSG_UPDATE_BOOK_SUCCESS)
        yield delay(1000)
        window.location.reload()
    }
    else yield put(updateListBookFailed(data))

}

function* addCommentAction({ payload }) {
    const res = yield call(addComment, payload.data)
    const { status, data } = res
    if(status === STATUS_CODE.CREATED) {
        yield put(addCommentSuccess(data))
        toastSuccess(msg.MSG_ADD_COMMENT_SUCCESS)
    }
    else yield put(addCommentFailed(data))

}


function* bookSaga() {
    yield fork(watchFetchListBookAction)
    yield fork(watchFetchFieldsbookAction)
    yield takeEvery(types.GET_DETAIL_BOOK, watchGetBookDetailAction)
    yield takeLatest(types.FILTER_BOOKS_SINGLE, filterBookBySingleTypeAction)
    yield takeLatest(types.FILTER_BOOKS_MULTI, filterBookByMultiTypeAction)
    yield takeLatest(types.GET_LIST_COMMENTS, watchGetListComments)
    yield takeEvery(types.ADD_COMMENT, addCommentAction)
    yield takeLatest(types.UPDATE_BOOK, updateBookAction)
}

export default bookSaga