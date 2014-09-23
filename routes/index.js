var express = require('express');
//var S = require('string');
var router = express.Router();
var Grid = require('gridfs-stream');
var mongo = require('mongodb');
var url = require('url')
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/login', function(req,res){
	var db=req.db;
	var collection = db.get('user');
	collection.find({"userID" : req.params.emailid},{},function(e,docs){
		res.json(docs);
	});
});


