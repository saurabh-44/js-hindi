"use strict"; // treat all JS code as newer version

console.log("Hello bro");    // automatically new line come after printing
console.log(3+4);            // addition => 7
console.log("3+4",3,"4"+5);  // 3+4 3 45

let a = 8;
console.log(`the value of a is ${a}`);

console.log(3 
    +
     3) // code readability should be high


const accountId = 144553        // once we declare variable with const then we can't change the value again
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"   // Prefer not to use var because of issue in block scope and functional scope
accountCity = "Jaipur"
let accountState;    // undefined

accountEmail = "hc@hc.com"      // can redeclare 
accountPassword = "21212121"    // can redeclare
accountCity = "Bengaluru"       // can redeclare

// will print in table formate
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
