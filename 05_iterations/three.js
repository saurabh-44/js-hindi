/*-----------------------------------for of------------------------------------/
=> is used to iterate over iterable objects like arrays, strings, maps, sets, etc.
=> Iterates over each value without returning a new array.               */

// ["", "", ""]
// [{}, {}, {}]

/*-----------------------------------Example-1------------------------------------*/
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {      // arr indicates that where we want to perform 
    console.log(num);
}


/*-----------------------------------Example-2------------------------------------*/
const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}


/*-----------------------------------Maps------------------------------------/
=>  object which holds key-value pairs and remembers the original insertion order of the keys.
=>  is used to apply a function to each element of an array and return a new array with the results. 
=>  It transforms each element in the array using the callback function and returns a new array of the same length.      */
const map = new Map()
map.set('IN', "India")    // key => IN, value => India
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")    // unique entries will there with order and it will not consider because the key is already entered
console.log(map);         // will print as an object

for (const [key, value] of map) {   // print with key value pair
    console.log(key, ':-', value);
}


/*-----------------------------Map with object-------------------------------*/
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
for (const [key, value] of myObject) {       // object is not iteratable with map function
    console.log(key, ':-', value);
}
