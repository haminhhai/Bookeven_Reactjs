import { fork, all } from 'redux-saga/effects'

import bookSaga from './book'
import cartSaga from './cart'
import accountSaga from './account'


function* rootSaga() {
    yield all([
        yield fork(bookSaga),
        yield fork(accountSaga),
        yield fork(cartSaga),
    ])
}

export default rootSaga