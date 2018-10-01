// App Imports
import {APP_URL_API} from './config'

// APP Routes
export const routes = {
  home: '/',

  about: '/about',

  thoughts: {
    list: '/thoughts',

    create: '/thoughts/create',

    view: (id) => {
      return `/thought/${ id }`
    }
  },

  users: {
    list: '/users',

    create: '/users/create',

    view: (id) => {
      return `/users/${ id }`
    }
  },

  articles: {
    list: '/articles',

    create: '/articles/create',

    view: (id) => {
      return `/articles/${ id }`
    }
  },
}

export const routesApi = APP_URL_API
