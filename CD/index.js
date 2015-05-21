var CDJson = require('./stock.json');


/* CDStock for Json data  */
function CDStock(){
	this.cds = [];	//declaring an array that hold JSON Array data
	
	for(var i = 0; i < CDJson.CDStock.length ; i++){
		this.cds.push({"Name" : CDJson.CDStock[i].Name,
					   "ID" : CDJson.CDStock[i].ID,
					   "Month" : CDJson.CDStock[i].Month,
			 		   "Price" : CDJson.CDStock[i].Price});
	}
}

/* getCD: return all the CD that sold, No param, return type Json
	If there is no sold CD print "There is no CD" */
CDStock.prototype.getCD = function(){
	console.log("\ngetCD() function called")
	var length = CDJson.CDStock.length;
	/* if there is no CD at the json*/
	if( length == 0){
			console.log("There is no CD");
			return 0;
	}

	/*print the json to console */
	console.log("Sold CD:")
	for(var i = 0; i < CDJson.CDStock.length; i++){
		console.log("**************");
		console.log("ID: " + CDJson.CDStock[i].ID);
		console.log("Name: " + CDJson.CDStock[i].Name);
		console.log("Month: " + CDJson.CDStock[i].Month);
		console.log("Price: " + CDJson.CDStock[i].Price);
	}
	return CDJson;
}

/* getCDByMonth: return all the CD that sold at specific month,
 1 Param-->Month , return type Json
 if there is no matching print "NO match --> There is no CD that sold this month(month)"  */
CDStock.prototype.getCDByMonth = function(month){
	console.log("\n\ngetCDByMonth(" + month + ") called:")

	var found = 0;//if the month found this flag will be 1
	var CDStock = []; //array for matching CD by  month

	for(var i = 0; i < CDJson.CDStock.length; i++){
		if(CDJson.CDStock[i].Month == month){
				found = 1;
				
				console.log("**************");
				console.log("ID: " + CDJson.CDStock[i].ID);
				console.log("Name: " + CDJson.CDStock[i].Name);
				console.log("Month: " + CDJson.CDStock[i].Month);
				console.log("Price: " + CDJson.CDStock[i].Price);
				
				CDStock.push(this.cds[i]);
				
		}
		
	}
	/* if there is no match for month --> print no match*/
	if(found == 0){
		console.log("NO match --> There is no CD that sold this month (" + month + ")" );
		return {};
	}
	return CDStock;
	//return stack.CDStock;
}

/* getCDByMonthAndName: return all the CD that sold at specific month with specific name,
 2 Param-->Month & Name, Return val-->stack with CD obj
 if there is no match print NO match --> There is no CD that sold this month(month)  with the name:(name)*/
CDStock.prototype.getCDByMonthAndName = function(month,name){
	console.log("\n\ngetCDByMonthAndName(" + month + "," + name + ") called:")

	var found = 0;//if the monthAndName found this flag will be 1
	var CDStock = []; //array for matching CD by  monthAndName

	
	for(var i = 0; i < CDJson.CDStock.length; i++){
		if(CDJson.CDStock[i].Month == month && CDJson.CDStock[i].Name == name){
				found = 1;
				console.log("**************");
				console.log("ID: " + CDJson.CDStock[i].ID);
				console.log("Name: " + CDJson.CDStock[i].Name);
				console.log("Month: " + CDJson.CDStock[i].Month);
				console.log("Price: " + CDJson.CDStock[i].Price);
				
				CDStock.push(this.cds[i]);
				

		}

	}
	/* if there is no match for month and name --> print no match*/
	if(found == 0){
		console.log(" NO match --> There is no CD that sold this month (" + month + ")" +" with the name:" + name );
		return {};
	}
	return CDStock;
}



/*export the module */
module.exports = CDStock;