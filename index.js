// Promises
// state -  
      // Pending : Initially when the executor function starts the execution 
      // fulfilled : when the promise is resolved.
      // rejected : when the promise is rejected.

//result - 
        //undefined : Initially when the state is pending.
        //value : When resolve(value) is called.
        //error : when reject(error) is called.


// when promise - is created for the first time it state will be pending
/*
let promise = new Promise(function(resolve, reject){

});
*/

//Executor function - handles the asynchronous operation
// resolve and reject - both are callback functions provided by javascript
/*
function(resolve, reject){
  // Logic goes here
  //you won't be calling both resolve and reject in subsequent manner maybe either one of them 
  // but you may conditionally call both resolve or reject
}
*/

// How promises are resolved and rejected
/*
let promise1 = new Promise(function(resolve, reject){
  resolve("Hey, I am done!");
})


let promise2 = new Promise(function(resolve, reject){
  reject("Something is not right");
})

let anotherPromise = new Promise(function(resolve, reject){
  resolve("I am surely going to get resolved!");

  reject(new Error("Will this be ignored?")); //ignored
  resolve("Ignored") // ignored
})
*/
//  Handling Promises
//Handler methods - .then() .catch() .finall() - helps to create the link between the service provider/Executor and the customer/client

// .then() - accepts two parameter 1st resolve and 2nd reject
/*
let loading = false;
const promise = new Promise(function(resolve, reject){
  loading = true;
  // Make a Network Call(API Call/IO Operation)
  resolve("I am resolved...");
});

promise.then(
  //if your intrested for the successful outcome you can pass only one argument and ignore the other 
  // if you remove the result handler just pass a null
  // (result)=>{console.log(result)},
  // null,
  (result)=>{console.log(result)},
  // (error)=>{console.error(error)}
).catch(
  (error) => {console.error(error)}
).finally(
  () => {
    loading = false;
  }
);
*/
// Promise Chain

// Rule 1: Every promise gives you a .then() handler method. Every rejected promise provides a .catch() handler.

// Rule 2: You can do mainly three valuable things from the .then() method. You can return another promise(for async operation). You can return any other value from a synchronous operation. Lastly, you can throw an error.

//---------------------------------------------------------------------------------------------------------------------------------------------
//Return a promise from the .then() handler

/*

//Create a Promise
let getUser = new Promise(function(resolve, reject){
  const user = {
    name: 'John Doe',
    email: 'jdoe@email.com',
    password: 'jdoe.password'
  };
  resolve(user);
})

getUser.then(function(user){

  console.log(`Got user ${user.name}`);

  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('Bangalore');
    }, 2000)
  })
})
.then((address)=>{
  console.log(`User address is ${address}`);
})

// Return a simple value from the .then() handler

getUser.then(function(user){
  console.log(`Got user ${user.name}`);
  return user.email;
})
.then(function(email){
  console.log(`User email is ${email}`);
})
*/

// Throw an error from the .then() handler

/*
let getUser = new Promise(function(resolve, reject){
  const user = {
    name: 'John Doe',
    email: 'jdoe@email.com',
    password: 'jdoe.password',
    permisions: ['db', 'dev']
  };
  resolve(user);
})

getUser
.then((user)=>{
  console.log(`Got user ${user.name}`);

  if(!user.permisions.includes("hr")){
    throw new Error("You are not allowed to access the HR module");
  }

  return user.email;
})
.then((email) => {
  console.log(`User email is ${email}`)
})
.catch((error)=>{
  console.error(error);
})
*/
// Rule 3: You can rethrow from the .catch() handler to handle the error later. In this case, the control will go to the next closest .catch() handler.
/*
let promise401 = new Promise(function(resolve, reject){
  reject(401)
});

promise401.catch((error) =>{
  console.log(error);
  if(error === 401){
    console.log("Rethrowing 401");
    throw error;
  }else{
    //Do Something
  }
  })

.then((result)=> {
  console.log(result);
})

.catch((error) => {
  console.log(`handling ${error} here`);
})
*/

//Rule 4 - Unlike .then() and .catch(), the .finally() handler doesn't process the result value or error. It just passes the result as is to the next handler.
/*
let promiseFinally = new Promise(function(resolve, reject){
  resolve('Testing Finally.');
});

promiseFinally.finally(function(){
  console.log("Running Finally!");
})
.then(function(result){
  console.log(result)
})
*/
//Rule 5 - Calling the .then() handler method multiple times on a single promise is NOT chaining.

/*
//Not Chaining
promise
  .then((result)=>{
    //Do Something
    return 101;
  })
promise
  .then((result)=>{
    //result // 101
    //throw error
  })
promise
  .catch((error)=>{

  })
*/

/*
//chaining
promise
  .then((result)=>{
    //Do Something
    return 101;
  })
  .then((result)=>{
    //result // 101
    //throw error
  })
  .catch((error)=>{
    
  })
*/
/*
let promise = new Promise(function(resolve, reject){
  resolve(10);
});

//Calling the .then method multiple times
//on a Single promise - It's not a chain
promise.then(function(value){
  value++;
  return value;
})
promise.then(function(value){
  value = value + 10;
  return value;
})
promise.then(function(value){
  value = value + 20;
  console.log(value); //returns 30
})
*/

// Handle Multiple Promise static methods

// Promise.all([promises])
// - Returns a promise that fulfills when all input promises fulfill.
// - The fulfilled value is an array of all results in input order.
// - If any input promise rejects, Promise.all rejects immediately.
// - Use when you need every promise to succeed before continuing.

// Promise.any([promises])
// - Returns a promise that fulfills as soon as one input promise fulfills.
// - The fulfilled value is the first successful result.
// - If all input promises reject, it rejects with an AggregateError.
// - Use when the first successful result is enough.

// Promise.allSettled([promises])
// - Returns a promise that fulfills when all input promises settle.
// - The fulfilled value is an array of result objects.
// - Each result object is { status: 'fulfilled', value } or { status: 'rejected', reason }.
// - Use when you want every outcome and do not want a single rejection to stop the whole operation.

// Promise.race([promises])
// - Returns a promise that settles as soon as the first input promise settles.
// - The returned promise fulfills or rejects with the first settled value or reason.
// - Use when the fastest response matters, regardless of success or failure.

// Promise.resolve(value)
// - Creates a promise already fulfilled with `value`.
// - Equivalent to `new Promise(resolve => resolve(value))`.

// Promise.reject(error)
// - Creates a promise already rejected with `error`.
// - Equivalent to `new Promise((resolve, reject) => reject(error))`.

const BULBASAUR_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
const RATICATE_POKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/raticate';
const KAKUNA_PIKEMONS_URL = 'https://pokeapi.co/api/v2/pokemon/kakuna';

function getPromise(URL) {
  // Start a network request to the given URL.
  // `fetch(URL)` returns a promise that resolves with a Response object.
  return fetch(URL)
    .then((response) => {
      // If the HTTP response status is not in the 200-299 range,
      // `response.ok` will be false.
      // Throwing here rejects the promise chain and passes the error to .catch().
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }

      // Parse the response body as JSON.
      // `response.json()` returns a promise that resolves with the parsed data.
      return response.json();
    });
}

let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
let promise_2 = getPromise(RATICATE_POKEMONS_URL);
let promise_3 = getPromise(KAKUNA_PIKEMONS_URL);
/*
Promise.all([promise_1, promise_2, promise_3])
.then((result)=>{
  console.log(result);
})
.catch((error)=>{
  console.error(error);
})
*/
//Doesn't wait for all the promises to resolve
/*
Promise.any([promise_1, promise_2, promise_3])
.then((result)=>{
  console.log(result);
})
.catch((error)=>{
  console.error(error);
})
*/

//settling a promise = fullfilling(resolve) + rejecting

/*
Promise.allSettled([promise_1, promise_2, promise_3])
.then((result)=>{
  console.log(result);
})
.catch((error)=>{
  console.error(error);
})
*/

Promise.race([promise_1, promise_2, promise_3])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('An error Occured');
  });

// Promise.resolve() is same as:
// let promise2 = new Promise((resolve) => resolve(value));
// Promise.reject() is same as:
// let promise1 = new Promise((resolve, reject) => reject(error));

// How to use fetch and how it works:
// 1) Call `fetch(url)` to start an HTTP request.
// 2) `fetch` returns a promise that resolves with a Response object.
// 3) The Response object is not the actual data; parse the body using response methods.
// 4) Check `response.ok` or `response.status` for HTTP errors.
// 5) Use `response.json()` to parse JSON; it returns a promise.
// 6) Chain `.then()` to handle the parsed data and `.catch()` to handle errors.
//
// Example:
// fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log('Pokemon data:', data);
//   })
//   .catch((error) => {
//     console.error('Fetch failed:', error);
//   });
//
// Notes:
// - `fetch` only rejects on network failure or if the request cannot complete.
// - HTTP 404 or 500 still resolve the fetch promise; check `response.ok` to detect these.
// - You can also use async/await for cleaner syntax.
//
// async function loadPokemon() {
//   const response = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur');
//   if (!response.ok) {
//     throw new Error(`HTTP error ${response.status}`);
//   }
//   const data = await response.json();
//   console.log(data);
// }

// How to cancel a Promise
// Promise cannot be cancelled only the process can be cancelled