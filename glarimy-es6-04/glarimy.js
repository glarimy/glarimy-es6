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
console.log(`Principal: ${principal} and it is a ${typeof(principal)}`);
console.log(`Time: ${time} and it is a ${typeof(time)}`);
console.log(`Rate: ${rate} and it is a ${typeof(rate)}`);
console.log();

principal = Number.parseInt(principal);
time = Number.parseInt(time);
rate = Number.parseFloat(rate);

console.log("After Parsing");
console.log(`Principal: ${principal} and it is a ${typeof(principal)}`);
console.log(`Time: ${time} and it is a ${typeof(time)}`);
console.log(`Rate: ${rate} and it is a ${typeof(rate)}`);
console.log();

principal = "734";
principal = Number.parseInt(principal);

console.log("After Correction");
console.log(`Principal: ${principal} and it is a ${typeof(principal)}`);
console.log();

let interest = principal*time*rate/100;
console.log("After Computation");
console.log(`Interest: ${interest} and it is a ${typeof(interest)}`);
console.log(`Is interest an integer? ${Number.isInteger(interest)}`);
console.log();

interest = Math.round(interest);
console.log("After Rounding-Off");
console.log(`Interest: ${interest} and it is a ${typeof(interest)}`);
console.log(`Is interest an integer? ${Number.isInteger(interest)}`);
console.log();

interest = interest.toString();
console.log("After Stringification");
console.log(`Interest: ${interest} and it is a ${typeof(interest)}`);
console.log();