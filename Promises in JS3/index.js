//Create a Promise
/*
const promise = new Promise(function(resolve, reject){
  reject(new Error('Rejecting a fake promise'));
});

//Handle it using .then() method

promise
.then(
  null,
)
.catch((error)=>{
  console.error(error)
})
*/

// 1. Return another promise
// 2. Return a synchronous value
// 3. Return/Throw an error

//Create a Promise to get user

let getUser = new Promise(function(resolve, reject){
  const user = {
    name: 'John Doe',
    email: 'john@gmail.com',
    password: 'password',
    permision: ['db', 'dev']
  }

  resolve(user);
});
/*
//Returning a promise
getUser
.then(function(user){
  console.log(`Got user ${user.name}`);

  // Return another promise with user address
  return new Promise(function(resolve, reject){
    setTimeout(()=>{resolve('Bangalore')}, 1000)
  })
})
.then(function(address){
  console.log(`User address is ${address}`);
})
*/

/*
// Returning a synchronous value
getUser
.then(function(user){
  return user.email;
})
.then((email) => {console.log(`User email is ${email}`)})
*/
/*
//Throw an error
getUser
.then(function(user){

  if(!user.permision.includes('hr')){
    throw new Error("You are not allowed");
  }
})
.catch(function(error){
  console.error(error)
})
*/
// Promise chaining
const number = new Promise(function(resolve, reject){
  resolve(10);
});

number
.then(function(value){
  value++;
  return value;
})
.then(function(value){
  value = value + 10;
  return value;
})
.then(function(value){
  value = value + 20;
  console.log(value);
})

//.finally()
const promise = new Promise(function(resolve, reject){
  resolve('Testing finally');
})

promise.finally(function(){
  console.log('Cleaning...');
})
.then(function(value){
  console.log(value);
})