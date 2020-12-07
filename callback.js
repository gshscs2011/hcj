// call back hell
'use strict'
class UserStorage{
    loginUser(id,password,onSuccess,onError){
        setTimeout(()=>{
            if(
                (id ==='ellie' && password ==='dream') ||
                (id ==='coder' && password ==='academy')
            ){
                onSuccess(id);
            }
            else {
                onError(new Error('not found'));
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(id ==='ellie'){
                onSuccess({name:'ellie', role:'admin'});
            }
            else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('id');
const password = prompt('pw');


userStorage.loginUser(
    id,
    password,
    user=>{
        userStorage.getRoles(
            user,
            userRole =>alert(`hello ${userRole.name}, ${userRole.role} role`),
            error => console.log(error)
        )
    },
    error => console.log(error) 
);













