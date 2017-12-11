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

console.log("Before declaring");
console.log(`Type of index: ${typeof(index)}`);
console.log(`index: ${index}`);
console.log();

console.log("After declaring");
var index;
console.log(`Type of index: ${typeof(index)}`);
console.log(`index: ${index}`);
console.log();

console.log("After assigning");
index = 5;
console.log(`Type of index: ${typeof(index)}`);
console.log(`index: ${index}`);
console.log();

console.log("After re-declaring");
var index;
console.log(`Type of index: ${typeof(index)}`);
console.log(`index: ${index}`);
console.log();

console.log("After reassigning");
var index = "five";
console.log(`Type of index: ${typeof(index)}`);
console.log(`index: ${index}`);
console.log();

{
	var index = 6; 
	console.log("Within a block");
	console.log(`Type of index: ${typeof(index)}`);
	console.log(`index: ${index}`);
	console.log();
}

console.log("Outside of the block");
console.log(`Type of index: ${typeof(index)}`);
console.log(`index: ${index}`);
console.log();
