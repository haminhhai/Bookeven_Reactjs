import { combineReducers} from 'redux'
import books from './books'
import cart from './cart'
import ui from './ui'

const rootReducer = combineReducers({
    books, //books: books
    cart, //cart: cart
    ui, //ui: ui
})

export default rootReducer