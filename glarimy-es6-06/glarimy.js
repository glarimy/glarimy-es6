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
		fact = fact * i;
}

console.log(`Factorial of ${value} is ${fact}`);