/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  homepage: function (req, res) {
    console.log(req.user.username);
    res.view('homepage');
  }

};
