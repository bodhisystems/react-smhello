// Imports
import {GraphQLInt, GraphQLList} from 'graphql'

// App Imports
import ArticleType from '../type'
import {getAll, getById} from '../resolvers'

// Articles all
export const articles = {
  type: new GraphQLList(ArticleType),
  resolve: getAll
}

// Article By Id
export const article = {
  type: ArticleType,
  args: {
    id: {type: GraphQLInt}
  },
  resolve: getById
}
