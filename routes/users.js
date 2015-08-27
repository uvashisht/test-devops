var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

var User = require("./../models/User");

// get the users
router.get('/', function(req, res, next){
  Log.i("return the list of users");
  User.find(function (err, users) {
    if (err) return next(err);
    res.status(200).json(users);
  });
});

// get the user with given id
router.get('/:id', function(req, res, next) {
  Log.i("get user by id "+req.params.id);
  User.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    res.status(200).json(user);
  });
});

// create a new user
router.post('/', function(req, res, next) {
  Log.i("create a new user");
  User.create(req.body, function (err, user) {
    if (err) return next(err);
    res.status(201).json(user);
  });
});

//update a user
router.put('/:id', function(req, res, next) {
  Log.i("update the user with id "+req.params.id);
  User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.status(200).json({
      "success" : "updated the User"
    });
  });
});

// delete a user
router.delete('/:id', function(req, res, next) {
  Log.i("delete the user with id "+req.params.id);
  User.findByIdAndRemove(req.params.id, req.body, function (err, user) {
    if (err) return next(err);
    res.status(200).json({
      "success" : "deleted the User"
    });
  });
});

module.exports = router;