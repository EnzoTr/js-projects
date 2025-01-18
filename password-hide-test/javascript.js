let eyeIcon = document.getElementById('pwd-hide-btn');
let pwdInput = document.getElementById('pwd-input');

function hidePwd(){
    if(eyeIcon.classList.contains('fa-eye')){
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
        pwdInput.type = 'text';
    }else{
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
        pwdInput.type = 'password';
    }
}