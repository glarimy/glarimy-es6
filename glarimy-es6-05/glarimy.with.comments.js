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

/*
 * IF statement of ES6 is no different from the same in other languages.
 * An IF statement accepts a boolean expression and a TRUE clause.
 * It optionally also accepts a FALSE clause with ELSE.
 * There can be IF statements nested.
 * Milti-line clasuses must be enclosed within blocks.
 * A speacial === operator for value checks along with the types.
 */

let value = "8"; //try with other values like 9, nine, 9.5

// An IF statement only with a single-line TRUE clause
if(typeof(value) != "number")
	value = Number.parseInt(value);

// An IF statement with a multi-line TRUE clause.
if(Number.isNaN(value)){
	console.log(`${value} is not a number`);	
	return;	
}

// An IF statement with ELSE
if(Number.isInteger(value)){
	// TRUE clause
	// A nested IF statement with ELSE
	if(value%2 == 0)
		console.log(`${value} is even`); // TRUE clause
	else
		console.log(`${value} is odd`); // FALSE caluse
} else
	console.log(`${value} is not an integer`); // FALSE clause
