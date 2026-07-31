function step1(){
  return new Promise(
    (resolve, reject) => {
      console.log("Step1 started");
      setTimeout(() => {
        console.log("Step1 successful");
        resolve();
      },4000);
    }
  );
}

function step2(){
  return new Promise(
    (resolve, reject) => {
      console.log("Step2 started");
      setTimeout(() => {
        console.log("Step2 completed");
        resolve();
      },3000);
    }
  );
}

function step3(){
  return new Promise(
    (resolve, reject) => {
      console.log("Step3 started");
      setTimeout(() => {
        console.log("Step3 failed");
        reject();
      },2000);
    }
  );
}

function step4(){
  return new Promise(
    (resolve, reject) => {
      console.log("Step4 started");
      setTimeout(() => {
        console.log("Step4 completed");
        resolve();
      },1000);
    }
  );
}

step1()
.then(step2)
.then(step3)
.then(step4)
.then(() => console.log("All steps successful"))
.catch(() => console.log("Promise failed"));
