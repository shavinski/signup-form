const createAccount = document.querySelector('.submit');
const password = document.querySelector('#pwd')
const confirmPassword = document.querySelector('#conf-pwd')
const errorMsg = document.querySelector('.error-msg')
const passwordError = document.querySelector('.row3');

if(password.value === confirmPassword.value && password.value !== '') {
    password.classList.add('password-match')
    confirmPassword.classList.add('password-match')
};

createAccount.addEventListener('click', (e) => {
    console.log(password.value, confirmPassword.value);

    if(password.value !== confirmPassword.value) {
        e.preventDefault();
        password.classList.add('password-error');
        confirmPassword.classList.add('password-error');
        errorMsg.classList.add('password-errortxt');
        errorMsg.textContent = 'Passwords do not match. Please try again!';
    } else {
        alert('Passwords match! Welcome to your new world!');
        return;
    };
});

passwordError.addEventListener('focusin', () => {
    password.classList.remove('password-error')
    confirmPassword.classList.remove('password-error')
});

 
