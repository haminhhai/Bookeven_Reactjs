import {
    call,
    fork,
    put,
    take,
    takeLatest,
    select,
    takeEvery,
    delay
} from 'redux-saga/effects';
import { hideLoading, showLoading } from '../actions/ui';
import _get from 'lodash/get';
import * as types from '../const/actionType'
import {
    fetchListBookSuccess, fetchListBookFailed,
    filterBooksSingleSuccess, filterBooksSingleFailed,
    filterBooksMultiSuccess, filterBooksMultiFailed,
    fetchListFieldsbookSuccess, fetchListFieldsbookFailed,
    getDetailBookSuccess, getDetailBookFailed,
    updateListBookSuccess, updateListBookFailed,
    getListCommentsSuccess, getListCommentsFailed,
    addCommentSuccess, addCommentFailed,
    getBooksByBFIDSuccess, getBooksByBFIDFailed,
    getListBestSellerSuccess, getListBestSellerFailed,
    getListBestSalesSuccess, getListBestSalesFailed,
    getListBestRateSuccess, getListBestRateFailed,
    getListBestNewestSuccess, getListBestNewestFailed
} from '../actions/book'
import {
    getListBooks, getListFieldsbook, updateListBooks, getListComments, addComment,
    getListBestSeller, getBooksByBFID, getListNewest, getListBestRate, getListBestSales, getDetailBook
} from '../apis/book'

import { STATUS_CODE } from '../const/config'
import {MSG_ERROR_OCCUR} from '../const/message'
function* watchFetchListBookAction() {
    while (true) {
        yield take(types.FETCH_LIST_BOOK)
        try {
            yield put(showLoading())
            const res = yield call(getListBooks)
            const { status, data } = res
            if (status === STATUS_CODE.SUCCESS) {
                yield put(fetchListBookSuccess(data))

            } else {
                yield put(fetchListBookFailed(data.message))
            }
        } catch (error) {
            const message = _get(error, 'response.data.message', {});
            yield put(fetchListBookFailed(message));
        } finally {
            yield put(hideLoading())
        }
    }
}

function* watchGetListByBFIdTypeAction({ payload }) {
    try {
        yield put(showLoading())
        const res = yield call(getBooksByBFID, payload.data)
        const { status, data } = res
        const bookfield = yield select(state => state.books.fieldsBook)
        const name = bookfield.filter(item => item.id === payload.data.bookField_id)[0].name
        if (status === STATUS_CODE.SUCCESS) {
            const body = {
                ...data,
                bookfield: name,
                page: payload.data.page,
                amount: payload.data.amount
            }
            yield put(getBooksByBFIDSuccess(body))

        } else {
            yield put(getBooksByBFIDFailed(data.message))
        }
    } catch (error) {
        const message = _get(error, 'response.data.message', {})
        yield put(getBooksByBFIDFailed(message));
    } finally {
        yield delay(500)
        yield put(hideLoading())
    }
}

function* watchGetBestSellerAction({ payload }) {
    try {
        yield put(showLoading())
        const res = yield call(getListBestSeller, payload.data)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(getListBestSellerSuccess(data))

        } else {
            yield put(getListBestSellerFailed(data.message))
        }
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(getListBestSellerFailed(message));
    } finally {
        yield put(hideLoading())
    }
}

function* watchGetBestSalesAction({ payload }) {
    try {
        yield put(showLoading())
        const res = yield call(getListBestSales, payload.data)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(getListBestSalesSuccess(data))

        } else {
            yield put(getListBestSalesFailed(data.message))
        }
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(getListBestSalesFailed(message));
    } finally {
        yield put(hideLoading())
    }
}

function* watchGetListNewest({ payload }) {
    try {
        yield put(showLoading())
        const res = yield call(getListNewest, payload.data)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(getListBestNewestSuccess(data))

        } else {
            yield put(getListBestNewestFailed(data.message))
        }
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(getListBestNewestFailed(message));
    } finally {
        yield put(hideLoading())
    }
}

function* watchGetBestRateAction({ payload }) {
    try {
        yield put(showLoading())
        const res = yield call(getListBestRate, payload.data)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(getListBestRateSuccess(data))

        } else {
            yield put(getListBestRateFailed(data.message))
        }
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(getListBestRateFailed(message));
    } finally {
        yield put(hideLoading())
    }
}

function* watchFetchFieldsbookAction() {
    while (true) {
        yield take(types.FETCH_LIST_FIELDSBOOK)
        try {
            const res = yield call(getListFieldsbook)
            const { status, data } = res
            if (status === STATUS_CODE.SUCCESS) {
                yield put(fetchListFieldsbookSuccess(data))
            } else {
                yield put(fetchListFieldsbookFailed(data.message))
            }
        } catch (error) {
            const message = _get(error, 'response.data.message', {});
            yield put(fetchListBookFailed(message));
        }
    }
}

function* watchGetBookDetailAction({ payload }) {
    try {
        yield put(showLoading())
        const res = yield call(getDetailBook, payload.data)
        const { status, data } = res
        console.log(res)
        const bookfield = yield select(state => state.books.fieldsBook)
        const name = bookfield.filter(item => item.id === payload.data.id)[0].name
        if (status === STATUS_CODE.SUCCESS){
            var body = {
                ...data,
                bookfield: name
            }
            yield put(getDetailBookSuccess(body))
        }
        else
            yield put(getDetailBookFailed(data.message))
    } catch (error) {
        var message = _get(error, 'response.data.message', {});
        if(typeof message === 'object')
            message = MSG_ERROR_OCCUR
        yield put(getDetailBookFailed(message));
    } finally {
        yield delay(500)
        yield put(hideLoading())
    }
}


function* watchGetListComments({ payload }) {
    const { id } = payload
    try {
        const res = yield call(getListComments, id)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS)
            yield put(getListCommentsSuccess(data))
        else yield put(getListCommentsFailed(data.message))
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(getListCommentsFailed(message));
    }
}

function* filterBookBySingleTypeAction({ payload }) {
    const { data } = payload
    try {
        yield put(showLoading())
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
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(filterBooksSingleFailed(message));
    } finally {
        yield put(hideLoading())
    }
}

function* filterBookByMultiTypeAction({ payload }) {
    const { data } = payload
    const { min, max } = data.price
    try {
        yield put(showLoading())
        const list = yield select(state => state.books.listBooks)
        var filterBooks = list.filter(item =>
            item.price >= min
            && item.price <= max
            && item.rate === data.rate
            && (data.topic !== '' ? item.topic === data.topic : item.topic > 0)
        )
        yield put(filterBooksMultiSuccess(filterBooks))
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(filterBooksMultiFailed(message))
    } finally {
        yield put(hideLoading())
    }
}

function* updateBookAction({ payload }) {
    try {
        yield put(showLoading())
        const res = yield call(updateListBooks, payload.data)
        const { status, data } = res
        if (status === STATUS_CODE.SUCCESS) {
            yield put(updateListBookSuccess(data))
        }
        else yield put(updateListBookFailed(data.message))
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(updateListBookFailed(message))
    } finally {
        yield put(hideLoading())
    }
}

function* addCommentAction({ payload }) {
    try {
        const res = yield call(addComment, payload.data)
        const { status, data } = res
        if (status === STATUS_CODE.CREATED) {
            yield put(addCommentSuccess(data))
        }
        else yield put(addCommentFailed(data.message))
    } catch (error) {
        const message = _get(error, 'response.data.message', {});
        yield put(addCommentFailed(message))
    }
}


function* bookSaga() {
    yield fork(watchFetchListBookAction)
    yield fork(watchFetchFieldsbookAction)
    yield takeEvery(types.GET_DETAIL_BOOK, watchGetBookDetailAction)
    yield takeLatest(types.FILTER_BOOKS_SINGLE, filterBookBySingleTypeAction)
    yield takeLatest(types.FILTER_BOOKS_MULTI, filterBookByMultiTypeAction)
    yield takeLatest(types.GET_LIST_COMMENTS, watchGetListComments)
    yield takeLatest(types.GET_LIST_BY_BF_ID, watchGetListByBFIdTypeAction)
    yield takeLatest(types.GET_LIST_BEST_SELLER, watchGetBestSellerAction)
    yield takeLatest(types.GET_LIST_BEST_SALES, watchGetBestSalesAction)
    yield takeLatest(types.GET_LIST_BEST_RATE, watchGetBestRateAction)
    yield takeLatest(types.GET_LIST_NEWEST, watchGetListNewest)
    yield takeEvery(types.ADD_COMMENT, addCommentAction)
    yield takeLatest(types.UPDATE_BOOK, updateBookAction)
}

export default bookSaga