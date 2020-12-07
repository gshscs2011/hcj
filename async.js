// clear style of using promise :)



// 1. async


async function fetchUser(){

    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);


// 2. await 

function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}


