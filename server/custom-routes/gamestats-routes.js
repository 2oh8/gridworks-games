let Users = require('../models/gamestats')

module.exports = {
  GamestatsData: {
    path: '/',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find Gamestats'
      Gamestats.find({ _id: req.session.uid })
        .then(gamestat => {
          res.send(handleResponse(action, gamestat))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },

  userGame: {
    path: '/gamedata/:userId',
    reqType: 'put',
    method(req, res, next) {
      let action = 'Update User Info'
      Users.findByIdAndUpdate(req.params.userId, req.body)
        .then(user => {
          res.send(handleResponse(action, user))//send updated user info to store
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    },

    path: '/gamedata',
    reqType: 'post',
    method(req, res, next) {
      let action = 'Create User Game Info'
      Users.findByIdAndUpdate(req.params.userId, req.body)
        .then(user => {
          res.send(handleResponse(action, user))//send updated user info to store
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }
}


function handleResponse(action, data, error) {
  var response = {
    action: action,
    data: data
  }
  if (error) {
    response.error = error
  }
  return response
}