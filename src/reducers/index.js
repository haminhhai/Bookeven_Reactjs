import { combineReducers } from 'redux'
import books from './books'
import cart from './cart'
import ui from './ui'
import account from './account'
import orders from './order'
import auth from './auth'
import { connectRouter } from 'connected-react-router';

const rootReducer = history =>
    combineReducers({
        books,
        auth,
        cart,
        ui,
        account,
        orders,
        router: connectRouter(history)
    })

export default rootReducer