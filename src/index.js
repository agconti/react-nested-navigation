import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { channels, breadcrumbs } from './reducers'
import App from './App'
import './index.css'

const store = createStore(
  combineReducers({channels, breadcrumbs})
, window.devToolsExtension && window.devToolsExtension()
)

ReactDOM.render(
  <Provider store={store}>
     <App />
   </Provider>
, document.getElementById('root')
)
