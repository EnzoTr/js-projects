var fnameError = document.getElementById('fname-error');
var lnameError = document.getElementById('lname-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');

function validateFName(){
    var fname = document.getElementById('firstName').value;
    if(fname.length == 0){
        fnameError.innerHTML = 'Name is required';
        return false;
    }if(!fname.match(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)){
        fnameError.innerHTML = 'Cannot contain characters';
    }else{
        fnameError.innerHTML = '';
    }
}

function validateLName(){
    var lname = document.getElementById('lastName').value;
    if(lname.length == 0){
        lnameError.innerHTML = 'Last name is required';
        return false;
    }if(!lname.match(/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/)){
        lnameError.innerHTML = 'Cannot contain characters';
    }else{
        lnameError.innerHTML = '';
    }
}


function validatePhone(){
    let phone = document.getElementById('phoneNumber').value;
    if(phone.length == 0){
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }if(phone.length !== 10){
        phoneError.innerHTML = 'Phone number should be 10 digits';
        return false;
    }if(!phone.match(/^[0-9]+$/)){
        phoneError.innerHTML = 'Phone number should contain numbers only';
        return false;
    }else{
        phoneError.innerHTML = '';
    }
}

function validateEmail(){
    let email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = 'Email is required';
        return false;
    }if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = 'Invalid Email address';
        return false;
    }else{
        emailError.innerHTML = '';
    }
}

function validatePassword() {
    let password = document.getElementById('password').value;

    // Reglas de validación de contraseña
    if (password.length === 0) {
        passwordError.innerHTML = 'Password is required';
        return false;
    }
    
    if (password.length < 8) {
        passwordError.innerHTML = 'Password must be at least 8 characters';
        return false;
    }

    if (!password.match(/[0-9]/)) {
        passwordError.innerHTML = 'Password must contain at least one number';
        return false;
    }

    // Si pasa todas las validaciones
    passwordError.innerHTML = '';
    return true;
}

function validateForm(){
    validateFName();
    validateLName();
    validatePhone();
    validateEmail();
    validatePassword();
    return false;
}