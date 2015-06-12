var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var db = mongoose.connection;

//db.on('error', console.error);
//db.once('open', function() {
//  // Create your schemas and models here.
//  var movieSchema = new mongoose.Schema({
//    title: { type: String }
//    , rating: String
//    , releaseYear: Number
//    , hasCreditCookie: Boolean
//  });
//
//  var thor = new Movie({
//    title: 'Thor'
//    , rating: 'PG-13'
//    , releaseYear: '2011'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
//    , hasCreditCookie: true
//  });
//
//  thor.save(function(err, thor) {
//    if (err) return console.error(err);
//    console.dir(thor);
//  });
//
//// Compile a 'Movie' model using the movieSchema as the structure.
//// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
//  var Movie = mongoose.model('Movie', movieSchema);
//});

//mongoose.connect('mongodb://localhost:27017/');

///* GET users listing. */
//router.get('/', function (req, res, next) {
//  //db.getCollection(function (err, db) {
//  //  res.json(db);
//});
//
//router.get('/:id', function (req, res, next) {
//  //db.getById(req.params.id, function (err, model) {
//  //  res.json(model);
//  //});
//});
//
//router.post('/', function (req, res, next) {
//  db.create(req.body, function (err, model) {
//    res.json(model);
//  });
//});
//
//router.delete('/:id', function (req, res, next) {
//  //db.remove(req.params.id, function (err) {
//  //  res.json(db);
//  //});
//});
//
//router.put('/:id', function (req, res, next) {
//  //db.update(req.body, function (err, model) {
//  //  res.json(model);
//  //});
//});

module.exports = router;