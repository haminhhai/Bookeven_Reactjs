import { combineReducers} from 'redux'
import toggleModal from './toggleModal'
import detailBook from './detailBook'

const myReducer = combineReducers({
    toggleModal, //openModal: openModal
    detailBook, //detailBook: detailBook
})

export default myReducer