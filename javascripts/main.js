//test to confirm that this .js file is linked to the index.html file
console.log("hello console!");

// this object will be used as the single argument passed into the tree function
var treeObject = {
	height: 0,
	whichChar: 0
};

// Grow Tree button click event triggers the function
var button = document.getElementById("grow")
button.addEventListener("click", treeFunction)

//Tree Grow Function
function treeFunction(treeObject){

treeObject.height = document.getElementById("getHeight").value;
// console.log("treeObject.height", treeObject.height);
treeObject.whichChar = document.getElementById("whichChar").value;


// console.log("whichChar", treeObject.whichChar);
var spaceLoopMath = treeObject.height - 1;
var charLoopMath = 1;

for (i=0; i< treeObject.height; i++ ) {
//intial counter variables

var spaces = " ".repeat(spaceLoopMath);
var chars = treeObject.whichChar.repeat(charLoopMath);
var treeGrow = spaces + chars;
console.log(treeGrow);

spaceLoopMath -= 1;
charLoopMath += 2;
};

};

