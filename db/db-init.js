var Sequelize = require('sequelize');
var db = new Sequelize('reduxdb', 'projects', 'MUCHbadpassword', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

db.authenticate()
  .then(function(err) {
    console.log('🍊  connected to db');
  })
  .catch(function(err) {
    console.log('🍊  can\'t connect to db', err);
  });

var Map = db.define('Map', {
  mapId: Sequelize.INTEGER,
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  thumbnail: Sequelize.STRING,
  votes: Sequelize.INTEGER
});

// add starting data into db
Map.sync().then(function() {
  Map.create({
    mapId: 1,
    title: 'Golan Heights',
    description: 'what a nice mapA',
    thumbnail: '',
    votes: 0
  })
  .then(function() {
    mapId: 2,
    title: 'Pacific Heights',
    description: 'what a nice mapB',
    thumbnail: '',
    votes: 0
  })
  .then(function() {
    mapId: 3,
    title: 'Corona Heights',
    description: 'what a nice mapC',
    thumbnail: '',
    votes: 0
  })
  .then(function() {
    mapId: 4,
    title: 'Washington Heights',
    description: 'what a nice mapD',
    thumbnail: '',
    votes: 0
  })
  .then(function() {
    console.log('🍊 initialized 4 maps into db');
  })
  .catch(function(err) {
    console.error('🍊 error in initializing data', err);
  });
});