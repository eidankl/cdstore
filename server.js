var express = require ('express');	//now we have ref to module express
var url = require('url');
var app = express(); 				//ref to the WS

var CDStock = require('./CD');		//ref to my module
var CD = new CDStock;				//new instance from CD

/*  ROOT */
/* http://localhost:3000/ */ 
app.get('/', function(req,res){
	res.set('X-header_One', 'app.get');
	res.send(" localhost called, CDStock WS ROOT");
	
});

/* getCD */
/* http://localhost:3000/cd */
app.get('/cd', function(req,res){
	var temp = CD.getCD();
	res.set('X-header_One', 'app.getCD');
	res.json(temp);
	
});

/* getCDByMonth*/
/* http://localhost:3000/month?Month=April */ 
app.get('/month', function(req,res) {
	var urlPart = url.parse(req.url,true);
 	var query = urlPart.query;
	var temp = CD.getCDByMonth(query.Month);
	res.set('X-header_One', 'app.getCDByMonth');
	res.json(temp);
	
});

/* getCDByMonthAndName */
/* http://localhost:3000/monthAndName?Month=June&&Name=John%20Lenon */ 
app.get('/monthAndName', function(req,res){
	var urlObj = url.parse(req.url,true);
	var query = urlObj.query;
	var temp = CD.getCDByMonthAndName((query.Month),(query.Name));
	res.set('X-header_One', 'app.getCDByMonth');
	res.json(temp);
})

/* for herouko */
app.listen(process.env.PORT || 3000);


/* module function */
CD.getCD();
CD.getCDByMonth('April');
CD.getCDByMonth('september');
CD.getCDByMonthAndName('April','Arik Ainshtein');
CD.getCDByMonthAndName('April','Arik');
