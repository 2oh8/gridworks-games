let Users = require('../models/gamestats')

module.exports = {
  GamestatsData: {
    path: '/',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find Gamestats'
      Gamestats.find({_id: req.session.uid})
        .then(gamestat => {
          res.send(handleResponse(action, gamestat))
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