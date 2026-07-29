const red = new Promise(function(resolve, reject){
  setTimeout(()=>{ resolve('red')}, 1000);
 
})

const green = new Promise(function(resolve, reject){
  setTimeout(()=>{ resolve('green')}, 3000);
 
})


const blue = new Promise(function(resolve, reject){
  setTimeout(()=>{ resolve('blue')}, 5000);
 
})

// const allPromises = Promise.all([red, green, blue]);

// execution depends on the promise that takes the maximum time
// console.log(allPromises); //returns a promise


// allPromises.then(value => {
//   console.log(value)
// })

