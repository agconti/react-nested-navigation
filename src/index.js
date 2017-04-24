import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { rootChannels, channels, breadcrumbs } from './reducers'
import AppContainer from './containers/App'
import './index.css'


const channelsData = {
  '1': { 'name': 'Animals', children: ['4', '5', '6']}
, '2': { 'name': 'Sports', children: ['7', '8', '9']}
, '3': { 'name': 'Beers', children: ['10', '11', '12']}
, '4': { 'name': 'Bears'}
, '5': { 'name': 'Tigers'}
, '6': { 'name': 'Snakes'}
, '7': { 'name': 'Climbing'}
, '8': { 'name': 'Skating'}
, '9': { 'name': 'Mountianeering'}
, '10': { 'name': 'Stout'}
, '11': { 'name': 'Lager'}
, '12': { 'name': 'Ale'}
}
const rootChannelsData = [
  '1'
, '2'
, '3'
]
const breadcrumbsData = []


// const channelsData = [
//     'Animals'
//   , 'Sports'
//   , 'Beers'
// ]
// const breadcrumbsData = {
//     'Animals': ['Bears', 'Tigers', 'Snakes']
//   , 'Sports': ['Climbing', 'Skating', 'Mountianeering']
//   , 'Beers': ['Stout', 'Lager', 'Ale']
// }

const defaultData = {
  rootChannels: rootChannelsData
, channels: channelsData
, breadcrumbs: breadcrumbsData
}
const store = createStore(
  combineReducers({rootChannels, channels, breadcrumbs})
, defaultData
, window.devToolsExtension && window.devToolsExtension()
)

ReactDOM.render(
  <Provider store={store}>
     <AppContainer />
   </Provider>
, document.getElementById('root')
)
