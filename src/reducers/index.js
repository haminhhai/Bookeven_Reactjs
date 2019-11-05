import { combineReducers} from 'redux'
import toggleModal from './toggleModal'
import detailBook from './detailBook'
import products from './products'
import cart from './cart'
import message from './message'

const appReducer = combineReducers({
    toggleModal, //openModal: openModal
    detailBook, //detailBook: detailBook
    products, //products: products
    cart, //cart: cart
    message, //message: message
})

export default appReducer