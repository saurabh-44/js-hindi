/*-------------------------------------map-----------------------------------------
=>  Used to transform the elements of an array by applying a function to each element, returning a new array with the transformed values.
=> The function you provide as an argument is applied to each element of the array, and the result is stored in a new array.
=>  It is used for modifying arrays based on a function and does not modify the original array.*/

const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumers.map( (num) => { return num + 10})    => inline method

const newNums = myNumers
                .map((num) => num * 10 )       // 1st it will execute 
                .map( (num) => num + 1)        // after that this will execute
                .filter( (num) => num >= 40)
console.log(newNums);
