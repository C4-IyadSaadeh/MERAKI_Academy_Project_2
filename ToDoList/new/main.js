const divlogin=$('#tab-content-login');
const divregister=$('#tab-content-signUp');

const logintab=$('#tab_signIn');
const registertab=$('#tab_signUp');
divregister.hide();
logintab.on('click',()=>{
    divlogin.show();
    divregister.hide();
});
registertab.on('click',()=>{
    divlogin.hide();
    divregister.show();
});

//login

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
