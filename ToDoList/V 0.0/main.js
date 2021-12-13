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
const data = localStorage;
// data.clear();
const body=$('body');
const darkSpan = $("#darkSpan");
const lightSpan = $("#lightSpan");
//login
const btnSignUp = $("#btnSignUp");
const btnSignIn = $("#btnSignIn");
const loginEmail = $("#loginEmail");
const loginPassword = $("#loginPassword");
//register
const btnRegister = $("#btnRegister");
const registerFirstName = $("#registerFirstName");
const registerLastName = $("#registerLastName");
const registerEmail = $("#registerEmail");
const registerPassword = $("#registerPassword");
const registerConfirmPassword = $("#registerConfirmPassword");
//Section 2
const titleIdea = $("#titleIdea");
const descriptionIdea = $("#descriptionIdea");
const fromDate = $("#fromDate");
const toDate = $("#toDate");
const btnAddStep = $("#addStep");
const btnFinish = $("#finish");
const step=$('<input type="text" placeholder="Enter Step" id="stepOne" />');
//section3
// card card-header card-body list-step step stepOne card-footer
const thridSection = $(".third-container");
const btnModify = $("#modifyStep");
const btnUpdate = $("#update");
const btnDelete = $("#delete");
const editCard=$('#EditCard');
let users = [];
let user = JSON.parse(data.getItem("users"));
let items = [];
let item = JSON.parse(data.getItem("items"));
btnSignIn.on("click", () => {
  if (loginEmail.val() !== "" && loginPassword.val() !== "") {
    for (const key in user) {
      const element = user[key];
      if (
        loginEmail.val() === element.email &&
        loginPassword.val() === element.password
      ) {
        alert("WellCome");
        console.log(loginEmail.val());
      }
    }
  } else {
    alert("Please fill your email or password");
  }
});
// btnSignUp.on('click',()=>{});

btnRegister.on("click", () => {
  if (
    registerFirstName.val() !== "" &&
    registerLastName.val() !== "" &&
    registerEmail.val() !== "" &&
    registerPassword.val() !== "" &&
    registerConfirmPassword.val() !== ""
  ) {
    if (registerPassword.val() === registerConfirmPassword.val()) {
      users.push({
        firstName: registerFirstName.val(),
        lastName: registerLastName.val(),
        email: registerEmail.val(),
        password: registerPassword.val(),
      });
      data.setItem("users", JSON.stringify(users));
      alert(`Welcome ${registerFirstName.val()} ${registerLastName.val()}`);
    } else {
      alert("The Password not match for Confirm Password Please Try Agin!");
    }
  }
});
btnFinish.on("click", () => {
  if (
    titleIdea.val() !== "" &&
    descriptionIdea.val() !== "" &&
    fromDate.val() !== "" &&
    toDate.val() !== ""
  ) {
    // btnAddStep.on('click',()=>{
        
    //     const defineInput=$(`#addstps`);
        
    //     step.appendTo(defineInput);
    // });
    items.push({
      title: titleIdea.val(),
      Description: descriptionIdea.val(),
      from: fromDate.val(),
      to: toDate.val(),state:'Pending',step:{step:step}
    });

    let item = JSON.parse(data.getItem("items"));
    data.setItem("items", JSON.stringify(items));
  }
  for (const key in item) {
    const element = item[key];
    const card = $('<div class="card"></div>');
    const cardHeader = $('<div class="card-header"></div>');
    const cardBody = $('<div class="card-body"></div>');
    const cardFooter = $('<div class="card-footer"></div>');

    // review index2 in div cardheader
    const header = $(
      `<div><h3>${element.title}</h3><p>${element.Description}</p></div>`
    );
    const footerOne = $(`<button id="modifyStep">Add Step</button>`);
    const footertwo = $(`<button id="update">Edit</button>`);
    const footerthree = $(`<button id="delete">Delete</button>`);
    header.appendTo(cardHeader);
    footerOne.appendTo(cardFooter);
    footertwo.appendTo(cardFooter);
    footerthree.appendTo(cardFooter);
    cardHeader.appendTo(card);
    cardBody.appendTo(card);
    cardFooter.appendTo(card);
    card.appendTo(thridSection);
  }
});
editCard.hide();
const viewNotes=()=>{
    
    for (const key in item) {
        const element = item[key];
        const card = $('<div class="card"></div>');
        const cardHeader = $('<div class="card-header"></div>');
        const cardBody = $('<div class="card-body"></div>');
        const cardFooter = $('<div class="card-footer"></div>');
    
        // review index2 in div cardheader
        const header = $(
          `<div><h3>${element.title}</h3><p>${element.Description}</p></div>`
        );
        // const bady=$(`<p>${element.Description}</p>`);
        // const footerOne = $(`<button id="modifyStep">Add Step</button>`);
        const footertwo = $(`<button id="update">Edit</button>`);
        const footerthree = $(`<button id="delete">Delete</button>`);
        header.appendTo(cardHeader);
        // bady.appendTo(cardBody);
        // footerOne.appendTo(cardFooter);
        footertwo.appendTo(cardFooter);
        // footerthree.appendTo(cardFooter);
        cardHeader.appendTo(card);
        // cardBody.appendTo(card);
        cardFooter.appendTo(card);
        card.appendTo(thridSection);
        footerthree.appendTo(thridSection);
        // btnModify.on('click',()=>{
        //     editCard.show();

        // });
        
      }
     
};
body.on("laod",viewNotes());
btnDelete.on('click',()=>{
    data.removeItem('items');
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
