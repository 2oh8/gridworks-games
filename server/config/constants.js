const actions = {
  create: 'Create',
  update: 'Update',
  remove: 'Remove',
  find: 'Find',
  findAll: 'Find All'
}

const models = {
  
  user: {
    name: 'User',
    endpoint: 'users',
    preventDefaultApi: true,
    useCustomRoutes: true
  },

  gamestats: {
    name: 'Gamestats',
    endpoint: 'gamestats',
    preventDefaultApi: true,
    useCustomRoutes: true
  }
}


module.exports = {
  actions,
  models
}