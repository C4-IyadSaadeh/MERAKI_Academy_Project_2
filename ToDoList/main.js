// بسم الله الرحمن الرحيم 
//Author : iyad Saadeh
// Title :To Do List
// version : 1.0.0

 /* Requirements
1. User should be able to add a new toDo item to the toDos list.
2.User should be able to view all added items.
3.User should be able to delete any added item.
4. User should be able to modify any added item.
5.Items should be categorized to [ Completed, Pending ].*/
//theme
const data=localStorage;
// data.clear();

const darkSpan=$('#darkSpan');
const lightSpan=$('#lightSpan');
//login
const btnSignUp=$('#btnSignUp');
const btnSignIn=$('#btnSignIn');
const loginEmail=$('#loginEmail');
const loginPassword=$('#loginPassword');
//register 
const btnRegister=$('#btnRegister');
const registerFirstName=$('#registerFirstName');
const registerLastName=$('#registerLastName');
const registerEmail=$('#registerEmail');
const registerPassword=$('#registerPassword');
const registerConfirmPassword=$('#registerConfirmPassword');
//Section 2
const titleIdea=$('#titleIdea');
const descriptionIdea=$('#descriptionIdea');
const fromDate=$('#fromDate');
const toDate=$('#toDate');
const btnAddStep=$('#addStep');
const btnFinish=$('#finish');
//section3
// card card-header card-body list-step step stepOne card-footer
const btnModify=$('#modifyStep');
const btnUpdate=$('#update');
const btnDelete=$('#delete');


let users =[
    
];
btnSignIn.on('click',()=>{
    if (loginEmail.val()!=='' || loginPassword.val()!=='') {
        for (const key in users) {
            
            const element = users[key];
            if (loginEmail.val()===element.email && loginPassword.val()===element.password) {
                alert('WellCome');
                console.log(loginEmail.val());
            }
        
    }
        
    }
    else{
        alert('Please fill your email or password');
        
    }
});
// btnSignUp.on('click',()=>{});

btnRegister.on('click',()=>{
    if (registerFirstName.val()!=='' && registerLastName.val()!=='' && registerEmail.val()!=='' && registerPassword.val()!=='' && registerConfirmPassword.val()!=='') {
        if (registerPassword.val()===registerConfirmPassword.val()) {
            users.push({firstName:registerFirstName.val(),lastName:registerLastName.val(),email:registerEmail.val(),password:registerPassword.val()});
            data.setItem('users',JSON.stringify(users))
            alert(`Welcome ${registerFirstName.val()} ${registerLastName.val()}`);
        }
        else{
            alert('The Password not match for Confirm Password Please Try Agin!');
        }
    }
});
// const txt=$('#txt');
// const btn=$('#btn');
// const test=$('#test');


// btn.on('click',()=>{
//     data.setItem('test',`${{name:txt.val(),age:23}}`);
//     const header=$(`<h1>${data}</h1>`);
//     header.appendTo(test);
// });
// var testObject = [{ 'one': 1, 'two': 2, 'three': 3 }];
// localStorage.setItem('testObject', JSON.stringify(testObject));
// console.log(data.key());



