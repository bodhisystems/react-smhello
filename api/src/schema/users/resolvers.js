// App Imports
import models from '../../models'

// Get users by ID
export async function getById(parentValue, {id}) {
  return await models.User.findOne({where: {id}})
}

// Get all users
export async function getAll() {
  return await models.User.findAll()
}

// Create user
export async function create(parentValue, {firstName, lastName, email, phone}) {
  return await models.User.create({
    firstName,
    lastName,
    email,
    phone
  })
}

// Delete user
export async function remove(parentValue, {id}) {
  console.log({id})
  return await models.User.destroy({where: {id}})
}
