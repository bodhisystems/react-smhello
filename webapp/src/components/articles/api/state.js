// Imports

// App Imports
import {
  ARTICLES_GET_LIST_REQUEST,
  ARTICLES_GET_LIST_RESPONSE,
  ARTICLES_GET_LIST_FAILURE,
  ARTICLES_GET_REQUEST,
  ARTICLES_GET_RESPONSE,
  ARTICLES_GET_FAILURE,
} from './actions'

// Thoughts list

// Initial State
const articlesInitialState = {
  isLoading: false,
  error: null,
  list: []
}

// State
export const articles = (state = articlesInitialState, action) => {
  switch (action.type) {
    case ARTICLES_GET_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case ARTICLES_GET_LIST_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        list: action.list
      }

    case ARTICLES_GET_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}


// Single article

// Initial State
const articleInitialState = {
  isLoading: false,
  error: null,
  item: {}
}

// State
export const article = (state = articleInitialState, action) => {
  switch (action.type) {
    case ARTICLES_GET_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
        error: null
      }

    case ARTICLES_GET_RESPONSE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        item: action.item
      }

    case ARTICLES_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }

    default:
      return state
  }
}
