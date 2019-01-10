const p = 100;
const t = 10;
let r;

if(p < 100 && t <= 12)
    r = 2;
else
    r = 3;

let i = p*t*r/100;

console.log(`Interest: ${i}`);