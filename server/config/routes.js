let bike = require('../controllers/bikes.js');
let user = require('../controllers/users.js');
let path = require('path');

module.exports = (app)=>{
	app.post('/api/login', user.login);
	app.post('/api/register', user.register);
	app.get('/api/logout', user.logout);
	app.get('/api/currentuser', user.getCurrent);
	app.post('/api/info', user.getInfo);

	app.get('/api/randombike', bike.getRandom);
	app.get('/api/bicycles', bike.all);
	app.get('/api/mybicycles', bike.allUserBikes);
	app.post('/api/bicycle', bike.add);
	app.post('/api/bicycle/edit', bike.edit);
	app.post('/api/bicycle/destroy', bike.destroy);

	app.all("*", (req,res)=>{
		res.sendFile(path.resolve('./public/dist/index.html'));
	})
}
