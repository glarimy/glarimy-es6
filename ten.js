class Directory {
    constructor() {
        this.employees = [];
        this.add = e => { if(e instanceof Employee)this.employees.push(e) };
        this.find = eid => { return this.employees.find(e => e.eid == eid) };
        this.findByName =  name => {return this.employees.filter(e => e.name == name)}
    }
}
class Employee {
    constructor(eid, name) {
        this.eid = eid;
        this.name = name;
    }
}
let directory = new Directory();
let first = new Employee(1, 'Krishna');
let second = new Employee(2, 'Mohan');
directory.add(first);
directory.add(second);
console.log(directory.find(1));
console.log(directory.findByName('Mohan'));