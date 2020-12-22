import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootSaga from './sagas'
import reducer from './reducers'

const initState = {
  abc: ''
}

export type RootState = typeof initState

export default function configureStore() {
  let initialState
  const loadedState = localStorage.getItem('state')

  if (loadedState !== null) {
    initialState = JSON.parse(loadedState)
  } else initialState = initState

  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [sagaMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(middlewareEnhancer)
  )

  sagaMiddleware.run(rootSaga)

  return store
}