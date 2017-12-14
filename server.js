let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let session = require('express-session');
let mongoose = require('mongoose');

let app = express();

app.use(session({ secret: 'thisisverysecretok'}));
app.use(bodyParser.json({extended:true}));

app.use(express.static(path.join(__dirname, 'public', 'dist')));

require('./server/config/mongoose');

let routes_setter = require('./server/config/routes');
routes_setter(app);

app.listen(8000, ()=>{
	console.log("listening on port 8000")
});
