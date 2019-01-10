let rectangle = { 
    length: 10,
    breadth: 15
}

let student = {
    sno: 1,
    name: 'asdfaf',
    courses: [123, 456, 789],
    passed: true,
    print: function(){
        console.log(`S.No: ${this.sno} 
Name: ${this.name}`);
    },
    family: {
        mother: "asdf",
        father: "adfasdfasf",
        siblings: [{
            name: "adfaf",
            phone: 23424234
        }, {
            name: "oioioi",
            phone:345
        }]
    }
}

student.print();