const mongoose = require('mongoose');
const userSchema = require('./users.schema.servers');
const userModel = mongoose.model(
    'UserModel',
    userSchema
);

module.exports = userModel;
