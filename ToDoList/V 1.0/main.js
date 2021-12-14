// بسم الله الرحمن الرحيم
//Author : iyad Saadeh
// Title :To Do List
// version : 1.0.0

// Local Storage
const storage = this.localStorage;
let users = [];
//html and head tag

const html = $("html");
const head = $("head");
// header 
const darkSpan = $("#darkSpan");
const lightSpan = $("#lightSpan");
const arabic = $("#arSpan");
const english = $("#enSpan");
const arabicLinkStyle = $(
  '<link rel="stylesheet" id="ar" href="arabicStyle.css"/>'
);
const darkLinkStyle = $(
  '<link rel="stylesheet" id="dark" href="darkStyle.css"/>'
);
// Section First : login & register
//login
const sectionFirst = $(".first");
const btnSignIn = $("#btnSignIn");
const loginEmail = $("#loginEmail");
const loginPassword = $("#loginPassword");
const logintab = $("#tab_signIn");
logintab.on("click", () => {
  tabContentLogin.show();
  tabContentSignUp.hide();
});
//register
const btnRegister = $("#btnRegister");
const registerFirstName = $("#registerFirstName");
const registerLastName = $("#registerLastName");
const registerEmail = $("#registerEmail");
const registerPassword = $("#registerPassword");
const registerConfirmPassword = $("#registerConfirmPassword");
const tabContentLogin = $("#tab-content-login");
const tabContentSignUp = $("#tab-content-signUp");
const registertab = $("#tab_signUp");
registertab.on("click", () => {
  tabContentLogin.hide();
  tabContentSignUp.show();
});
//section hero
const hero = $("#hero");


//section main_function
const sectionMain=$('#main_function');
const titleIdea = $("#titleIdea");
const descriptionIdea = $("#descriptionIdea");
const fromDate = $("#fromDate");
const toDate = $("#toDate");
const btnFinish = $("#finish");
// section list_function
const sectionCards = $("#list_function");
//
const body = $("body");
const HideAll = () => {
  // for (const key in users) {
  //   const element = users[key];
  //   if (element.isActive === true) {
  //     sectionFirst.hide();
  //     hero.show();
  //   }
  // }
  tabContentSignUp.hide();
  hero.hide();
  sectionMain.hide();
  sectionCards.hide();


};

body.on("load", HideAll());
btnSignIn.on("click", () => {
  // Don't Forget You have add SignOut Button.
  users = JSON.parse(storage.getItem("users"));
  if (loginEmail.val() !== "" && loginPassword.val() !== "") {
    for (const key in users) {
      const element = users[key];
      if (
        loginEmail.val() === element.email &&
        loginPassword.val() === element.password
      ) {
        sectionFirst.hide();
  viewList();

        hero.show();
        sectionMain.show();
  sectionCards.show();
      } else if (
        loginEmail.val() !== element.email &&
        loginPassword.val() !== element.password
      ) {
        const err = $(
          `<h6 style="color:red;">*Your Email or password is un correct</h6>`
        );

        err.appendTo(tabContentLogin);
      }
    }
  } else if (loginEmail.val() === "" && loginPassword.val() !== "") {
    const err = $(
      `<h6 style="color:red;">*Please Fill email ex:xxxx@gmail.com</h6>`
    );

    err.appendTo(tabContentLogin);
  } else if (loginEmail.val() !== "" && loginPassword.val() === "") {
    const err = $(`<h6 style="color:red;">*Please Fill Password </h6>`);

    err.appendTo(tabContentLogin);
  } else {
    const err = $(
      `<h6 style="color:red;">*Please Fill email ex:xxxx@gmail.com and password</h6>`
    );

    err.appendTo(tabContentLogin);
  }
});
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
        isActive: true,
      });
      storage.setItem("users", JSON.stringify(users));
      const err = $(
        `<h4>Welcome ${registerFirstName.val()} ${registerLastName.val()}</h4>`
      );

      err.appendTo(tabContentSignUp);
    } else if (registerPassword.val() !== registerConfirmPassword.val()) {
      const err = $(
        `<h6 style="color:red;">*The Password not match for Confirm Password Please Try Agin!</h6>`
      );

      err.appendTo(tabContentSignUp);
    }
  } else {
    const err = $(
      `<h6 style="color:red;">*Please Fill the field and Try Agin!</h6>`
    );

    err.appendTo(tabContentSignUp);
  }
});
arabic.on("click", () => {
  // linkStyle.attr('href','arabicStyle.css');
  html.attr("lang", "ar");
  arabicLinkStyle.appendTo(head);
});
english.on("click", () => {
  html.attr("lang", "en");
  // head.remove(linkStyle);
  $("#ar").remove();
  // $('link #ar').eq(1).remove();
});

darkSpan.on("click", () => {
  // linkStyle.attr('href','arabicStyle.css');
  // html.attr('lang','ar');
  darkLinkStyle.appendTo(head);
});
lightSpan.on("click", () => {
  // html.attr('lang','en');
  // head.remove(linkStyle);
  $("#dark").remove();
  // $('link #dark').eq(1).remove();
});

// main function
// 1. User should be able to add a new toDo item to the toDos list.
// 2.User should be able to view all added items.
let items = [];

const viewList = () => {
  items = JSON.parse(storage.getItem("items"));
  items.forEach((element) => {
    const card = $('<div class="card"></div>');
    const cardHeader = $('<div class="card-header"></div>');
    const cardBody = $('<div class="card-body"></div>');
    const cardFooter = $('<div class="card-footer"></div>');

    // review index2 in div cardheader
    const header = $(
      `<div><h3>${element.title}</h3><h1>${element.Description}</h1></div>`
    );
    // const footerOne = $(`<button id="modifyStep">Add Step</button>`);
    const updatebtn = $(`<button id="update">Edit</button>`);
    const deletebtn = $(`<button id="delete">Delete</button>`);
    header.appendTo(cardBody);
    // footerOne.appendTo(cardFooter);
    updatebtn.appendTo(cardFooter);
    deletebtn.appendTo(cardFooter);
    cardHeader.appendTo(card);
    cardBody.appendTo(card);
    cardFooter.appendTo(card);
    card.appendTo(sectionCards);
    // 3.User should be able to delete any added item.
    deletebtn.on("click", () => {
      items.forEach((item, index) => {
        if (element.title === item.title) {
          items.splice(index, 1);
        }
      });
      storage.setItem("items", JSON.stringify(items));
      card.remove();
    });
    // 4. User should be able to modify any added item.
    updatebtn.on("click", () => {
      items.forEach((item, index) => {
        if (element.title === item.title) {
          const defineTitle=$('<div class="define-input"></div>');
          const defineDes=$('<div class="define-input"></div>');
          const defineFrom=$('<div class="define-input"></div>');
          const defineTo=$('<div class="define-input"></div>');
          const defineBtn=$('<div class="buttons"></div>');
          const lblFrom=$('<label>From </label>');
          const lblTo=$('<label>To </label>');
          const title = $(`<input type="text" value="${item.title}" />`);
          const des = $(`<textarea>${item.Description}</textarea>`);
          const from = $(`<input type="date" value="${item.from}"/>`);
          const to = $(`<input type="date" value="${item.to}"/>`);
          const okBtn=$(`<button id="ok">Done</button>`);
          const editDiv = $('<div class="card_edit"></div>');
          title.appendTo(defineTitle);
          des.appendTo(defineDes);
          lblFrom.appendTo(defineFrom);

          from.appendTo(defineFrom);
          lblTo.appendTo(defineTo);

          to.appendTo(defineTo);

          okBtn.appendTo(defineBtn);

          defineTitle.appendTo(editDiv);
          defineDes.appendTo(editDiv);
          defineFrom.appendTo(editDiv);
          defineTo.appendTo(editDiv);
          defineBtn.appendTo(editDiv);
          editDiv.appendTo(sectionCards);
          okBtn.on('click',()=>{
            items[index] = {
              title: title.val(),
              Description: des.val(),
              from: from.val(),
              to: to.val(),
              state: "Pending",

            };
            editDiv.remove();
            storage.setItem("items", JSON.stringify(items));
          });
          
        }
      });
      
    });
  });
};
btnFinish.on("click", () => {
  if (
    titleIdea.val() !== "" &&
    descriptionIdea.val() !== "" &&
    fromDate.val() !== "" &&
    toDate.val() !== ""
  ) {
    items.push({
      // id:items.length,
      title: titleIdea.val(),
      Description: descriptionIdea.val(),
      from: fromDate.val(),
      to: toDate.val(),
      state: "Pending",
    });
    storage.setItem("items", JSON.stringify(items));
    viewList();
  }
});
