const passwordField = document.getElementById("password");
const length = 24;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbols = "@#$%^&?*()_-=+{}[]|;:'\"<>~`.";

const possibleChars = upperCase + lowerCase + number + symbols;

function generatePassword(){
    let password = "";
    while(password.length < length){
        password += possibleChars[Math.floor(Math.random() * possibleChars.length)];
    }
    passwordField.value = password;
    console.log(password)
}

function copyPassword(){
    passwordField.select();
    document.execCommand("copy");
}

const generateButton = document.getElementById("generate__btn");
generateButton.addEventListener("click", generatePassword);

const copyButton = document.getElementById("copy__btn");
copyButton.addEventListener("click", copyPassword);