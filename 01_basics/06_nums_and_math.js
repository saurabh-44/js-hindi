/*--------------------------------------------Numbers--------------------------------------------*/
const score = 400
console.log(score);               // normal 400 will print

const balance = new Number(100)
console.log(balance);             // purely number will print 
console.log(balance.toString().length);
console.log(balance.toFixed(1));  // reutrn to one decimal place

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));        // approx 123.9 

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  // 10,00,000 

/*--------------------------------------------Maths--------------------------------------------*/
console.log(Math);                  // prototype
console.log(Math.abs(-4));          // 4
console.log(Math.round(4.6));       // 5 => round off
console.log(Math.ceil(4.2));        // 5 => greatest integer
console.log(Math.floor(4.9));       // 4 => lowest integer
console.log(Math.min(4, 3, 6, 8));  // 3 => minimum of given values
console.log(Math.max(4, 3, 6, 8));  // 8 => maxinmum of given values
         
console.log(Math.random());               // random values will generate
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
