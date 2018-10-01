// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

// Article Type
const ArticleType = new GraphQLObjectType({
  name: 'article',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    title: {type: GraphQLString},
    subtitle: {type: GraphQLString},
    body: {type: GraphQLString},
    createdAt: {type: GraphQLString},
    updatedAt: {type: GraphQLString}
  })
})

export default ArticleType
