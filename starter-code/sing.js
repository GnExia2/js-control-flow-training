console.log("sing.js loaded");

/*
Sing!

Work in the sing.js file.

    Write code that console logs the "Bottles of beer on the wall" song:

     5 bottles of beer on the wall,
     5 bottles of beer!
     Take one down and pass it around,
     4 bottles of beer on the wall!

    Bonus: fix "1 bottles of beer". It should say "1 bottle of beer".

    Bonus: change "0 bottles..." to "No more bottles...".

    Bonus: Use a JavaScript prompt to ask the user how many verses they want to hear.
*/


var numBottles = prompt("How many bottles of beer on the wall?");

var bottles = "bottles";
while (numBottles > 0){
	console.log(numBottles + " " + bottles + " of beer on the wall,");
	console.log(numBottles + " " +  bottles + " of beer");
	console.log("Take one down and pass it around,");
	numBottles = numBottles - 1;
	if (numBottles === 1){
		bottles = "bottle"
	}
	if (numBottles === 0){
		console.log("No more bottles of beer on the wall!");
	} else {
		console.log(numBottles + " " + bottles + " of beer on the wall!");
	}
}
