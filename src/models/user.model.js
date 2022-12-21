/* eslint-disable no-invalid-this */
/* eslint-disable space-before-function-paren */
const mongoose = require('mongoose');
const { compareSync, hashSync, genSaltSync } = require('bcryptjs');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
});

// Se sobreescribe la funcion toJSON dentro de UserSchema
UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

// Se crea una nueva función comparePasswords dentro de UserSchema
UserSchema.methods.comparePasswords = function (password) {
  return compareSync(password, this.password);
};

UserSchema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }

  const salt = genSaltSync(10);
  const hashedPassword = hashSync(user.password, salt);
  user.password = hashedPassword;
  next();
});

module.exports = mongoose.model('user', UserSchema);
