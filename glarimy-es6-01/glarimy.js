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

"use strict";

// company = "Glarimy Technology Services";

const id = 22061972;
const name = 'Krishna Mohan ' +  "Koyya";
const regular = true;
const salary = 5.67;

console.log("RESULTS\n");
console.log("Type of id: " + typeof(id));
console.log("Type of name: " + typeof(name));
console.log("Type of regular: " + typeof(regular));
console.log("Type of salary: " + typeof(salary));
console.log("Type of console: " + typeof(console));
console.log("Type of console.log() : " + typeof(console.log));

console.log(`
${name} is a regular employee? ${regular}
His employee ID is ${id} and draws Rs. ${salary} LPA
`);

// salary = 6.78;