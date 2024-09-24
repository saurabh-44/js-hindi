/*---------------------------------for...in-------------------------------------
=> The for...in loop is used to iterate over the enumerable properties (keys) of an object and index of an array. 
=> Best suited for objects when you want to loop through their keys.            */
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}


/*-------------------------------for...in with array-----------------------------------*/
const programming = ["js", "rb", "py", "java", "cpp"]
for (const key in programming) {
    console.log(programming[key]);
}


/*-------------------------------for...in with Map object---------------------------------*/
const map = new Map()      // is not iteratable with Map object
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
// }
