// Article
export default (sequelize, DataTypes) => {
  return sequelize.define('article', {
    title: {
      type: DataTypes.STRING
    },
    subtitle: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    }
  })
}
