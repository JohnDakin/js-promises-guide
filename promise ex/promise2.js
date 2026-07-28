const promise = new Promise(function(resolve, reject){
  const objMe = {
    name: "John",
    age: 22,
    course: "Computer Science",
    gender: "Male",
    hobby: ["coding", "gaming", "learning", "teaching"]
  }
  resolve(objMe);
})

promise.then(function(objMe){
  console.log(`${objMe.name} is ${objMe.age} years old and loves ${objMe.course} alot`);

  //return another promise
  return new Promise(function(resolve, reject){
    setTimeout(
      ()=>{
        resolve("Check my github!!");
      }, 3000)
  })
})
//Handling the returned promise 
.then(function(github){
  console.log(github)
})