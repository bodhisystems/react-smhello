// Imports
import {GraphQLString, GraphQLInt} from 'graphql'

// App Imports
import ArticleType from '../type'
import {create, remove} from '../resolvers'

// Article create
export const articleCreate = {
  type: ArticleType,
  args: {
    title: {
      name: 'title',
      type: GraphQLString
    },

    subtitle: {
      name: 'subtitle',
      type: GraphQLString
    },

    body: {
      name: 'body',
      type: GraphQLString
    }
  },
  resolve: create
}


// Article Remove
export const articleRemove = {
  type: ArticleType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
