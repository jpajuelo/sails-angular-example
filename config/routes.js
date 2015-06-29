/**
 * Route Mappings
 * (sails.config.routes)
 */

module.exports.routes = {

  '/': 'UserController.home',
  'get /signup': 'UserController.new',
  'get /profile': 'UserController.profile',

  'post /signup': 'UserController.signUp',
  'post /signin': 'UserController.signIn',
  'get /signout': 'UserController.signOut',

};
