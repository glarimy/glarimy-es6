class Calculator {
    constructor() {
        this.add = (n1, n2) => { return n1 + n2 }
        this.multiply = (n1, n2) => { return n1 * n2}
    }
}

let calc = new Calculator();
console.log(`23 + 45 = ${calc.add(23, 45)}`);
console.log(`23 x 45 = ${calc.multiply(23, 45)}`);