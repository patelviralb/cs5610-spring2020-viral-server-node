const userModel = require('../models/users.model.server');

const createUser = (user) =>
    userModel.create(user);

const findAllUsers = () =>
    userModel.find();

const findUserById = (userId) =>
    userModel.findOne({_id: userId});

const findUserByCredentials = (userName, password) =>
    userModel.findOne({
        username: userName, password: password
    });

const deleteUser = (userId) =>
    userModel.deleteOne({_id: userId});

module.exports = {
    createUser,
    findAllUsers,
    findUserById,
    findUserByCredentials,
    deleteUser
};
