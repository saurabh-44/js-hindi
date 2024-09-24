"use strict";          // treat all JS code as newer version
alert( 3 + 3)          // we are using nodejs, not browser

/*  Primitive datatypes => 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt    
    number => 2 to power 53
    bigint => 3456543576654356754n
    string => ""
    boolean => true/false
    null => standalone value
    undefined => 
    symbol => unique    */

const score = 100
console.log(typeof score);  // Number
const scoreValue = 100.3    // Number
const isLoggedIn = false    // Boolean
const outsideTemp = null    // Object
let userEmail;              // undefined
const bigNumber = 3456543576654356754n

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);         // checks value and datatypes both
console.log(typeof anotherId);

// object
console.log(typeof undefined); // undefined
console.log(typeof null);      // object


/* Reference (Non primitive) => Array, Objects, Functions */
const heros = ["shaktiman", "naagraj", "doga"];    // Array

let myObj = {                                      // Object
    name: "hitesh",
    age: 22,
}

const myFunction = function(){                     // Function
    console.log("Hello world");
}

// https://262.ecma-international.org/5.1/#sec-11.4.3
