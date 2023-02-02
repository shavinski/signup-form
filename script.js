const createAccount = document.querySelector('.submit');
const password = document.querySelector('#pwd')
const confirmPassword = document.querySelector('#conf-pwd')
// console.log(password);

const pwd = null;
const confirmPwd = null;
let sumbitClicked = false;



createAccount.addEventListener('click', function(e){
    pwd = password.value
    confirmPwd = confirmPassword.value
    
    validatePassword();
    sumbitClicked = true;
    console.log(e);
    console.log(pwd);
    console.log(confirmPwd);
});

function validatePassword(first, second) {
    first = pwd
    second = confirmPwd

    if(first !== second) {
        alert('Passwords dont match')
    };

    console.log(pwd, confirmPwd);
};