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
  console.log(`Hello ${objMe.name} i am returning a value`);
  //returning a value
  return objMe;
})
//handling the returned value
.then(function(objMe){
  console.log(`${objMe.name} is ${objMe.gender} in gender`)
})