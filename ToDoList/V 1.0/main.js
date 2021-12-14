const divlogin = $("#tab-content-login");
const divregister = $("#tab-content-signUp");
const darkSpan = $("#darkSpan");
const lightSpan = $("#lightSpan");
const arabic = $("#arSpan");
const english = $("#enSpan");
const html = $("html");
const head = $("head");
const arabicLinkStyle = $(
  '<link rel="stylesheet" id="ar" href="arabicStyle.css"/>'
);
const darkLinkStyle = $(
  '<link rel="stylesheet" id="dark" href="darkStyle.css"/>'
);
const logintab = $("#tab_signIn");
const registertab = $("#tab_signUp");

logintab.on("click", () => {
  divlogin.show();
  divregister.hide();
});
registertab.on("click", () => {
  divlogin.hide();
  divregister.show();
});
// Local Storage
const storage = this.localStorage;
let users = [];
//login
const sectionFirst = $(".first");
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
const tabContentLogin = $("#tab-content-login");
const tabContentSignUp = $("#tab-content-signUp");
//section second
const hero = $("#hero");
const sectionCards = $(".third");
const body = $("body");
const HideAll = () => {
  for (const key in users) {
    const element = users[key];
    if (element.isActive === true) {
      sectionFirst.hide();
      hero.show();
    }
  }
  divregister.hide();
  hero.hide();
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
        hero.show();
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
      `<div><h3>${element.title}</h3><p>${element.Description}</p></div>`
    );
    // const footerOne = $(`<button id="modifyStep">Add Step</button>`);
    const updatebtn = $(`<button id="update">Edit</button>`);
    const deletebtn = $(`<button id="delete">Delete</button>`);
    header.appendTo(cardHeader);
    // footerOne.appendTo(cardFooter);
    updatebtn.appendTo(cardFooter);
    deletebtn.appendTo(cardFooter);
    cardHeader.appendTo(card);
    cardBody.appendTo(card);
    cardFooter.appendTo(card);
    card.appendTo(thridSection);
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
          const title = $(`<input type="text" value="${item.title}" />`);
          const des = $(`<textarea>${item.Description}</textarea>`);
          const from = $(`<input type="date" value="${item.from}"/>`);
          const to = $(`<input type="date" value="${item.to}"/>`);
          const editDiv = $('<div class="card_edit"></div>');
          title.appendTo(editDiv);
          des.appendTo(editDiv);
          from.appendTo(editDiv);
          to.appendTo(editDiv);
          editDiv.appendTo(sectionCards);
          items[index] = {
            title: title.val(),
            Description: des.val(),
            from: from.val(),
            to: to.val(),
            state: "Pending",
          };
        }
      });
      storage.setItem("items", JSON.stringify(items));
      viewList();
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
