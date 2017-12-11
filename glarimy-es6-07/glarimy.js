/*
 * File: glarimy-es6-07/glarimy.js
 * WEB: http://www.glarimy.com http://sversity.glarimy.com 
 * Code: https://github.com/glarimy 
 * YouTube Channel: sversity-glarimy
 * 
 * Objective: To demonstrate logic development
 * Author: krishna@glarimy.com
 * Since: December 2017
 */
"use strict";

class Employee{
	constructor(id, name){
		this.id = id;
		this.name = name;
	}

	toString(){
		return `${this.name} with id ${this.id}`;
	}
}

let _state = new WeakMap();

class Directory {
	constructor(){
		_state.set(this, {
			staff: new Map()
		});
	}
	add(emp){
		_state.get(this).staff.set(emp.id, emp);
	}

	find(id){
		return _state.get(this).staff.get(id);
	}

	search(key){
		let results = [];
		for (let employee of _state.get(this).staff.values()) {
			if(employee.name.includes(key))
				results.push(employee);
		}
		return results;
	}
}

let directory = new Directory();

directory.add(new Employee(123, "Krishna"));
directory.add(new Employee(234, "Krishna"));
directory.add(new Employee(345, "Krishna"));

let key = 234;
try{
	let employee = directory.find(key);
	console.log(`Found ${employee.name} with id ${key}`);
}catch(ex){
	console.log(ex);
}

key = "K";
let results = directory.search(key);
console.log(`Found ${results.join()} containing ${key}`);

