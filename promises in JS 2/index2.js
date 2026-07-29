const red = new Promise(function(resolve, reject){
  setTimeout(()=>{ resolve('red')}, 1000);
 
})

const green = new Promise(function(resolve, reject){
  setTimeout(()=>{ resolve('green')}, 3000);
 
})

const blue = new Promise(function(resolve, reject){
  setTimeout(()=>{ resolve('blue')}, 5000);
 
})

