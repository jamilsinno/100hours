const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  steamId: { type: String, unique: true },
  displayName: {type: String},
  profileURL: {type: String},
  avatar: {type: String},
  avatarMedium: {type: String},
  avatarFull: {type: String},
  personaState: {type: Number},
  gameCount: {type: Number},
  games: [Object],
  recentlyPlayed: [Object],
})


module.exports = mongoose.model('User', UserSchema)
