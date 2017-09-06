let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
//   gamename: { type: String, required: true },
  username: { type: String, required: true },
  wins: { type: Number, required: true, default: 0 }
})

module.exports = mongoose.model('User', schema)