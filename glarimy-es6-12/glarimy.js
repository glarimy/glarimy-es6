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

try {
	let result = dir.find("Mohan");
	Utils.print(result);
	result = dir.find("Koyya");
	Utils.print(result);
}catch(e){
	Utils.print(e);
}