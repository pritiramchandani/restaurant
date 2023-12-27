const app = require('express');
const UsersClass = require('./inc/userclass');
const jwt = require('jsonwebtoken');

const users = new UsersClass();
const router = app.Router();
router.get('', async (req, res) => {
    return res.status(200).json({ message: 'Thank you for coming in my life' });
});


router.post('/register', async (req, res) => {
    return users.createUser(req, res);
    return res.status(200).json({ message: 'Thank you for registration' });
});



router.post('/login', async (req, res) => {
    return users.loginUser(req, res);
});


// router.get('/user', users.authenticateToken, async (req, res) => {
//     return users.getUserInfo(req, res);
// });


module.exports = router;
