var Sequelize = require('sequelize');
var db = new Sequelize('reduxdb', 'projects', 'MUCHbadpassword', {
  host: '127.0.0.1',
  dialect: 'mariadb'
});

var Map = db.define('Map', {
  mapId: Sequelize.INTEGER,
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  thumbnail: Sequelize.STRING,
  votes: {
    type: Sequelize.INTEGER,
    validate: {
      isInt: true,
      min: 0,
      max: 4096
    }
  }
});

exports.getAllMaps = function(req, res) {
  return Map.findAll()
    .then(function(maps) {
      res.status(200).send(maps);
    })
    .catch(function(err) {
      console.error('🍊 err in findAll query', err);
    });
};

exports.saveAllVotes = function(req, res) {
  var data = req.body;
  console.log('🍊  typeof data', data);
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
  // intentionally delay response to display spinner longer
  // and discourage fast clicking of the save button
  setTimeout(function() {
    res.status(201).end('here is delayed response after 2 sec');
  }, 2000);
};
