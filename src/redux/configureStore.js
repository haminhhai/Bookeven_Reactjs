import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const sagaMiddleware = createSagaMiddleware()
const configureStore = () => {
    const middleWares = [thunk, sagaMiddleware]

    const enhancers = [applyMiddleware(...middleWares)]

    const store = createStore(
        rootReducer,
        composeEnhancer(...enhancers)
    )

    sagaMiddleware.run(rootSaga)
    
    return store
}



export default configureStore