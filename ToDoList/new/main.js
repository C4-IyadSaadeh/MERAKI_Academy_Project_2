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
//section second
const hero = $("#hero");

const body = $("body");
const HideAll = () => {
  divregister.hide();
  hero.hide();
};
body.on("load", HideAll());
btnSignIn.on("click", () => {
  if (loginEmail.val() !== "" && loginPassword.val() !== "") {
    for (const key in user) {
      const element = user[key];
      if (
        loginEmail.val() === element.email &&
        loginPassword.val() === element.password
      ) {
        sectionFirst.hide();
        hero.show();
      }
    }
  } else {
    alert("Please fill your email or password");
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
