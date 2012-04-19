// JSON Data File
	 

var json ={
	"wheather": {
		"warm": {
			"day": "Friday",
			"timeOfDay": "night" 
		},
		"cold": {
		"day": "Saturday",
		"timeOfDay": "night" 
		},
		"stormy": {
		"day": "Sunday",
		"timeOfDay": "afternoon"
		}
	}	 
};

for (var key in json.wheather) {
	var wheather = json.wheather[key];
	//weather.day
};

var json2 = {
	"wheather": [
		{
			"type": "warm",
			"day": "Friday",
			"timeOfDay": "night"
		},
		{
			"type": "cold",
			"day": "Saturday",
			"timeOfDay": "night"
		},
		{
			"type": "stormy",
			"day": "Sunday",
			"timeOfDay": "afternoon"
		},
	]
};

var handleData = function (json){
	for (var i = 0; i < json.wheather.length; i++){
		var wheathers = json.wheathers[i];
		console.log("wheather " + wheather.type + ", day " + wheather.day + ", timeOfDay: " + wheather.timeOfDay);
	};
};

handleData(json2);

// 
var jsonstring = JSON.stringify(json);
console.log(jsonstring);

var receivedjson = JSON.parse(jsonstring);
console.log(receivedjson);