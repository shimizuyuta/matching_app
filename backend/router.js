const express = require('express');
const router = express.Router();
const AuthAPI = require('./API/controllers/AuthController')

router.post('/login',AuthAPI.login);
router.post('/logout',AuthAPI.logout);
router.post('/signup',AuthAPI.signup);



module.exports = router;
