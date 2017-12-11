/*
 * File: glarimy-es6-06/glarimy.js
 * WEB: http://www.glarimy.com http://sversity.glarimy.com 
 * Code: https://github.com/glarimy 
 * YouTube Channel: sversity-glarimy
 * 
 * Objective: To demonstrate Promises 
 * Author: krishna@glarimy.com
 * Since: December 2017
 */
"use strict";

function countdown(number){
	return new Promise(function(resolve, reject){
		if(number < 0){
			reject("invalid value");
		}else{
			while(number > 0){
				number--;
			}
			resolve("done");
		}
	});
}

countdown(100000).then(s => console.log("first-countdown: " + s)).catch(e => console.log("first-cuntdown: " + e));
console.log("first contdown started...you will see the result once it is completed");

countdown(-200).then(s => console.log("second-countdown: " + s)).catch(e => console.log("second-cuntdown: " + e));
console.log("second contdown started...you will see the result once it is completed");

Promise.all([
    countdown(10000000),
    countdown(250),
])
.then(([s1, s2]) => {
    console.log("first: " + s1);
    console.log("second: " + s2);
})
.catch(err => {
	console.log("Error: " + err );
});