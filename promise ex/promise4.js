const promise = new Promise(function(resolve, reject){
  const objMe = {
    name: "John",
    age: 30,
    course: "Computer Science",
    gender: "Male",
    hobby: ["coding", "gaming", "learning", "teaching"]
  }
  resolve(objMe);
})

promise.then(function(objMe){
  console.log(`Hello ${objMe.name} lets throw an error`);

  //throwing an error
  if(objMe.age !== 30) throw new Error("Too early to get married");
  return objMe.hobby;
})
//handling the returned value
.then(function(hobby){
  hobby.forEach((element, index) => {
    console.log(`${index + 1}: ${element}`);
  });
})
//handle the thrown error
.catch(function(error){
  console.log(`${error}`)
})
//closing all the connection
.finally(()=>{console.log(`Memory released for another process`)})