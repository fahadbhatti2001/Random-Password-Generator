const pw = document.getElementById('display');
const len = document.getElementById('len');
const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const sym = document.getElementById('sym');
const num = document.getElementById('num');
const gen = document.getElementById('gen');

const lowerT = 'abcdefghijklmnopqrstuvwxyz'
const upperT = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numT = '1234567890'
const symT = '!@#$%^&*/*-+='

function getUpper(){
    return upperT[Math.floor(Math.random() * upperT.length)];
}
function getLower(){
    return lowerT[Math.floor(Math.random() * lowerT.length)];
}
function getSym(){
    return symT[Math.floor(Math.random() * symT.length)];
}
function getNum(){
    return numT[Math.floor(Math.random() * numT.length)];
}

let password = [];

function generatePassword(){
    for (let i = 0; i<len.value; i++){
        switch (Math.floor(Math.random() * 4)) {
            case 0:
                if(upper.checked){
                    password.push(getUpper());
                }
                else{
                    i--
                    break;
                }
                break;
            case 1:
                if(lower.checked){
                    password.push(getLower());
                }
                else{
                    i--
                    break;
                }
                break;
            case 2:
                if(num.checked){
                    password.push(getNum());
                }
                else{
                    i--
                    break;
                }
                break;
            case 3:
                if(sym.checked){
                    password.push(getSym());
                }
                else{
                    i--
                    break;
                }
                break;
        }
    }
}

function show(){
    generatePassword()
    pw.value = password.join('')
    password = [];
}

