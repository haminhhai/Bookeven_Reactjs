import { fork, all } from 'redux-saga/effects'

import bookSaga from './book'
import cartSaga from './cart'


function* rootSaga() {
    yield all([
        yield fork(bookSaga),
        yield fork(cartSaga)
    ])
}

export default rootSaga