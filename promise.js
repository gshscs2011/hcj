'use strict';



// promise is ajavascript object for asynchronous


// 1. producer

//  when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) =>{
//  doing some heavy work(network, file)

    console.log('doing something....');

    setTimeout(()=>{
      //  resolve('ellie');
      reject(new Error('no network'));
    } , 2000)


});
// 2. consumers: then, catch, finally

promise
.then((value)=>{
    console.log(value);
})
.catch(error =>{
    console.log(error);
})
.finally(()=>console.log('finally'));


// 3. promise chaing

const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(1),1000);
});

fetchNumber
.then(num => num *2)
.then(num => num *3)