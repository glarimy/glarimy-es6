"use strict";

let _no = 0;
let _state = new WeakMap();

class CustomerDetail{
	constructor(name, phoneNumber){
		this.name = name;
		this.phoneNumber = phoneNumber;
	}
}

class Account {
	constructor(customer){
		this.customer = customer;
		_no++;
		this.no = _no;
		this.balance = 0;
	}
}

class Bank {
	constructor(){
		_state.set(this, {
			ledger: []
		});
		console.log(_state.get(this));
	}

	openAccount(customer){
		return new Promise((fs, fe)=>{
			if(customer == null)
				fe("Invalid customer details");
			let account = new Account(customer);
			_state.get(this).ledger.push(account);
			fs({
				name: customer.name,
				no: account.no
			});
		});
	}
}

let bank = new Bank();
let customer1 = new CustomerDetail("Krishna", 1245);
let customer2 = new CustomerDetail("Mohan", 2345);
let customer3 = new CustomerDetail("Koyya", 4567);

bank.openAccount(customer1)
.then(res => console.log(`Opened account ${res.no} for ${res.name}`))
.catch(error => console.log(error));

bank.openAccount(customer2)
.then(res => console.log(`Opened account ${res.no} for ${res.name}`))
.catch(error => console.log(error));

bank.openAccount(customer3)
.then(res => console.log(`Opened account ${res.no} for ${res.name}`))
.catch(error => console.log(error));
