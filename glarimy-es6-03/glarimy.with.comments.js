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
//console.log(`Type of index: ${typeof(index)}`); // Let variables are not hoisted, hence won/t work
//console.log(`index: ${index}`); // Let variables are not hoisted, hence won't work
console.log();

let index;
console.log("After declaring"); 
console.log(`Type of index: ${typeof(index)}`); // undefined, since it is only declared
console.log(`index: ${index}`); // undefined, since it is only declared
console.log();

index = 5;
console.log("After assigning");
console.log(`Type of index: ${typeof(index)}`); // number
console.log(`index: ${index}`); // 5
console.log();

// let index; // Re-declaring LET variables is not accepted, won't work

index = "five";
console.log("After reassigning");
console.log(`Type of index: ${typeof(index)}`); // string
console.log(`index: ${index}`); // five
console.log();

// A new block with { }
{
	let index = 6; // Let variables are block-scoped. This INDEX is defferent from the outer INDEX
	console.log("Within a block");
	console.log(`Type of index: ${typeof(index)}`); // number
	console.log(`index: ${index}`); // 6
	console.log();
}

console.log("Outside of the block");
console.log(`Type of index: ${typeof(index)}`); // still string
console.log(`index: ${index}`); // still five
console.log();
