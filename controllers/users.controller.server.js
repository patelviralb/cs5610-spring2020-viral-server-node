const userDao = require('../daos/users.dao.server');

module.exports = (app) => {
    app.post('/api/users', (request, response) => {
        const newUser = request.body;
        userDao.createUser(newUser)
            .then(newAddedUser => response.json(newAddedUser))
    });

    app.get('/api/users', (request, response) => {
        userDao.findAllUsers()
            .then(allUsers => response.json(allUsers))
    });
};
