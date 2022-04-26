// //PROGRAMO EL BOTON PARA EL INGRESO DE USUARIO

let btnAbrirPopUp = document.querySelector('.play');
let popUp = document.querySelector('.popUp');
let login = document.querySelector('.login');
let btnCerrarPopUp = document.querySelector('.cerrarPopUp');
let signosIzquierda = document.querySelector('.signos1');
let signosDerecha = document.querySelector('.signos2');
let inputUser = document.querySelector('.usuario');

function abrirPopUp (){
    popUp.classList.add('active');
    login.classList.add('active');
}

function abrirPopUpLogin (){
    abrirPopUp();
    popUp.classList.add('overlay')
}

function cerrarPopUp (){
    popUp.classList.remove('active');
    login.classList.remove('active');
}

function cerrarPopUpLogin (){
    cerrarPopUp();
    popUp.classList.remove('overlay');
}



btnAbrirPopUp.addEventListener('click', abrirPopUpLogin);
btnCerrarPopUp.addEventListener('click', cerrarPopUpLogin);
