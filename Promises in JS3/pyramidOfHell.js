//Callback Hell/Pyramid of Doom
/*
 * Makes the code hard to read and maintain
 * Makes it hard to handle errors
 */
function loadDashBoard(id, callback){
  let error;
  setTimeout(()=>{
    if(error){
      return callback(error);
    }
    console.log("Fetching user data...");

    setTimeout(()=>{
      if(error){
        return callback(error);
      }
      console.log("Fetching user friend list...");

      setTimeout(()=>{
        error = "post fetching error";
        if(error){
          return callback(error);
        }
        console.log("Fetching user posts...");

        setTimeout(()=>{
          if(error){
            return callback(error);
          }
          console.log("Fetching user comments...");

        },2000);

      },2000);

    },2000);

  },2000);

}

function errorHandler(error){
  console.log("Error has occured...");
}

loadDashBoard("101", errorHandler)