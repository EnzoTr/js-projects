const pwdLength = document.getElementById('pwdLength');
const inputLength = document.getElementById('inputLength');

pwdLength.textContent = inputLength.value;
inputLength.addEventListener("input", (event) => {
    pwdLength.textContent = event.target.value;
});

const useUppercase = document.getElementById('uppercase');
const useNumbers = document.getElementById('numbers');
const useSymbols = document.getElementById('symbols');

const generateBtn = document.querySelector('.generate-btn');
const pwdBox = document.getElementById('password');
var length = inputLength.value;

const lowerCase = "abcdefghijklmnñopqrstuvwxyz"
const upperCase = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
const numbers = "0123456789"
const symbols = "~`!@#$%^&*()_-+={[}]|;<,>.?/"

const allChars = lowerCase + upperCase + numbers + symbols;

function createPassword(){
    let password = "";

    password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
    if(useUppercase.checked){
        password += upperCase[Math.floor(Math.random()*upperCase.length)]
    }if(useNumbers.checked){
        password += numbers[Math.floor(Math.random()*numbers.length)]
    }if(useSymbols.checked){
        password += symbols[Math.floor(Math.random()*symbols.length)]
    };
    
    while(length > password.length){
        // password += allChars[Math.floor(Math.random()*upperCase.length)]
        password += lowerCase[Math.floor(Math.random()*lowerCase.length)]
        if(useUppercase.checked){
            password += upperCase[Math.floor(Math.random()*upperCase.length)]
        }if(useNumbers.checked){
            password += numbers[Math.floor(Math.random()*numbers.length)]
        }if(useSymbols.checked){
            password += symbols[Math.floor(Math.random()*symbols.length)]
        };
    }

    pwdBox.value = password;

}

generateBtn.addEventListener("click", createPassword);