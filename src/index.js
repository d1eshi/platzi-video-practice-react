// basic render react component
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { moviesReducer } from 'reduxs/reducers/moviesReducer'

import App from './App'

// const reducer = combineReducers({ moviesReducer, favoriteReducer })
const store = createStore(moviesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
