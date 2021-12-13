const divlogin=$('#tab-content-login');
const divregister=$('#tab-content-signUp');
const darkSpan=$('#darkSpan');
const lightSpan=$('#lightSpan');
const arabic=$('#arSpan');
const english=$('#enSpan');
const html=$('html');
const head=$('head');
const arabicLinkStyle=$('<link rel="stylesheet" href="arabicStyle.css"/>');
const darkLinkStyle=$('<link rel="stylesheet" href="darkStyle.css"/>');
const logintab=$('#tab_signIn');
const registertab=$('#tab_signUp');

logintab.on('click',()=>{
    divlogin.show();
    divregister.hide();
});
registertab.on('click',()=>{
    divlogin.hide();
    divregister.show();
});

//login
const sectionFirst=$('.first');
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
const hero=$('#hero');

const body =$('body');
const HideAll=()=>{
    divregister.hide();
    hero.hide();
};
body.on('load',HideAll());
btnSignIn.on('click',()=>{
sectionFirst.hide();
hero.show();
});
arabic.on('click',()=>{
    // linkStyle.attr('href','arabicStyle.css');
    html.attr('lang','ar');
    arabicLinkStyle.appendTo(head);
});
english.on('click',()=>{
    html.attr('lang','en');
    // head.remove(linkStyle);
    $('link').eq(1).remove();
    
});
darkSpan.on('click',()=>{
    // linkStyle.attr('href','arabicStyle.css');
    // html.attr('lang','ar');
    darkLinkStyle.appendTo(head);
});
lightSpan.on('click',()=>{
    // html.attr('lang','en');
    // head.remove(linkStyle);
    $('link').eq(1).remove();
    
});
