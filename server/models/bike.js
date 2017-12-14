let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let BikeSchema = new mongoose.Schema({
	title: {type: String, require: true},
	description: { type: String},
	price: {type:Number},
	image: {type:String},
	location: {type: String},
	user_id: {type: Schema.Types.ObjectId, ref: 'User'}
},{timestamps:true});

mongoose.model('Bike', BikeSchema);
