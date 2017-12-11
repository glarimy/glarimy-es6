/*
 * File: glarimy-es6-05/glarimy.js
 * WEB: http://www.glarimy.com http://sversity.glarimy.com 
 * Code: https://github.com/glarimy 
 * YouTube Channel: sversity-glarimy
 * 
 * Objective: To demonstrate logic development using IF statement 
 * Author: krishna@glarimy.com
 * Since: December 2017
 */
"use strict";

let value = "8";

if(typeof(value) != "number")
	value = Number.parseInt(value);

if(Number.isNaN(value)){
	console.log(`${value} is not a number`);	
	return;	
}

if(Number.isInteger(value)){
	if(value%2 == 0)
		console.log(`${value} is even`);
	else
		console.log(`${value} is odd`);
} else
	console.log(`${value} is not an integer`);
	