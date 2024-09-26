const promiseOne = new Promise(function(resolve, reject){         // promise is an object
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()      // connect to .then => that means first async task will comlete then promise will come
    }, 1000)
})

promiseOne.then(function(){          // .then is directly connected to the resolve
    console.log("Promise consumed");
})


// 2nd method
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){                                         // it is directly call 
    console.log("Async 2 resolved");
})


// 3rd example in which resolve will send data and .then will take the data
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){                // will take the data from username
    console.log(user);
})


// 4th example
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {                  // will take value from just upper side 
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))     // at the end conversation



// 5th
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){         // 2nd method to take value
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// Example
async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()


// fetch 2nd method => fetch api was there but before 2022 it was not merge with node, it is the global fetch() method startst the promise of fetching a resource
// from the network returning a promise which js fulfilled once the response is available.
// fetch has special call back task queue known as microtask queue which will execute before async await
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.
