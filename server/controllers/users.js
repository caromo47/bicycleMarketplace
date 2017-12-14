let mongoose = require('mongoose');
let User = mongoose.model('User');
let bcrypt = require('bcrypt');
let session = require('express-session');

module.exports ={
	register: (req,res)=>{
		console.log("users.register");
		User.findOne({email: req.body.email}).exec((err, foundUser)=>{
			if (err){
				console.log("error in register");
			} else {
				if (!foundUser){
					let newUser = new User(req.body);
					let hashedPW = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
					newUser.password = hashedPW;
					newUser.save((err)=>{
						err ? (
							console.log("something went wrong"),
							res.json(err)
						) : (
							console.log("registered!"),
							req.session.userId = newUser._id,
							res.json(newUser)
						);
					})
				}
			}
		})
	},
	login: (req,res)=>{
		console.log("users.login");
		User.findOne({email: req.body.email}).exec((err, foundUser)=>{
			if (err){
				console.log("error in login");
				res.json(err);
			} else {
				console.log("no error");
				if(foundUser){
					console.log("found user")
					if(bcrypt.compareSync(req.body.password, foundUser.password)==true){
						console.log("passwords matched");
						req.session.userId = foundUser._id;
						res.json(true);
					} else {
						console.log("passwords dont match");
						res.json({
							errors: {
								login: {message:"incorrect email and password combination"}
							}
						});
					}
				}else{
					res.json({
						errors: {
							login: {message:"incorrect email and password combination"}
						}
					});
				}
			}
		})
	},
	getCurrent: (req,res)=>{
		console.log("users.getCurrent");
		if(!req.session.userId){
			res.json({
				errors:{
					getCurrent: {message:"you are not logged in"}
				}
			});
		} else{
			User.findOne({_id: req.session.userId}).exec((err,foundUser)=>{
				err ? (
					console.log("didnt work"),
					res.json(false)
				) : (
					console.log("found user in session"),
					res.json(foundUser)
				);
			})
		}
	},
	logout: (req,res)=>{
		console.log("users.logout");
		req.session.destroy();
		res.json(true)
	},
	getInfo: (req,res)=>{
		User.findById(req.body._id).exec((err,foundUser)=>{
			if (err) {
				console.log("error");
				res.json(false);
			}else {
				console.log("found user in info");
				let contactInfo = {};
				contactInfo["name"]= user.first_name;
				contactInfo["email"]= user.email;
				res.json(contactInfo)
			};
		})
	}
}
