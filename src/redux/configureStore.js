import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from '../reducers/index'
import thunk from 'redux-thunk'
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router';
import rootSaga from '../sagas/index'


const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false
      })
    : compose;

const sagaMiddleware = createSagaMiddleware()
export const history = createBrowserHistory({
  basename: '#/'
});

const configureStore = () => {
    const middleWares = [thunk, sagaMiddleware, routerMiddleware(history)]

    const enhancers = [applyMiddleware(...middleWares)]

    const store = createStore(
        rootReducer(history),
        composeEnhancers(...enhancers)
    )
    sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore