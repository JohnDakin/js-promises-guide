const prm = new Promise(
  function executorFunc(resolve, reject){
    console.log("Water has started to boil");
    setTimeout(() => {
      console.log("Water has been boiled");
      resolve();
    },3000);
  }
);

prm
.then(() =>{
  console.log("Promise fulfilled");
})
.catch(() => {
  console.log("Promise unfulfilled");
})


setTimeout(() => console.log("Macro task"),4000);