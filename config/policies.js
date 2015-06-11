/**
 * Policy Mappings
 * (sails.config.policies)
 */

module.exports.policies = {

  '*': ['passport', 'isAuthenticated'],

  'auth': {
    '*': ['passport']
  }

};
