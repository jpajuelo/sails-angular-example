/**
 * Connections
 * (sails.config.connections)
 */

module.exports.connections = {

  mongodbServer: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    database: 'sample_db'
  }

};
