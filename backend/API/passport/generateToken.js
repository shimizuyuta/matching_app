const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

module.exports =   function(user){
  const payload = {
    sub: user._id,
    exp: Date.now() + parseInt(process.env.JWT_EXPIRES),
  };

    const token = jwt.sign(JSON.stringify(payload), process.env.JWT_SECRET);
    return token
}