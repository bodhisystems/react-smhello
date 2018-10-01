// Imports
import {GraphQLString, GraphQLInt} from 'graphql'

// App Imports
import UserType from '../type'
import {create, remove} from '../resolvers'

// User create
export const userCreate = {
  type: UserType,
  args: {
    firstName: {
      name: 'firstName',
      type: GraphQLString
    },

    lastName: {
      name: 'lastName',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    phone: {
      name: 'phone',
      type: GraphQLString
    }
  },
  resolve: create
}

// User remove
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
