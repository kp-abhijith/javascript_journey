const user ={
    username:"hitesh",
    price:99,
    welcomemsg:function(){
        console.log(`${this.username},welcome`);
        console.log(this)

    }
}
// user.welcomemsg();
// // user.username="appu"
// // user.welcomemsg();
// console.log(this);
// const chai=function(){
//     let user ="appu"
//     console.log(this.username);
// }
// chai();
const chai=()=>{
    let user ="appu"
    console.log(this);
}
chai()
const add=(n1,n2)=>{
    return n1+n2
}
console.log(add(2,3))

