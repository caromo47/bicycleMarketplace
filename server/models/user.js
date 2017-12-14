let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let UserSchema = new mongoose.Schema({
	first_name: {type: String, minlength: "2", require: true},
	last_name: {type: String, minlength: "2", require: true},
	email: {type: String, minlength: "2", require: true, unique: true},
	password: {type: String, minlength:"7", require: true},
	bikes: [{type: Schema.Types.ObjectId, ref: 'Bike'}]
},{timestamps:true});

mongoose.model('User', UserSchema);
