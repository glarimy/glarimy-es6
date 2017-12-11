/*
 * File: glarimy-es6-04/glarimy.js
 * WEB: http://www.glarimy.com http://sversity.glarimy.com 
 * Code: https://github.com/glarimy 
 * YouTube Channel: sversity-glarimy
 * 
 * Objective: To demonstrate data handling
 * Author: krishna@glarimy.com
 * Since: December 2017
 */
"use strict";

let principal = "Rs. 734";
let time = "25 Years";
let rate = "2.5%";

console.log("Initial Condition");
console.log(`Principal: ${principal} and it is a ${typeof(principal)}`); // string
console.log(`Time: ${time} and it is a ${typeof(time)}`); // string
console.log(`Rate: ${rate} and it is a ${typeof(rate)}`); // string
console.log();

principal = Number.parseInt(principal); // Fails since the string doesn't start with number
time = Number.parseInt(time); // 25
rate = Number.parseFloat(rate); // 2.5

console.log("After Parsing");
console.log(`Principal: ${principal} and it is a ${typeof(principal)}`); // NaN and number
console.log(`Time: ${time} and it is a ${typeof(time)}`); // 25 and number
console.log(`Rate: ${rate} and it is a ${typeof(rate)}`); // 2.5 and number
console.log();

principal = "734";
principal = Number.parseInt(principal); // 734

console.log("After Correction");
console.log(`Principal: ${principal} and it is a ${typeof(principal)}`); // 734 and number
console.log();

let interest = principal*time*rate/100;
console.log("After Computation");
console.log(`Interest: ${interest} and it is a ${typeof(interest)}`); // 458.75 and number
console.log(`Is interest an integer? ${Number.isInteger(interest)}`); // false
console.log();

interest = Math.round(interest);
console.log("After Rounding-Off");
console.log(`Interest: ${interest} and it is a ${typeof(interest)}`); // 459 amd number
console.log(`Is interest an integer? ${Number.isInteger(interest)}`); // true
console.log();

interest = interest.toString();
console.log("After Stringification");
console.log(`Interest: ${interest} and it is a ${typeof(interest)}`); // string
console.log();
