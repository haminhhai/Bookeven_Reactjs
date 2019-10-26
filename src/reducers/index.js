import { combineReducers} from 'redux'
import toggleModal from './toggleModal'

const myReducer = combineReducers({
    toggleModal, //openModal: openModal
})

export default myReducer