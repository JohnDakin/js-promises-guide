function getWeather(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {reject('Sunny')},1000)
  })
}


getWeather()
.then(
  (data)=> console.log('Success: ',data),
  // (error) => console.log('Error: ',error)
)
.catch(
  (error) => console.log('Error: ',error)
)
.finally(
  () => console.log('Cleaning up...')
)