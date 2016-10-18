var express = require('express');
var app = express();
var PORT = 3000;
var middleware = {
	requireAuthentication: function(req, res, next){
		console.log('Private route hiy!');
		next();
	},
	logger: function(req, res, next){
		var d = new Date();		
		console.log('Request: ' + req.method + ' ' + req.originalUrl + ' ' + d.toString());
		next();
	}
};
app.use(middleware.logger);


app.get('/about', function(req, res){
	res.send('About Us!');
})
app.use(express.static(__dirname + '/public'));
app.listen(PORT, function(){
	console.log('express server started at port ' + PORT +'!!');
});