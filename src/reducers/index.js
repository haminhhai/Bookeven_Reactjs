import { combineReducers} from 'redux'
import books from './books'
import cart from './cart'
import ui from './ui'
import account from './account'

const rootReducer = combineReducers({
    books, //books: books
    cart, //cart: cart
    ui, //ui: ui
    account, //account: account
})

export default rootReducer