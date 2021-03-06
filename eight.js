let directory = {
    employees: [],
    add: function(e){
        this.employees.push(e);
    },
    find: function(eid){
        return this.employees.find(e => e.eid == eid);
    },
    findByName: function(name){
        return this.employees.filter(e => e.name == name);
    }
}

directory.add({
    eid: 1,
    name: "Krishna"
});
directory.add({
    eid: 2,
    name: "Mohan"
});

console.log(directory.find(1));
console.log(directory.findByName('Mohan'));