/*--------------------------------------------strings-----------------------------------------------
=> A string is a sequence of characters used to represent text. In JavaScript, strings are immutable (once created, they cannot be changed) 
=> can be defined using single quotes ('), double quotes ("), or template literals (`).*/
const name = "saurabh"
const repoCount = 50
console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


/*--------------------------------------------Prototypes-----------------------------------------------*/
const gameName = new String('saurabh-sy-com')  // 2nd method to declaration
console.log(gameName[0]);
console.log(gameName.__proto__);              // in browser console there are so many prototypes in the string

console.log(gameName.length);                
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
console.log(gameName.split('-'));


/*--------------------------------------------Example-----------------------------------------------*/
const newString = gameName.substring(0, 4)   // return index from 0 to 3 
console.log(newString);

const anotherString = gameName.slice(-4, -2)  // return -c => 4th element from last to 2+1 element from last
console.log(anotherString);

const newStringOne = "   saurabh    "
console.log(newStringOne);
console.log(newStringOne.trim());         // remove spaces from start

const url = "https://saurabh.com/saurabh%20yadav"           
console.log(url.replace('%20', '-'))                 // https://saurabh.com/saurabh-yadav 
console.log(url.includes('sundar'))                  // it checks whether the substring it present in main string or not
