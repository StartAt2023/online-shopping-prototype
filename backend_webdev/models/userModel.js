// models/userModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  nickname: { type: String, required: true },
  residence: { type: [String], required: true }, 
  phone: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
