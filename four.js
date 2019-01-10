"use strict"

let inputdata = [1, 2, 3, 4, 5];
data = [12, 13, 14, ...data];
//data.forEach(a => console.log(a));
let result = data.map(a => a+a);
//result.forEach(v => console.log(v));

let evenData = data.filter(element => element%2 == 0);

evenData.forEach(element => console.log(element));