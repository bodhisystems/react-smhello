// App Imports
import models from '../../models'

// Get articles by ID
export async function getById(parentValue, {id}) {
  return await models.Article.findOne({where: {id}})
}

// Get all articles
export async function getAll(){
  return await models.Article.findAll()
}

// Create article
export async function create(parentValue, {title, subtitle, body}) {
  //console.log(body)
  return await models.Article.create({
    title,
    subtitle,
    body
  })
}

// Delete article
export async function remove(parentValue, {id}) {
  console.log({id})
  return await models.Article.destroy({where: {id}})
}
