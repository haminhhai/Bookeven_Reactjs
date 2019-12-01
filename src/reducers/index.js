import { combineReducers} from 'redux'
import books from './books'
import cart from './cart'
import ui from './ui'
import account from './account'
import orders from './order'

const rootReducer = combineReducers({
    books,
    cart, 
    ui, 
    account, 
    orders,
})

export default rootReducer