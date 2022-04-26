//LOG IN
let user = document.querySelector('.usuario');
let botonLogin = document.querySelector('.botonJugar');
let nivel = document.getElementsByName("dificultad");
let numUser = 0;



//guardo los datos del usuario y del nivel de dificultad elegido.

function guardarDatos (){
    localStorage.setItem('user', user.value);
    localStorage.setItem('pass', pass.value)

    if (nivel[0].checked) {
        localStorage.setItem('dificultad', nivel[0].value);
    }else{
        localStorage.setItem('dificultad', nivel[1].value);
    }
}


botonLogin.addEventListener('click', ()=> guardarDatos());








