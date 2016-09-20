var db = require('mongoose');
//connection with the MongoDB
var conURL = 'mongodb://localhost:27017/phonetracer';

db.connect(conURL);

if(db == 'undefined'){
	console.log('cannot connect to mongodb phonetracer');
}

var phoneSchema = db.Schema({
	model: string,
	make: string,
	color: string
})
var phoneModel = db.model('Phone', phoneSchema);

exports.add = function(req, res){
	var newPhone = { model: request.body.model, 
		make: request.body.make, 
		color: request.body.color};
	phoneModel.create(newPhone, function(error, result){
		
	}
}
