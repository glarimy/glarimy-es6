class Calculator {
    constructor() {
        this.add = (n1, n2) => { 
            return new Promise(function(resolve, reject){
                resolve(n1+n2);
            })
        }
        this.multiply = (n1, n2) => { return n1 * n2}
    }
}

let calc = new Calculator();
calc.add(23, 45).then(sum => console.log(`sum: ${sum}`));
console.log(`23 x 45 = ${calc.multiply(23, 45)}`);