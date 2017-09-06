let Users = require('../models/user')

module.exports = {
  userData: {
    path: '/',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find Users'
      Users.find({_id: req.session.uid})
        .then(user => {
          res.send(handleResponse(action, user))
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