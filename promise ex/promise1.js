const promise = new Promise(function(resolve, reject){
  const objMe = {
    name: "John",
    age: 22,
    course: "Computer Science",
    gender: "Male",
    hobby: ["coding", "gaming", "learning", "teaching"]
  }
  reject(objMe);
})

promise.then(
  null, // not intrested in the result
  // (objMe) => {console.log(`Hello ${objMe.name} hope your fine`)}
  (error) => {throw new Error("This is an error demo")} //throwing an error
)
.catch(
(error) => {console.error(error)} //catching an error
)
.finally(
  console.log("Memory space released")
)