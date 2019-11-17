import Sequelize from 'sequelize'

if (process.env.NODE_ENV === 'development') {
  // Obtain access to context hook in dev env
  // Note: Production build of webpack already provides this
  require('babel-plugin-require-context-hook/register')()
}

export default (sequelize) => {
  let db = {}

  // Search for all files ending in .js in the current directory and load with require.context
  // Loaded model files export function with sequelize instance and class parameters
  const context = require.context('.', true, /^\.\/(?!index\.js).*\.js$/, 'sync')
  context.keys().map(context).forEach(module => {
    const model = module(sequelize, Sequelize)
    db[model.name] = model
  })

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db)
    }
  })

  return db;
}