// const myPromise = new Promise(function(resolve,reject){
//     setTimeout(function(){
//       console.log("mypromise");
//         resolve()
//     },1000)
// })
// myPromise.then(function(){
//     console.log("success");
// })

// const promiseone= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//             console.log("success");
            
//         } else {
//             reject('ERROR: Something went wrong')
//             console.log("fail");
            
//         }
//     }, 1000)
// })

// promiseone.then((user)=>{
//     console.log(user);
//     console.log (user.username);
// })
// .catch((er)=>{
//     console.log(er);
// })
// .finally(()=>{
//     console.log("try again !!");
    
// })




// const promisetwo= new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = false
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

// async function test() {
//     try{
//         const response =await promisetwo
//         console.log(response .username)
//     }
//     catch(error){
//         console.log(error);
//     }
    
// }
// test();

