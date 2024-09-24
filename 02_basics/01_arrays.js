/*------------------------------------------------Array-------------------------------------------*/
const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(1, 2, 3, 4)         // 2nd declaration 
const myHeors = ["shaktiman", "naagraj"]     
console.log(myArr[1]);


/*-----------------------------------------Array-methods-----------------------------------------*/
myArr.push(6)                     // 6 will insert at last position
myArr.push(7)                     // 7 will insert after the element 6
myArr.pop()                       // 7 will remove from last position
myArr.unshift(9)                  // 9 will add to the first position 
myArr.shift()                     // 9 will remove from firt position

console.log(myArr.includes(9));   // false => check 9 includes within array or not
console.log(myArr.indexOf(3));    // 3 => index of element 3

const newArr = myArr.join()       // elements of myArr will join in newArr
console.log(myArr);
console.log( newArr);


/*-----------------------------------------slice-splice-----------------------------------------*/
const myArr1 = [0, 1, 2, 3, 4, 5]
console.log("A ", myArr1);            // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)        
console.log(myn1);                    // [ 1, 2 ]  => slice with index 1 to 2 
console.log("B ", myArr);             // B  [ 0, 1, 2, 3, 4, 5 ]  => myArr will not change

const myn2 = myArr.splice(1, 3)       
console.log(myn2);                    // [ 1, 2, 3 ]  => include elements from index 1 to 3
console.log("C ", myArr);             // C  [ 0, 4, 5 ] => org array will affect by splice 

