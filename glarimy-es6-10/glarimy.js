/*
 * File: glarimy-es6-06/glarimy.js
 * WEB: http://www.glarimy.com http://sversity.glarimy.com 
 * Code: https://github.com/glarimy 
 * YouTube Channel: sversity-glarimy
 * 
 * Objective: To demonstrate logic development using FOR statement 
 * Author: krishna@glarimy.com
 * Since: December 2017
 */
"use strict";

class Person {
	constructor(name, email){
		this.name = name;
		this.email = email;
	}

	print(){
		console.log(`${this.name} : ${this.email}`);
	}
}

class Employee extends Person {
	constructor(id, contact){
		super(contact.name, contact.email);
		this.id = id;
	}

	print(){
		console.log(`${this.id}`);
		super.print();
	}
}


let _state = new WeakMap();

class Directory {
	constructor(){
		_state.set(this, {
			staff: {}
		});
	}
	add(emp){
		_state.get(this).staff[emp.id] = emp;
	}

	find(id){
		return _state.get(this).staff[id];
	}
}

class Calculator {
	static add(first, second){
		console.log(`${first} + ${second} = ${first+second}`);
	}
}


let person = new Person("Krishna Mohan Koyya", "krishna@glarimy.com");
person.print();

let employee = new Employee(22061971, person);
employee.print();

let dir = new Directory();
dir.add(employee);
dir.find(22061971).print();

Calculator.add(12,35);