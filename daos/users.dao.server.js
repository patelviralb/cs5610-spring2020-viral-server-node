const userModel = require('../models/users.model.server');

const createUser = (user) => {
    return userModel.create(user);
};
const findAllUsers = () => {
    return userModel.find();
};
const findUserById = (userId) => {};
const findUserByCredentials = (userName, password) => {
    return userModel.find({
        username: userName, password: password
    })
};

module.exports = {
    createUser,
    findAllUsers,
    findUserById,
    findUserByCredentials
};
