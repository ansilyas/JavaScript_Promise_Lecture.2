
let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending")
  setTimeout(() => {
    console.log("I am a Promise and I am resolve")
    resolve(true)
    // reject(new Error("I am an error")) //This is how we create [new Error]
  }, 5000)
})

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending")
  setTimeout(() => {
    // console.log("I am a Promise and I am reject")
    // resolve(true)
    reject(new Error("I am an error")) //This is how we create [new Error]
  }, 5000)
})

//  To get the Value ;
/*
p1.then((value)=>{
  console.log(value)
})

p2.then((value)=>{
  console.log(value)
})
*/

//  To catch the Error; 
/*
p2.catch((error)=>{
  console.log("some error occure")
})
*/

// Give both Function in One Function;

p2.then((value) => {
  console.log(value)
}, (error) => {
  console.log(error)
})