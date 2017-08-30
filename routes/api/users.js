var mongoose = require('mongoose');
var router = require('express').Router();
var passport = require('passport');
var User = mongoose.model('User');

router.get('/user', function(req, res, next){
    res.json('hello');
  
});


module.exports = router;
