import { fork, all } from 'redux-saga/effects'

import bookSaga from './book'
import fieldsbookSaga from './fieldsBook'
import cartSaga from './cart'


function* rootSaga() {
    yield all([
        yield fork(bookSaga),
        yield fork(fieldsbookSaga),
        yield fork(cartSaga)
    ])
}

export default rootSaga