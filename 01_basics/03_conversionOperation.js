/*--------------------------------------check type---------------------------------------*/
let score = "saurabh"
console.log(typeof score);
console.log(typeof(score));           // both way we can check the type


/*--------------------------------------type conversion----------------------------------*/
// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0
// 1 => true; 0 => false; "saurabh" => true
// "" => false

let valueInNumber = Number(score)     // try to conver into the number
console.log(typeof valueInNumber);    // Number
console.log(valueInNumber);           // NaN

let isLoggedIn = "saurabh"
let booleanIsLoggedIn = Boolean(isLoggedIn)   
console.log(booleanIsLoggedIn);              // true
console.log(typeof booleanIsLoggedIn);       // boolean 

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);                 // 33
console.log(typeof stringNumber);          // string

/*--------------------------------------operations----------------------------------*/
let value = 3
let negValue = -value
console.log(value);         //  3
console.log(negValue);      // -3
console.log(2**3);          // 2*2*2 = 8
console.log(2/3);           // 0.6666
console.log(2%3);           // 2

let str1 = "hello"
let str2 = " saurabh"
let str3 = str1 + str2
console.log(str3);       // hello saurabh

console.log("1" + 2);      // 12
console.log(1 + "2");      // 12 
console.log("1" + 2 + 2);  // 122 => starts with string that's why
console.log(1 + 2 + "2");  // 32  => starts with number
console.log( (3 + 4) * 5 % 3);  // 2 => operator precedence with left to right

console.log(+true);        // 1
console.log(+"");          // 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
console.log(num1)         // 4

let gameCounter = 100
++gameCounter;
console.log(gameCounter);   // 101

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
