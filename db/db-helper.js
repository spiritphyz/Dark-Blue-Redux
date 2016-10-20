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

exports.getAllMaps = function(req, res) {
  Map.sync() 
    .then(function() {
      return Map.findAll();
    })
    .then(function(maps) {
      res.status(200).send(JSON.stringify(maps));
      res.status(200).send(maps);
    })
    .catch(function(err) {
      console.error('🍊 err in findAll query', err);
    });
};

exports.saveAllVotes = function(req, res) {
  var data = req.body;
  data.forEach(function(map) {
    Map.update(
      {votes: map.votes},
      {where: {mapId: map.mapId}}
    )
    .then(function(result) {
      console.log('🍊 successful update to db');
      return result;
    })
    .catch(function(err) {
      console.error('🍊 err in saveAllVotes query', err);
    });
  });
  res.status(201).end();
};