
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
module.exports = middleware;