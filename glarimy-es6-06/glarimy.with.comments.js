/*
 * File: glarimy-es6-06/glarimy.js
 * WEB: http://www.glarimy.com http://sversity.glarimy.com 
 * Code: https://github.com/glarimy 
 * YouTube Channel: sversity-glarimy
 * 
 * Objective: To demonstrate logic development using FOR statement 
 * Author: krishna@glarimy.com
 * Since: December 2017
 */
"use strict";

/*
 * The FOR statement of ES6 is same as that of other languages.
 * Both let or var can be used to declare the block-scoped variables with in FOR.
 * However, LET variable gets recreated in each of the iteration.
 */

let value = 7;
let fact;

if(typeof(value) != "number" || Number.isInteger(value) == false || value < 0){
	console.log("Sorry, this algorithm is only for positive integers");
	return;
}

if (value === 0 || value === 1)
    fact = 1;
else {
	fact = value;
	for (let i=fact-1; i >= 1; i--)
		fact = fact * i; // The block-scoped i gets recreated with the new value, in every iteration.
}

console.log(`Factorial of ${value} is ${fact}`);