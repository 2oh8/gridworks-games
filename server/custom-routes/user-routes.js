let Users = require('../models/user')

module.exports = {
  userData: {
    path: '/',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Find Users'
      Users.find({ _id: req.session.uid })
        .then(user => {
          res.send(handleResponse(action, user))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },

  userWins: {
    path: '/userwins/:userId',
    reqType: 'put',
    method(req, res, next) {
      let action = 'Update User Info'
      Users.findByIdAndUpdate(req.params.userId, req.body)
        .then(user => {
          res.send(handleResponse(action, user))//send updated user info to store
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },

  leaderBoards: {
    path: '/leaderboards',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Grab leaderBoard Info'

      Users.find({}).select('name wins gamesPlayed -_id')
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