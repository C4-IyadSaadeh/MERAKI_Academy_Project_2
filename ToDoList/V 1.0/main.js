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
const userName = $("#arSpan");
const logOut = $("#enSpan");
const arabicLinkStyle = $(
  '<link rel="stylesheet" id="ar" href="arabicStyle.css"/>'
);

const darkLinkStyle = $(
  '<link rel="stylesheet" id="dark" href="darkStyle.css"/>'
);
const divMenu = $(".menu_mobile");
const btnMenu = $("#btn_menu_mobile");
// Section First : login & register
//login
const sectionFirst = $(".first");
const btnSignIn = $("#btnSignIn");
const loginEmail = $("#loginEmail");
const loginPassword = $("#loginPassword");
const loginTab = $("#tab_signIn");
loginTab.on("click", () => {
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
const registerTab = $("#tab_signUp");
registerTab.on("click", () => {
  tabContentLogin.hide();
  tabContentSignUp.show();
});
//section hero
const hero = $("#hero");

//section main_function
const sectionMain = $("#main_function");
const titleIdea = $("#titleIdea");
const descriptionIdea = $("#descriptionIdea");
const fromDate = $("#fromDate");
const toDate = $("#toDate");
const btnFinish = $("#finish");
// section list_function
//
const body = $("body");



const complete=$('#complete');


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
const updateFun = () => {
  viewList();
};
const showCompleteTask=()=>{
  const main = $("main");
  const sectionComplete = $('<section id="list_Complete"></section>');
  items = JSON.parse(storage.getItem("items"));
  item = items.filter(element=>element.state === "Complete");

  item.forEach((element) => {
    const card = $('<div class="card"> Complete Tasks</div>');
    const cardHeader = $('<div class="card-header"></div>');
    const cardBody = $('<div class="card-body"></div>');
    const cardFooter = $('<div class="card-footer"></div>');

    // review index2 in div cardheader
    const header = $(`<h3>${element.title}</h3><h6>from : ${element.from}-To : ${element.to}</h6>`);
    const des = $(`<h1>${element.Description}</h1>`);
    
    header.appendTo(cardHeader);
    des.appendTo(cardBody);
    
    cardHeader.appendTo(card);
    cardBody.appendTo(card);
    cardFooter.appendTo(card);
    card.appendTo(sectionComplete);
    sectionComplete.appendTo(main);
    
});
}
complete.on('click',()=>{
  showCompleteTask();
});
const viewList = () => {
  const sectionCards = $('<section id="list_function"></section>');

  items = JSON.parse(storage.getItem("items"));
  items.forEach((element) => {
    const card = $('<div class="card"></div>');
    const cardHeader = $('<div class="card-header"></div>');
    const cardBody = $('<div class="card-body"></div>');
    const cardFooter = $('<div class="card-footer"></div>');

    // review index2 in div cardheader
    const header = $(`<h3>${element.title}</h3><h6>from : ${element.from}-To : ${element.to}</h6>`);
    const des = $(`<h1>${element.Description}</h1>`);
    const completeBtn = $(`<button id="complete">Complete</button>`);
    const updatebtn = $(`<button id="update">Edit</button>`);
    const deletebtn = $(`<button id="delete">Delete</button>`);
    header.appendTo(cardHeader);
    des.appendTo(cardBody);
    completeBtn.appendTo(cardFooter);
    updatebtn.appendTo(cardFooter);
    deletebtn.appendTo(cardFooter);
    cardHeader.appendTo(card);
    cardBody.appendTo(card);
    cardFooter.appendTo(card);
    card.appendTo(sectionCards);
    const main = $("main");
    sectionCards.appendTo(main);
    completeBtn.on('click',()=>{
      items.forEach((item, index) => {
         item.state='Complete';
      });
      storage.setItem("items", JSON.stringify(items));
      card.remove();
    });
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
          const defineTitle = $('<div class="define-input"></div>');
          const defineDes = $('<div class="define-input"></div>');
          const defineFrom = $('<div class="define-input"></div>');
          const defineTo = $('<div class="define-input"></div>');
          const defineBtn = $('<div class="buttons"></div>');
          const lblFrom = $("<label>From </label>");
          const lblTo = $("<label>To </label>");
          const title = $(`<input type="text" value="${item.title}" />`);
          const des = $(`<textarea>${item.Description}</textarea>`);
          const from = $(`<input type="date" value="${item.from}"/>`);
          const to = $(`<input type="date" value="${item.to}"/>`);
          const okBtn = $(`<button id="ok">Done</button>`);
          const editDiv = $('<div class="card_edit"></div>');
          items.splice(index, 1);
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
          okBtn.on("click", () => {
            items[index] = {
              title: title.val(),
              Description: des.val(),
              from: from.val(),
              to: to.val(),
              state: "Pending",
            };

            editDiv.remove();

            $("#list_function").remove();
            // const sectionCards = $("#list_function");
        
            storage.setItem("items", JSON.stringify(items));
            viewList();
          });
        }
      });
    });
  });
};



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
        isActive: false,
      });
      storage.setItem("users", JSON.stringify(users));
      const err = $(
        `<h4>Welcome ${registerFirstName.val()} ${registerLastName.val()}</h4>`
      );

      err.appendTo(tabContentSignUp);
      tabContentSignUp.hide();
      tabContentLogin.show();
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
    $("#list_function").remove();
    // const sectionCards = $("#list_function");

    storage.setItem("items", JSON.stringify(items));
    viewList();
  }
});
// $('.goog-te-combo').change(()=>{

//extra Function
//  Add Blog include public think
// 1.user can add comment & like  in blog .
// 2.user can edit comment .
// 3.user can remove like and comments.
//  4.user can add blog post .
// ----------
// responsive
btnMenu.on("click", () => {
 
  const userName = userName;
  const logOut  = logOut;
  const dark = darkSpan;
  const light = lightSpan;
  userName.appendTo(divMenu);
  logOut.appendTo(divMenu);
  dark.appendTo(divMenu);
  light.appendTo(divMenu);
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element');
}
const isDeadLine = () => {
  
  let date = new Date();
  "2021-12-15"
  let currentDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  let i = [];
  i = JSON.parse(storage.getItem("items"));
  const
   ii = i.filter(element=>element.to === currentDate);
ii.forEach(element=>{
  const alertDiv=$(`<h4 id="deadLine">Today is DeadLine For This Idea : ${element.title}</h4>`);
alertDiv.appendTo(sectionMain);
});

};

const HideAll = () => {
   users=JSON.parse(storage.getItem("users"));
  users.forEach(e=>{
    if (e.isActive===true) {
      userName.text(`Welcome ${e.firstName} ${e.lastName}`);
      sectionFirst.hide();
      viewList();
      
      isDeadLine();
      hero.show();
      complete.show();
      sectionMain.show();
      $("#list_function").show();
      $("footer").css("position", "inherit");
    }
    
    else{
      sectionFirst.show();
      userName.text('');
      tabContentSignUp.hide();
      hero.hide();
      complete.hide();
      sectionMain.hide();
      $("#list_function").hide();
      if ($(this).width() <= 600) {
        $("footer").css("position", "inherit");
      } else {
        $("footer").css("position", "absolute");
      }
    }
  });
  // sectionFirst.hide();
  
};
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
        element['isActive']=true;
        storage.setItem("users", JSON.stringify(users));
        HideAll();
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
body.on("load", HideAll());
logOut.on("click", () => {
  users=JSON.parse(storage.getItem("users"));
  users.forEach(e=>{
     e.isActive=false 
  });
  storage.setItem("users", JSON.stringify(users));
  
  HideAll();
});