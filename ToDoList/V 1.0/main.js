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
const storage=this.localStorage;
let users=[];
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

const body = $("body");
const HideAll = () => {
  
  for (const key in users) {
      const element = users[key];
      if (element.isActive===true) {
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
  users=JSON.parse(storage.getItem('users'));
  if (loginEmail.val() !== "" && loginPassword.val() !== "") {
    for (const key in users) {
      const element = users[key];
      if (
        loginEmail.val() === element.email &&
        loginPassword.val() === element.password
      ) {
        
        sectionFirst.hide();
        hero.show();
      }
      else if(loginEmail.val() !== element.email &&
      loginPassword.val() !== element.password){
        const err = $(`<h6 style="color:red;">*Your Email or password is un correct</h6>`);

        err.appendTo(tabContentLogin);
      }
    }
  
  } else if (loginEmail.val() === "" && loginPassword.val() !== "") {
    const err = $(`<h6 style="color:red;">*Please Fill email ex:xxxx@gmail.com</h6>`);

    err.appendTo(tabContentLogin);
  }
  else if (loginEmail.val() !== "" && loginPassword.val() === "") {
    const err = $(`<h6 style="color:red;">*Please Fill Password </h6>`);

    err.appendTo(tabContentLogin);
  }
  else  {
    const err = $(`<h6 style="color:red;">*Please Fill email ex:xxxx@gmail.com and password</h6>`);

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
        password: registerPassword.val(),isActive:true
      });
      storage.setItem("users", JSON.stringify(users));
      const err = $(`<h4>Welcome ${registerFirstName.val()} ${registerLastName.val()}</h4>`);

        err.appendTo(tabContentSignUp);
      
    } else if (registerPassword.val() !== registerConfirmPassword.val()) {
      const err = $(`<h6 style="color:red;">*The Password not match for Confirm Password Please Try Agin!</h6>`);

      err.appendTo(tabContentSignUp);
    }
  }
  else{
    const err = $(`<h6 style="color:red;">*Please Fill the field and Try Agin!</h6>`);

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

