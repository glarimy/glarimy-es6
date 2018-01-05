/*
 * File: glarimy-es6-06/glarimy.js
 * WEB: http://www.glarimy.com http://sversity.glarimy.com 
 * Code: https://github.com/glarimy 
 * YouTube Channel: sversity-glarimy
 * 
 * Objective: To demonstrate Modules
 * Author: krishna@glarimy.com
 * Since: December 2017
 */
"use strict";

import Calculator from "./Calculator";

addEventListener("load", function(){
	document.getElementById("addBtn").addEventListener("click", function(e){
		let first = document.getElementById("addFirst").value;
		let second = document.getElementById("addSecond").value;

		if(first == undefined || first.trim().length == 0 || Number.parseFloat(first) == NaN){
			document.getElementById("addError").innerHTML = "Invalid first value";
			return;
		}else{
			document.getElementById("addError").innerHTML = "";
		}
		if(second == undefined || second.trim().length == 0 || Number.parseFloat(second) == NaN){
			document.getElementById("addError").innerHTML = "Invalid second value";
			return;
		}else{
			document.getElementById("addError").innerHTML = "";
		}
		let sum = Calculator.add(Number.parseFloat(first), Number.parseFloat(second));
		document.getElementById("sum").textContent = sum;
	});
	document.getElementById("multiplyBtn").addEventListener("click", function(e){
		let first = document.getElementById("multiplyFirst").value;
		let second = document.getElementById("multiplySecond").value;

		if(first == undefined || first.trim().length == 0 || Number.parseFloat(first) == NaN){
			document.getElementById("multiplyError").innerHTML = "Invalid first value";
			return;
		}else{
			document.getElementById("multiplyError").innerHTML = "";
		}
		if(second == undefined || second.trim().length == 0 || Number.parseFloat(second) == NaN){
			document.getElementById("multiplyError").innerHTML = "Invalid second value";
			return;
		}else{
			document.getElementById("multiplyError").innerHTML = "";
		}
		let product = Calculator.multiply(Number.parseFloat(first), Number.parseFloat(second));
		document.getElementById("product").textContent = product;
	});
});