const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]
marvel_heros.push(dc_heros)

console.log(marvel_heros);          // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] => dc_heros insert as an array to marvel_heros
console.log(marvel_heros[3][1]);    // flash

const allHeros = marvel_heros.concat(dc_heros)   
console.log(allHeros);              // here dc_heros elements will insert into marvel_heros.


/*---------------------------------The spread operator (...)------------------------------------------------------
=> expands the elements of an array. It takes the individual elements of both marvel_heros and dc_heros and combines them into one array.     */
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

/*-----------------------------------------Example----------------------------------------*/
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)          // combine all elements within one array
console.log(real_another_array);

console.log(Array.isArray("saurabh"))      // false => check given input is array or not 
console.log(Array.from("saurabh"))         // form array from given string
console.log(Array.from({name: "saurabh"})) // This line is an interesting case. It attempts to create an array from an object with a name property.
/* Array.from() method is designed to work with iterable objects (like arrays and strings), 
it can also handle objects that have a length property and can be iterated over using a for...of loop. the name property of the object does not have a length property, 
so the Array.from() method will treat it as an empty iterable.*/


/*-----------------------------------------Example-2----------------------------------------*/
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));       // create an array
