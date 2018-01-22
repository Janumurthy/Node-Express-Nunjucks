const express= require('express')
const app=express()
const nunjucks = require('nunjucks')
var njIncludeData = require('nunjucks-includeData');

var path = require('path');
var nunjucksEnv = nunjucks.configure('html',{
	autoescape:true,
	express:app	
});

njIncludeData.install(nunjucksEnv); 

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
	res.render(path.join(__dirname,'html','/index.html'))
});

var server = app.listen(8082, function () {
   var host = 'localhost'
   var port = server.address().port
   console.log("Listening at http://%s:%s", host, port)
})
