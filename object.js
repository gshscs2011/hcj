'use strict'

// object => { key : value};


const ellie ={ name : 'kbs', age : 20};


console.log(ellie.name);

for (let key in ellie){
    console.log(key);
}

const arr =[1,2,3,4];

for(let v of arr){
    console.log(v);
}
console.clear();

const arr1 = new Array();
const arr2 = [1, 2];

console.log(arr2);
console.clear();
arr2.forEach((arr2)=>console.log(arr2));  

