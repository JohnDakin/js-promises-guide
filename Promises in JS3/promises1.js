let prm = new Promise((resolve, reject)=>{
  console.log("Executor function...");
  reject("failure");
});

prm
.then((result)=>{
  console.log(result);
})
.catch((error)=>{
  console.error(error)
})