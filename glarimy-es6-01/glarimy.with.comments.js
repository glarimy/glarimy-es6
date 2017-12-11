/*
 * File: glarimy-es6-01/glarimy.js
 * WEB: http://www.glarimy.com http://sversity.glarimy.com 
 * Code: https://github.com/glarimy 
 * YouTube Channel: sversity-glarimy
 * 
 * Objective: To demonstrate strict, comments, constants and console output
 * Author: krishna@glarimy.com
 * Since: December 2017
 */

/*
 * The USE STRICT directive catches common bloopers in the code.
 * It's always better to switch it on.
 */
"use strict";

// company = "Glarimy Technology Services"; // undeclared varaibles are not acceptable in strict mode

// Single-line comments are allowed with usual meaning.
// Multi-line comments are also allowed with the usual meaning.

// CONST signifies that its value can not be changed.
// The integer range is 53 bit
const id = 22061972;

// Strings are enclosed either in sinqle or double quotes. There is no difference!
// Single-quoted strings can nest double-quoted strings and vice-versa.
// Strings are concatanated using + opertor.
const name = 'Krishna Mohan ' +  "Koyya";

// The BOOLEAN FALSE is false, 0, -0, null, undefined, NaN, ''
// The BOOLEAN TRUE is everything else
const regular = true;

// Both integral and floating point values are treated as just numbers.
const salary = 5.67;

// CONSOLE.LOG() is used to print logs on to the console
console.log("RESULTS\n");

/*
 * Supported basic types are String, boolean and number.
 * Other types supported are objects and functions.
 */
console.log("Type of id: " + typeof(id));
console.log("Type of name: " + typeof(name));
console.log("Type of regular: " + typeof(regular));
console.log("Type of salary: " + typeof(salary));
console.log("Type of console: " + typeof(console));
console.log("Type of console.log() : " + typeof(console.log));

// The strings within `` can be evaluated using ${} expressions.
// Even the newlines are also retained.
console.log(`
${name} is a regular employee? ${regular}
His employee ID is ${id} and draws Rs. ${salary} LPA
`);

// salary = 6.78; // values of constants can not be re-assigned
