import { combineReducers} from 'redux'
import toggleModal from './toggleModal'
import detailBook from './detailBook'
import books from './books'
import cart from './cart'
import message from './message'
import fieldsBook from './fieldsBook'
import spinner from './spinner'

const rootReducer = combineReducers({
    toggleModal, //openModal: openModal
    detailBook, //detailBook: detailBook
    books, //books: books
    cart, //cart: cart
    message, //message: message
    fieldsBook, //fieldsBook: fieldsBook
    spinner, //spinner: spinner
})

export default rootReducer