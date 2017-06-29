console.log("sing.js loaded");


var BottleNum = prompt("How many bottles of beer on the wall?");

var bottles = "bottles";
while (BottleNum > 0){
	console.log(BottleNum + " " + bottles + " of beer on the wall,");
	console.log(BottleNum + " " +  bottles + " of beer");
	console.log("Take one down and pass it around,");
	BottleNum = BottleNum - 1;
	if (numBottles === 1){
		bottles = "bottle"
	}
	if (BottleNum === 0){
		console.log("No more bottles of beer on the wall!");
	} else {
		console.log(BottleNum + " " + bottles + " of beer on the wall!");
	}
}
