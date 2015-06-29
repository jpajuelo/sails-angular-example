
module.exports = function (req, res, next) {
  // Initialize Passport
  AuthService.initialize()(req, res, function () {
    // Use the built-in sessions
    AuthService.session()(req, res, function () {
      // Make the user available throughout the frontend
      res.locals.user = req.user;

      next();
    });
  });
};
