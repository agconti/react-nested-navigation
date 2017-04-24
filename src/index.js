import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { channels, breadcrumbs } from './reducers'
import AppContainer from './containers'
import './index.css'

const channelsData = [
    'Animals'
  , 'Sports'
  , 'Beers'
]
const breadcrumbsData = {
    'Animals': ['Bears', 'Tigers', 'Snakes']
  , 'Sports': ['Climbing', 'Skating', 'Mountianeering']
  , 'Beers': ['Stout', 'Lager', 'Ale']
}

const defaultData = {channels: channelsData, breadcrumbs: breadcrumbsData}
const store = createStore(
  combineReducers({channels, breadcrumbs})
, defaultData
, window.devToolsExtension && window.devToolsExtension()
)

ReactDOM.render(
  <Provider store={store}>
     <AppContainer />
   </Provider>
, document.getElementById('root')
)
