let mongoose = require("mongoose");
let Bike = mongoose.model('Bike');
let User = mongoose.model('User');

module.exports = {
	add:(req,res)=>{
		console.log("")
		let bike = new Bike(req.body);
		bike.save((err)=>{
			err ? (
				console.log("something went wrong"),
				res.json(err)
			) : (
				console.log("created a new bike"),
				bike.user_id = req.session.userId,
				console.log("bike.user_id"),
				res.json(bike)
			)
		})
	},
	allUserBikes: (req,res)=>{
		Bike.find({user_id: req.session.userId}).exec((err,allBikes)=>{
			err ? (
				console.log("wrong!"),
				res.json(false)
			) : (
				console.log("got all bikes right?"),
				res.json(allBikes)
			);
		})
	},
	edit: (req,res)=>{
		let bike = new Bike(req.body);
		Bike.findByIdAndUpdate(bike._id, bike).exec((err,foundBike)=>{
			err ? (
				console.log("wrong!"),
				res.json(false)
			) : (
				console.log("edit the bike"),
				res.json(foundBike)
			);
		})
	},
	destroy: (req,res)=>{
		console.log('hit delete in controllers');
		Bike.findByIdAndRemove(bike._id, bike).exec((err,deletedBike)=>{
			err ? (
				console.log('something went wrong'),
				res.json(err)
			) : (
				console.log('success'),
				res.json(deletedPlayer)
			)
		})
	},
	getRandom: (req,res)=>{
		console.log('random bike');
		Bike.find({}).exec((err,randomBike)=>{
			if (err) {
				console.log('something went wrong');
				res.json(err);
			} else {
				console.log('random');
				let num = randomBike.length;
				let randBike = Math.floor(Math.random() * num);
				res.json(randomBike[randBike]);
			}
		})
	},
	all: (req,res)=>{
		Bike.find({}).exec((err,bikes)=>{
			err ? (
				console.log("something went wrong"),
				res.json(err)
			) : (
				console.log("all the bikes in the world"),
				res.json(bikes)
			)
		})
	}
}
