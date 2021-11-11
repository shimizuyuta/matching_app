const passport = require("passport");

module.exports = app => {
  app.use(passport.initialize());
  console.log('hello____________')
  // passport.use(require("./strategies/googleStrategy"));
  passport.use(require("./strategies/jwtStrategy"));
};