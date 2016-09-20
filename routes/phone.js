var express = require('express');
var phone = express.Router();
//var dbclient = require('db');

/* GET users listing. */
var db = require('mongoose');
//connection with the MongoDB
var conURL = 'mongodb://localhost:27017/phonetracer';

db.connect(conURL);

if(db == 'undefined'){
	console.log('cannot connect to mon(godb phonetracer');
}

var phoneSchema = db.Schema({
	model: String,
	make: String,
	color: String
});

var phoneModel = db.model('Phone', phoneSchema);

add = function(req, res){
	var newPhone = { model: request.body.model, 
		make: request.body.make, 
		color: request.body.color};
	phoneModel.create(newPhone, function(error, result){
		if(error){
			response.send(500, { error: error});
		}
		else{
			console.log('it is how it is');
			get(req, res);
		}
	});
}

get = function(req, res){
	phoneModel.find().exec(function (error, res) {
        if (error) { 
            resp.send(500, {error: error});
        } else { 
            resp.send(res);
        }
	});
}

phone.post('/', add);
phone.get('/show', get);

module.exports = phone;