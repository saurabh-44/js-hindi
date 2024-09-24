console.log(2 > 1);         // true
console.log(2 >= 1);        // true
console.log(2 < 1);         // false
console.log(2 == 1);        // false
console.log(2 != 1);        // true

console.log(true == 1);  // Output: true (true is converted to 1)

console.log(5 == '5');      // Output: true (because '5' is converted to number 5)
console.log("2" > 1);       // true
console.log("02" > 1);      // true

console.log(null > 0);      // false
console.log(null == 0);     // false
console.log(null == 1);     // false
console.log(null >= 0);     // true
console.log(null == undefined);  // Output: true (both are loosely considered "empty")

console.log(undefined == 0);  // false
console.log(undefined == 1);  // false
console.log(undefined > 0);   // false
console.log(undefined < 0);   // false

/*------------  === is used for strict equality comparison. It checks if two values are equal and of the same type.----------
=> No type coercion is done; the values must be exactly the same.                    */
console.log(5 === '5');   // Output: false (different types: number and string)
console.log(true === 1);  // Output: false (different types: boolean and number)
console.log(null === undefined);  // Output: false (different types)

