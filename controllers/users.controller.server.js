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

    app.get('/api/users/:userId', (request, response) => {
        userDao.findUserById(request.params['userId'])
            .then(user => response.json(user))
    });

    app.post('/api/login', (request, response) => {
        const userName = request.body.username;
        const password = request.body.password;
        userDao.findUserByCredentials(userName, password)
            .then(user => {
                if (user) {
                    user.password = '*****';
                    return response.json(user);
                } else {
                    return response.status(403).send({
                        message: `User ${userName} not found`
                    })
                }
            })
    });

    app.delete('/api/users/:userId', (request, response) => {
        userDao.deleteUser(request.params['userId'])
            .then(status => response.json(status));
    });
};
