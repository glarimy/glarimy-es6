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

import Contact from "./Contact";
import Directory from "./Directory";
import * as Utils from "./Utils";

let dir = new Directory();
let krishna = new Contact(22061972, "Krishna");
let mohan = new Contact(23101987, "Mohan");
let koyya = new Contact(22071971, "Koyya");

dir.add(krishna);
dir.add(mohan);
dir.add(koyya);

console.log("inited");

window.addEventListener("load", function(){
	document.getElementById("btn").addEventListener("click", function(e){
		let key = document.getElementById("eid").value;
		console.log(key);
		try{
			let result = dir.find(key);
			console.log(result.name);
			alert(`Found: ${result.name}`);
		}catch(e){
			console.log(e.message);
			alert(`${e.message}`);
		}
	})
})