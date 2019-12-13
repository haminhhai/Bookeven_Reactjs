import { fork, all } from 'redux-saga/effects'

import bookSaga from './book'
import cartSaga from './cart'
import accountSaga from './account'
import orderSaga from './order'
import authSaga from './auth'

function* rootSaga() {
    yield all([
        yield fork(bookSaga),
        yield fork(authSaga),
        yield fork(accountSaga),
        yield fork(cartSaga),
        yield fork(orderSaga)
    ])
}

export default rootSaga