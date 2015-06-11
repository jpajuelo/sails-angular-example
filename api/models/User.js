/**
 * User
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: See http://sailsjs.org/#!/documentation/models
 */

module.exports = {

  attributes: {

    firstName: {
      type: 'string',
      maxLength: 30
    },

    lastName: {
      type: 'string',
      maxLength: 30
    },

    username: {
      type: 'string',
      required: true,
      unique: true
    },

    email: {
      type: 'email',
      required: true,
      unique: true
    },

    passports: {
      collection: 'Passport',
      via: 'user'
    },

    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    }

  }

};
