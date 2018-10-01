// Imports
import axios from 'axios'

// App Imports
import {routesApi} from '../../../setup/routes'
import {queryBuilder} from '../../../setup/helpers'

// Actions Types
export const ARTICLES_GET_LIST_REQUEST = 'ARTICLES/GET_LIST_REQUEST'
export const ARTICLES_GET_LIST_RESPONSE = 'ARTICLES/GET_LIST_RESPONSE'
export const ARTICLES_GET_LIST_FAILURE = 'ARTICLES/GET_LIST_FAILURE'
export const ARTICLES_GET_REQUEST = 'ARTICLES/GET_REQUEST'
export const ARTICLES_GET_RESPONSE = 'ARTICLES/GET_RESPONSE'
export const ARTICLES_GET_FAILURE = 'ARTICLES/GET_FAILURE'

// Actions

// Get list of articles
export function getList(isLoading = true) {
  return dispatch => {
    dispatch({
      type: ARTICLES_GET_LIST_REQUEST,
      isLoading
    })

    return axios.post(routesApi, queryBuilder({
      type: 'query',
      operation: 'articles',
      fields: ['id', 'title', 'subtitle', 'body']
    }))
      .then((response) => {
        dispatch({
          type: ARTICLES_GET_LIST_RESPONSE,
          error: null,
          list: response.data.data.articles
        })
      })
      .catch((error) => {
        dispatch({
          type: ARTICLES_GET_LIST_FAILURE,
          error: error
        })
      })
  }
}

// Get single article
export function get(id, isLoading = true) {
  return dispatch => {
    dispatch({
      type: ARTICLES_GET_REQUEST,
      isLoading
    })

    return axios.post(routesApi, queryBuilder({
      type: 'query',
      operation: 'article',
      data: {id: parseInt(id, 10)},
      fields: ['id', 'title', 'subtitle', 'body']
    }))
      .then((response) => {
        dispatch({
          type: ARTICLES_GET_RESPONSE,
          error: null,
          item: response.data.data.article
        })
      })
      .catch((error) => {
        dispatch({
          type: ARTICLES_GET_FAILURE,
          error: error
        })
      })
  }
}

// Create article
export function create(data) {
  return dispatch => {
    return axios.post(routesApi, queryBuilder({type: 'mutation', operation: 'articleCreate', data, fields: ['id']}))
  }
}

// Remove article
export function remove(data) {
  return dispatch => {
    return axios.post(routesApi, queryBuilder({type: 'mutation', operation: 'articleRemove', data, fields: ['id']}))
  }
}
