/*-----------------------------------------------Dates-------------------------------------------------*/
let myDate = new Date()
console.log(myDate.toString());               // today's date with time
console.log(myDate.toDateString());           // only date
console.log(myDate.toLocaleString());         // normal date with time
console.log(typeof myDate);                   // object


/*-----------------------------------------------Example-1-------------------------------------------------*/
let myCreatedDate = new Date(2023, 0, 23)              // 23/1/2023, 12:00:00 am
let myCreatedDate = new Date(2023, 0, 23, 5, 3)        // 23/1/2023, 5:03:00 am
let myCreatedDate = new Date("2023-01-14")             // 14/1/2023, 5:30:00 am
let myCreatedDate = new Date("01-14-2023")             // 14/1/2023, 12:00:00 am
console.log(myCreatedDate.toLocaleString());


/*-----------------------------------------------Example-2-------------------------------------------------*/
let myTimeStamp = Date.now()              
console.log(myTimeStamp);                   // 1727189075250
console.log(myCreatedDate.getTime());       // 1674412200000
console.log(Math.floor(Date.now()/1000));   // 1727189075


/*-----------------------------------------------Example-3-------------------------------------------------*/
let newDate = new Date()
console.log(newDate);                    // 2024-09-24T14:46:09.341Z
console.log(newDate.getMonth() + 1);     // 9
console.log(newDate.getDay());           // 2

newDate.toLocaleString('default', {
    weekday: "long",
})

