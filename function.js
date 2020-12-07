'use strict'


// generial function

const cap = f("good");
console.log(cap);

function f(value){
    return value[0].toUpperCase() + value.slice(1);
}