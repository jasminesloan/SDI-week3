// Author: Jasmine Sloan
// 04/17/2012
// Deliverable 3
// The Birthday Party

// Variables 
var april7th = "Birthday Party"
var cases = 24
var potentialNumOfGuests = 16
var numberOfGuests = 8
var bottle = "24 shots"
var x = true
var y = false
var guest1 = "Candyse",
	guest2 = "Sasha",
	guest3 = "Camille"
;

//String

console.log("The " + april7th + " is coming up, " + "everyone is so excited! "
);

console.log("Hopefully the " + numberOfGuests + " guests will show up so there will be a " 
	+ april7th
);


//Numbers

var potentialNumOfGuests = 16
var numberOfGuests = 8
var maxNumOfGuests = 24

console.log(potentialNumOfGuests + 8 + ", is the maximum number of people allowed at the party "
); 

potentialNumOfGuests = (16 - 8 / 20) * (0);

console.log("If 0 guests arrive there will be no " + april7th
);

while (maxNumOfGuests > 0) {
	console.log(maxNumOfGuests + " arrive at the " + april7th);
	
	maxNumOfGuests--;
}; 

console.log("No room for anyone else at the " + april7th

);

// Boolean 

var x = true
var y = false
var z = true

if (x) { "Then all the guest will show up and the party will go on"
};
if (y) { "If no one shows up to the party we will go on"
};
if (z) { "The party will be huge success!"
};

// Given: (x ∧ y) ∨ z

if ((x && y) || z) {
    console.log("The expression is true");
} else {
    console.log("The expression is false");
}

console.log(x)
console.log(y)

console.log("If " + x + " the " + april7th + " will be a success!"

);

//Array

var cases = 24
var bottle = "24 shots" 
var guests = ["Candyse", "Sasha", "Camille"];
var drinks = ["Grey Goose", "Patron", "Ciroc"];


var swimming = [
	"will be swimming",
	"doesn't want to get her hair wet",
	"can not swim"
];

for (var i=0, b=guests.length; i < b; i++) {
	console.log( "Guest " + guests[i] + " maybe " + swimming[i] );	
};

var example = ["", [], {}, function(){}, undefined, true, false, 0, 50];

for ( var cases = 24; cases > 0; cases--) {
	console.log(cases + " needed to supply the party. ");
};

console.log(" all out, in need of more cases. ");



















// objects

 var Array = [true, false, "", [], function(){}, 101];

var student = { 
	id: "0001111", 
	name: "Jasmine", 
	interests: [
		"JavaScript", 
		"HTML", 
		"CSS", 
		"Flash"
	] 
};

var key = "interests";

student.name = "Bob";

console.log( student[key] );
console.log( student.name );
console.log( student.sayHi ); 


student.sayHi = function () {
	console.log("Get lost.")
};

student["sayHi"]

for (var key in student) {
	console.log("key: " + key + ", value: ", student[key]);
};


// XML

<friends>
	<friend>
		<UUID>0015692</UUID>
		<name>Mike</name>
	</friend>
	<friend>
		<UUID>0118245</UUID>
		<name>Chris</name>
	</friend>
	</friends>
	

// JSON Data File
	 

var json ={
	"friends": {
		"001435235": {
			"name": "Chris",
			"age": 30 
		},
		"001435238": {
		"name": "Scott",
		"age": 42 
		},
		"001435230": {
		"name": "Jason",
		"age": 32
		}
	}	 
};

for (var key in json.friends) {
	var friend = json.friends[key];
	//friend.name
};

var json2 = {
	"friends": [
		{
			"uuid": "001435235",
			"name": "Chris",
			"age": 30
		},
		{
			"uuid": "001435238",
			"name": "Scott",
			"age": 42
		},
		{
			"uuid": "001435230",
			"name": "Jason",
			"age": 32
		},
	]
};

var handleData = function (json){
	for (var i = 0; i < json.friends.length; i++){
		var friend = json.friends[i];
		console.log("User ID: " + friend.uuid + ", Name: " + friend.name + ", Age: " + friend.age);
	};
};

handleData(json2);

// 
var jsonstring = JSON.stringify(json);
console.log(jsonstring);

var receivedjson = JSON.parse(jsonstring);
console.log(receivedjson);






