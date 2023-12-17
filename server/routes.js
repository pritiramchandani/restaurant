const app = require('express');
// const UsersClass = require('./models/usersclass');
const jwt = require('jsonwebtoken');

const router = app.Router();

// const users = new UsersClass;

router.get('/healthcheck', async (req, res) => {

    return res.status(200).json({ message: 'Thank you for coming in my life' });


// return users.createUser(req, res);

});


router.post('/register', async (req, res) => {

    return res.status(200).json({ message: 'Thank you for registration' });

});



router.post('/login', async (req, res) => {
    // return users.loginUser(req, res);
});

// router.get('/user', users.authenticateToken, async (req, res) => {
//     return users.getUserInfo(req, res);
// });


module.exports = router;