/*
 * File: glarimy-es6-03/glarimy.js
 * WEB: http://www.glarimy.com http://sversity.glarimy.com 
 * Code: https://github.com/glarimy 
 * YouTube Channel: sversity-glarimy
 * 
 * Objective: To demonstrate LET variables
 * Author: krishna@glarimy.com
 * Since: December 2017
 */
"use strict";

console.log("Before declaring");
//console.log(`Type of index: ${typeof(index)}`);
//console.log(`index: ${index}`);
console.log();

let index;
console.log("After declaring"); 
console.log(`Type of index: ${typeof(index)}`);
console.log(`index: ${index}`);
console.log();

index = 5;
console.log("After assigning");
console.log(`Type of index: ${typeof(index)}`);
console.log(`index: ${index}`);
console.log();

// let index;

index = "five";
console.log("After reassigning");
console.log(`Type of index: ${typeof(index)}`);
console.log(`index: ${index}`);
console.log();

{
	let index = 6; 
	console.log("Within a block");
	console.log(`Type of index: ${typeof(index)}`);
	console.log(`index: ${index}`);
	console.log();
}

console.log("Outside of the block");
console.log(`Type of index: ${typeof(index)}`);
console.log(`index: ${index}`);
console.log();
