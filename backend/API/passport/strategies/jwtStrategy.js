const User = require('../../../Models/User')
const jwt = require("jsonwebtoken");



function verifyToken(req, res, next) {
  const token = req.header('x-auth-token');
  console.log('token確認',token)
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, function (error, decoded) {
      if (error) {
        return res.status(403).send({
          isSuccess: false,
          message: "トークンの認証に失敗しました。",
        });
      }
      else {
        console.log(decoded,'decoded_____')
        req.user = decoded;
        next();
      }
    });
  } else {
    return res.status(401).send({
      isSuccess: false,
      message: "トークンがありません。",
    });
  }
}
module.exports = verifyToken;