import { combineReducers} from 'redux'
import toggleModal from './toggleModal'
import detailBook from './detailBook'
import products from './products'
import cart from './cart'

const appReducer = combineReducers({
    toggleModal, //openModal: openModal
    detailBook, //detailBook: detailBook
    products, //products: products
    cart, //cart: cart
})

export default appReducer