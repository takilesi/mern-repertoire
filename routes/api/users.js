const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

// POST /api/users
router.post('/', usersCtrl.create);

// POST /api/users/Login
router.post('/login', usersCtrl.login)

module.exports = router;
// gets used in server.js line 19 (see below from server.js)
// app.use('/api/users', require('./routes/api/users'));