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

exports.findAll = function(req, res) {
  Map.findAll().then(function(maps) {
    console.log('🍊 findAll called, data is ', maps);
  })
  .then(function() {
    res.status(200).end();
  });
};
