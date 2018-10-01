// Imports
import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

// App Imports
import common from '../components/common/api/state'
import * as thoughts from '../components/thoughts/api/state'
import * as users from '../components/users/api/state'
import * as articles from '../components/articles/api/state'

// Root Reducer
const rootReducer = combineReducers({
  common,
  ...thoughts,
  ...users,
  ...articles
})

// Store
export const store = createStore(rootReducer, applyMiddleware(thunk))
