var Promise = require('bluebird');
var Sequelize = require('sequelize');
var db = new Sequelize('reduxdb', 'projects', 'MUCHbadpassword', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

var Map = db.define('Map', {
  mapId: Sequelize.INTEGER,
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  thumbnail: Sequelize.STRING,
  votes: Sequelize.INTEGER
});

exports.findAll = function() {
  Map.sync() 
    .then(function() {
      return Map.findAll();
    })
    .then(function(maps) {
      // return JSON.stringify(maps);
      next(maps);
    })
    .catch(function(err) {
      console.error('🍊 err in findAll query', err);
    });
};