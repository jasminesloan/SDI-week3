var pirate = {
    realName:    "Jean Lafitte",
    rank:        "Captain",
    privateer:   true,
    ships:       [ "La Diligent", "Pride" ],
    sailTo:      function (destination) {},
    getLocation: function () {}
};
pirate.sailTo("Tortuga");
var pirate = { /* stuff here */ },
    ship   = { /* more stuff here */ },
    target = "Tortuga";
pirate.announce("Our target today is " + target + ".");
var myName = pirate.getRealName();    // accessor method
pirate.announce("We'll find plunder, or my name isn't " + myName + "!");
pirate.sailTo(target);                // mutator + procedure method
var damage = pirate.attack(target);   // function method
pirate.repairDamage(damage, ship);    // object argument