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

//Functions

var bottle = "24 shots"
var numberOfGuests = 8;

var getBottles = function(b, name) {
	var bottle = b * numberOfGuests / 2;
	console.log(bottle + " bottles of " + name );
};

getBottles(3, "Grey Goose");
getBottles(4, "Patron");
getBottles(5, "Ciroc");


// Argument

var foodNames = [ "Wings", "Hot Dogs", "Hamburgers", "Rib Slab" ],
	amountOfFood = [ 50, 20, 30, 5 ];
var buyOneFood = function(foodName, amountThisFood) {
var buyAllFood = function(foodNames, amountOfFood) {}; // buyAllFood	
	

console.log("Grocery shopping for " + foodName + " need "
	+ amountThisFood + " to have enough");

for (var amount = 0; amount < amountThisFood; amount += 5) {
	var amountPurchased = amountThisFood - amount;

	var foodName = foodNames[foodNumber]
		amountThisFood = amountOfFood[foodNumber];
	buyOneFood(foodName, amountThisFood);
	
	console.log(amount + " needed " + amountPurchased + " food!");
}
console.log("We have enough food for " + april7th + ".");

};
	
for (var foodNumber = 0; foodNumber < foodNames.length; foodNumber++) {
	buyOneFood(foodNumber);

} // for foodNumber

// functions return a value
var timeOfParty = function(pm) {
	var currentHour = (new Date()).getHours(), 
		timeOfDay, timing;
	if (timeOfParty < 12) {timeOfDay = "too early" };
	if (timeOfParty < 6) {timeOfDay = "too late"; }
	else {timeOfDay = "good timing"; }
	timing = ("Not too early, not too late, " + timeOfDay + " , " + pm + "." );
	//console.log(timing);
	return timing; 

};

 var perferctTiming = timeOfParty("Hello, Welcome to the party! ");
 console.log(perferctTiming);

 var partyFavors = function(cashAllotted) {
 	var pricePerFavor = 12,
 		fullFavor;
 	if (cashAllotted < pricePerFavor){
 		console.log("Can't afford party favors.");
 		return 0;	
 	}
 	fullFavor = Math.floor(cashAllotted / pricePerFavor);
 	return FullFavor;	
 };

var purchasedFavors = partyFavors(10);
console.log("Guests receive " + purchasedFavors + " party favors!");

var partyFavors = function(cashAllotted) {
 	var pricePerFavor = 12,
 		fullFavor;
 	if (cashAllotted < pricePerFavor){
 		console.log("Can't afford party favors.");
 		fullFavor = 0;	
 	}
 	else {
 		fullFavor = Math.floor(cashAllotted / pricePerFavor);
 }
 	return fullFavor;	
 };

var purchasedFavors = partyFavors(13);
console.log("Guests appreciate " + purchasedFavors + " party favors, extremely excited!");


// objects

 var Array = [true, false, "", [], function(){}, 101];

var wheather = { 
	type: "warm", 
	day: "Friday", 
	timeOfDay: [
		"morning", 
		"afternoon", 
		"night"
	] 
};

var key = "timeOfDay";

wheather.day = "Friday";

console.log( wheather[key] );
console.log( wheather.day );
console.log( wheather.letsParty ); 


wheather.letsParty = function () {
	console.log("Let the party begin!")
};

wheather["letsParty"]

for (var key in wheather) {
	console.log("key: " + key + ", value: ", wheather[key]);
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
	








