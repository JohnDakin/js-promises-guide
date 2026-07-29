/*
let promiseError = new Promise(function(resolve, reject){
  // OOPs, Jack fell down ...
  reject(new Error("Disaster"));

});

promiseError.catch(error=>console.log(error));
*/
//Promise States(Internal)
  // -Pending: When execution starts
  // -fulfilled: When Resolves Successfully.
  // -rejected: When promise rejects.

// When a promise is in a fulfilled or rejected state it is said that the promise is settled

//Result of a promise
  // -undefined: Initial phase when state is pending
  // -value: when promise resolves
  // -error: when promise rejects


//Handler methods
// .then()
// .catch()
// .finally()

let promise = new Promise(function(resolve, reject){
  setTimeout(function(){
    // Reject it as the disaster happened
    //reject(new Error('Jack fell down and...'))
    resolve('Water');
  }, 2000);

});

const grandParentsCooking = () =>{
  promise
  .then(function(result){
    console.log(`Cooking starts with ${result}`);
  })
  .catch(function(error){
    console.error(`OMG ${error.message}`);
  })
};

grandParentsCooking();
