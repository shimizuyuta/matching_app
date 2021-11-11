const express = require('express');
const router = express.Router();
const AuthAPI = require('./API/controllers/AuthController')
const UserAPI = require('./API/controllers/UserController')
const verifyToken = require('./API/passport/strategies/jwtStrategy')

router.post('/login',AuthAPI.login);
router.post('/logout',AuthAPI.logout);
router.post('/signup',AuthAPI.signup);


router.get('/user',verifyToken,UserAPI.findOneUser)
router.post('/user',verifyToken,UserAPI.updateUser)
router.get('/users',verifyToken,UserAPI.findUser)


router.get('/',(req,res)=>{
  console.log(req);
  res.status(200).json({})
})

module.exports = router;
