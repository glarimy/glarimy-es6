/*
 * File: glarimy-es6-02/glarimy.js
 * WEB: http://www.glarimy.com http://sversity.glarimy.com 
 * Code: https://github.com/glarimy 
 * YouTube Channel: sversity-glarimy
 * 
 * Objective: To demonstrate VAR variables
 * Author: krishna@glarimy.com
 * Since: December 2017
 */
"use strict";

// The VAR variables are declared in the global scope.
// The VAR variables are are hoisted.
console.log("Before declaring");
console.log(`Type of index: ${typeof(index)}`); // undefined
console.log(`index: ${index}`);	// undefined
console.log();

console.log("After declaring");
var index;	// gets hoisted
console.log(`Type of index: ${typeof(index)}`); // still undefined
console.log(`index: ${index}`);	// still undefined
console.log();

console.log("After assigning");
index = 5;	// no-longer undefined after the assignment
console.log(`Type of index: ${typeof(index)}`); // number
console.log(`index: ${index}`);	// 5
console.log();

console.log("After re-declaring");
var index;	// re-declaration has no impact
console.log(`Type of index: ${typeof(index)}`); // number
console.log(`index: ${index}`);	// 5
console.log();

console.log("After reassigning");
var index = "five";	// re-dclaration alongwith assignment changes the type and value
console.log(`Type of index: ${typeof(index)}`); // string
console.log(`index: ${index}`);	// five
console.log();

// A new block with { }
{
	var index = 6; // The INDEX is already a global variable, hence its the same 
	console.log("Within a block");
	console.log(`Type of index: ${typeof(index)}`); // number
	console.log(`index: ${index}`); // 6
	console.log();
}

console.log("Outside of the block");
console.log(`Type of index: ${typeof(index)}`); // number
console.log(`index: ${index}`); // 6
console.log();
