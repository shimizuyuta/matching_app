const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const User = require("../../../Models/User");

module.exports = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
    session: false
  },
  async (email, password, done) => {
      try{
        console.log(email,'email______')
        const user = await User.findOne({email})
        if (!user) done(null, false, { message: "userが存在しません。" });
        if (!bcrypt.compareSync(password, user.password))done(null, false, { message: "la contraseña no es correcta" });
        done(null, user);

      }catch(err){
         done(err)
      }
      
  }
);