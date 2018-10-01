// Imports
import {GraphQLObjectType, GraphQLString, GraphQLInt} from 'graphql'

// User type
const UserType = new GraphQLObjectType({
  name: 'user',
  description: '...',

  fields: () => ({
    id: {type: GraphQLInt},
    firstName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    email: {type: GraphQLString},
    phone: {type: GraphQLString},
    createdAt: {type: GraphQLString},
    updatedAt: {type: GraphQLString}
  })
})

export default UserType
