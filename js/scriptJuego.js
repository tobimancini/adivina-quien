
//REALIZO UN FETCH PARA TRAERME LOS EMOJIS DISPONIBLES DEL DATA.JSON

fetch('../js/data.json')
    .then( (res) => res.json())
    .then( (data) => {
        for(i = 0; i < data.length; i++) {
            emojis.push(data[i])
            emojisAlive.push(data[i])
        }
    })

 
const emojis = [];
const emojisAlive =[];

// const emojis = [emoji1, emoji2, emoji3, emoji4, emoji5, emoji6, emoji7, emoji8, emoji9, emoji10, emoji11, emoji12];

//CON ESTE EVENTO SE DA POR ENTENDIDO QUE HAY QUE ELEGIR UN EMOJI
let popUp = document.querySelector('.popUp');
let elijoEmoji = document.querySelector('.elijoEmoji');
let btnCerrarPopUp = document.querySelector('.botonOk');
let textoPopUp = document.querySelector('.textoElijoEmoji');
let tableroCPU = document.querySelector('.tableroYTituloCPU');



function abrirPopUp (){
    popUp.classList.add('active');
    elijoEmoji.classList.add('active');
}

function cerrarPopUp (){
    popUp.classList.remove('active');
    elijoEmoji.classList.remove('active');
    tableroCPU.classList.remove('active');
    setTimeout(ganoCPU, 600);
}

btnCerrarPopUp.addEventListener('click', ()=> cerrarPopUp());

// TOMO LOS DATOS OBTENIDOS DEL LOCALSTORAGE

let userName = localStorage.getItem('user');
let userNameMayus = userName.toUpperCase();
let userNameMayus2 = userNameMayus.replaceAll(" ","_")
let emojiUser = document.querySelector('.emojiUser');

let nivelJuego = localStorage.getItem('dificultad');


emojiUser.innerHTML = "EMOJI DE "+userNameMayus2;

textoPopUp.innerHTML= "HOLA "+userNameMayus2+"!!<br/> ELEGÍ TU EMOJI"





//DECLARO LOS EMOJIS QUE VAN A ESTAR EN MI TABLERO

let emojiElegido = emojis[0];

let rick = document.querySelector('.rick');
let elias = document.querySelector('.elias');
let phillip = document.querySelector('.phillip');
let frankie = document.querySelector('.frankie');
let emma = document.querySelector('.emma');
let roxy = document.querySelector('.roxy');
let mark = document.querySelector('.mark');
let stuart = document.querySelector('.stuart');
let nick = document.querySelector('.nick');
let mary = document.querySelector('.mary');
let courtney = document.querySelector('.courtney');
let mikey = document.querySelector('.mikey');
let gerard = document.querySelector('.gerard');
let ramona = document.querySelector('.ramona');
let patrick = document.querySelector('.patrick');
let ruby = document.querySelector('.ruby');
let penny = document.querySelector('.penny');
let jenny = document.querySelector('.jenny');
let thomas = document.querySelector('.thomas');
let rhonda = document.querySelector('.rhonda');

let miEmoji = document.querySelector('.miElegido');
let contenedorEmojis = document.querySelector('.light');
let flecha = document.querySelector(".flecha");


let btnDisabled = false;
let elegible = false;


//DECLARO LA FUNCION PARA ELEGIR MI EMOJI.
function bucleElegir (dato) {
    if (btnDisabled == false) {
            miEmoji.classList.add(emojis[dato].nombre);
            document.body.classList.remove('dark')
            contenedorEmojis.classList.remove('light')
            emojiElegido = emojis[dato];
            btnDisabled = true;            

            abrirPopUp();
            textoPopUp.innerHTML = "ES TU TURNO DE PREGUNTAR";
            btnAbrirCaja.classList.add("elegirPregunta");
            flecha.classList.add("active");
            iconoAjustes.classList.add('visible')

            emojisShuffled(); 
        
        }           
}

rick.addEventListener('click', () => bucleElegir(0));
elias.addEventListener('click', () => bucleElegir(1));
phillip.addEventListener('click', () => bucleElegir(2));
frankie.addEventListener('click', () => bucleElegir(3));
emma.addEventListener('click', () => bucleElegir(4));
roxy.addEventListener('click', () => bucleElegir(5));
mark.addEventListener('click', () => bucleElegir(6));
stuart.addEventListener('click', () => bucleElegir(7));
nick.addEventListener('click', () => bucleElegir(8));
mary.addEventListener('click', () => bucleElegir(9));
courtney.addEventListener('click', () => bucleElegir(10));
mikey.addEventListener('click', () => bucleElegir(11));
gerard.addEventListener('click', () => bucleElegir(12));
ramona.addEventListener('click', () => bucleElegir(13));
patrick.addEventListener('click', () => bucleElegir(14));
ruby.addEventListener('click', () => bucleElegir(15));
penny.addEventListener('click', () => bucleElegir(16));
jenny.addEventListener('click', () => bucleElegir(17));
thomas.addEventListener('click', () => bucleElegir(18));
rhonda.addEventListener('click', () => bucleElegir(19));



//esta funcion shuffle me permite "mezclar" el orden de los objetos dentro de la funcion "Persona" y asi elegir aleatoriamente a la persona a adivinar.

function shuffle(array){
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

//  SE HACE UN REORDENAMIENTO ALEATORIO DE LOS EMOJIS, Y LA CPU ELIJE SU EMOJI ALEATORIAMENTE.
let elegidoCPU;
let emojisMezcla;


function emojisShuffled(){
    emojisMezcla = emojis.slice();
    shuffle(emojisMezcla);
    elegidoCPU = emojisMezcla[0];
}


// EN ESTE PASO DECLARO EL EVENTO EN EL QUE SE DESPLIEGA Y SE CIERRA LA CAJA DE PREGUNTAS

let preguntasOverlay = document.querySelector(".preguntasOverlay");
let cajaPreguntas = document.querySelector(".cajaPreguntas");
let btnCerrarCaja = document.querySelector(".crucesita");
let btnAbrirCaja = document.querySelector(".selectPregunta");

function abrirCaja (){
    preguntasOverlay.classList.add('active');
    cajaPreguntas.classList.add('active');
    preguntasOverlay.classList.add('overlay');
    flecha.classList.remove("active");
    btnAbrirCaja.classList.remove("elegirPregunta")

    //CIERRO LAS VENTANAS DE AJUSTES Y OBJETIVOS SI ESTAN ABIERTAS
    if (objetivoJuego.classList.contains('active')==true || ajustesCaja.classList.contains('active')==true) {
        objetivoJuego.classList.remove('active');
    objetivoJuego.classList.add('inactive');
    
    ajustesCaja.classList.remove("active");
    iconoAjustes.classList.remove("active");
    iconoAjustes.classList.add("inactive");
    ajustesCaja.classList.add("inactive");
    listaAjustes.classList.add("inactive");
    listaAjustesItem.forEach(function(item) {
        item.classList.add("inactive");
      });
    nivelDiferente.classList.remove('nivelDiferente');  
    iconoPregunta.classList.remove('escondido');
        iconoPregunta.classList.add('aparecido');
    }

    historial.classList.remove('resultadoHistorial');
        

    //activo la variable "elegible" para ya poder adivinar.

    elegible = true;
}

function cerrarCaja (){
    preguntasOverlay.classList.remove('active');
    cajaPreguntas.classList.remove('active');
    preguntasOverlay.classList.remove('overlay');
    if (contadorPreguntas == 1 || contadorPreguntas == 4) {
        let clickEmoji = setTimeout(() => {
            Toastify({
        
                text: "PODÉS ARRIESGAR CLICKEANDO UNO DE LOS EMOJIS",
                
                duration: 3500,
        
                className: "toast"
                
                }).showToast();
        }, 6000);
        if (misEmojisOut == 19) {
            clearTimeout(clickEmoji)
        }
    }
}

btnAbrirCaja.addEventListener('click', abrirCaja);
btnCerrarCaja.addEventListener('click', cerrarCaja);








// DECLARO UN ARRAY CON LAS PREGUNTAS QUE VAN A ESTAR DISPONIBLES PARA EL USUARIO.

const preguntasParaAdivinar = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]

const preguntasParaAdivinarCPU = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]



//CREO UNA FUNCION PARA CONTESTAR LAS PREGUNTAS REALIZADAS.
let contadorPreguntas = 0;
let misEmojisOut = 0;

function buclePreguntasUsuario (dato) {
    if (dato <= preguntasParaAdivinar.length) {
            switch (dato){
                case 1:
                    if(elegidoCPU.color == "rojo"){
                        abrirPopUp();
                        textoPopUp.innerHTML = "ES DE COLOR ROJO"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].color != "rojo") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;
                                }
                                    
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{
                        abrirPopUp();
                        textoPopUp.innerHTML = "NO ES DE COLOR ROJO"
                        for (let i = 0; i < emojis.length; i++) {
                                    
                            if (emojis[i].color == "rojo") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }  
                    break;
                case 2:
                    if(elegidoCPU.color == "violeta"){

                        abrirPopUp();
                        textoPopUp.innerHTML = "ES DE COLOR VIOLETA"
                        
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].color != "violeta") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO ES DE COLOR VIOLETA"
                        for (let i = 0; i < emojis.length; i++) {
                                    
                            if (emojis[i].color == "violeta") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }    
                    break;                    
                case 3:
                    if(elegidoCPU.sexo == "masculino"){

                        abrirPopUp();
                        textoPopUp.innerHTML = "ES HOMBRE"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].sexo != "masculino") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO ES HOMBRE"
                        for (let i = 0; i < emojis.length; i++) {
                                    
                            if (emojis[i].sexo == "masculino") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                     misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    } 
                    break;
                case 4:
                    if(elegidoCPU.sexo == "femenino"){

                        abrirPopUp();
                        textoPopUp.innerHTML = "ES MUJER"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].sexo != "femenino") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO ES MUJER"
                        for (let i = 0; i < emojis.length; i++) {
                                    
                            if (emojis[i].sexo == "femenino") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;  
                case 5:
                    if(elegidoCPU.gorro == true){

                        abrirPopUp();
                        textoPopUp.innerHTML = "TIENE UN ACCESORIO EN LA CABEZA"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].gorro != true) {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO TIENE UN ACCESORIO EN LA CABEZA"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].gorro == true) {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;
                case 6:
                    if(elegidoCPU.ojos == "anteojos"){

                        abrirPopUp();
                        textoPopUp.innerHTML = "TIENE ANTEOJOS"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].ojos != "anteojos") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO TIENE ANTEOJOS"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].ojos == "anteojos") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;
                case 7:
                    if(elegidoCPU.cuernos == true){

                        abrirPopUp();
                        textoPopUp.innerHTML = "TIENE CUERNOS"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].cuernos != true) {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO TIENE CUERNOS"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].cuernos == true) {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;               
                case 8:
                    if(elegidoCPU.boca == "abierta"){

                        abrirPopUp();
                        textoPopUp.innerHTML = "TIENE LA BOCA ABIERTA"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].boca != "abierta") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO TIENE LA BOCA ABIERTA"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].boca == "abierta") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;                       
                case 9:
                    if(elegidoCPU.barba == true){

                        abrirPopUp();
                        textoPopUp.innerHTML = "TIENE BARBA"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].barba != true) {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO TIENE BARBA"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].barba == true) {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;                           
                case 10:
                    if(elegidoCPU.bigote == true){

                        abrirPopUp();
                        textoPopUp.innerHTML = "TIENE BIGOTE"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].bigote != true) {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO TIENE BIGOTE"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].bigote == true) {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;               
                case 11:
                    if(elegidoCPU.pelo =="marron"){

                        abrirPopUp();
                        textoPopUp.innerHTML = "TIENE EL PELO MARRÓN"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].pelo != "marron") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO TIENE EL PELO MARRÓN"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].pelo == "marron") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;        
                case 12:
                    if(elegidoCPU.pelo =="negro"){

                        abrirPopUp();
                        textoPopUp.innerHTML = "TIENE EL PELO NEGRO"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].pelo != "negro") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO TIENE EL PELO NEGRO"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].pelo == "negro") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;
                case 13:
                    if(elegidoCPU.pelo =="rubio"){

                        abrirPopUp();
                        textoPopUp.innerHTML = "TIENE EL PELO RUBIO"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].pelo != "rubio") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO TIENE EL PELO RUBIO"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].pelo == "rubio") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;                  
                case 14:
                    if(elegidoCPU.colorGorro == "azul"){

                        abrirPopUp();
                        textoPopUp.innerHTML = "TIENE UNA BANDANA AZUL"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].colorGorro != "azul") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO TIENE UNA BANDANA AZUL"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].colorGorro == "azul") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;                   
                case 15:
                    if(elegidoCPU.colorGorro == "negro"){

                        abrirPopUp();
                        textoPopUp.innerHTML = "TIENE UN GORRO NEGRO"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].colorGorro != "negro") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO TIENE UN GORRO NEGRO"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].colorGorro == "negro") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;
                case 16:
                    if(elegidoCPU.colorGorro == "rosa"){

                        abrirPopUp();
                        textoPopUp.innerHTML = "TIENE UN GORRO ROSA"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].colorGorro != "rosa") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO TIENE UN GORRO ROSA"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].colorGorro == "rosa") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;
                case 17:
                    if(elegidoCPU.colorGorro == "rojo"){

                        abrirPopUp();
                        textoPopUp.innerHTML = "TIENE UN GORRO ROJO"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].colorGorro != "rojo") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO TIENE UN GORRO ROJO"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].colorGorro == "rojo") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;
                case 18:
                    if(elegidoCPU.colorGorro == "blanco"){

                        abrirPopUp();
                        textoPopUp.innerHTML = "TIENE UN GORRO BLANCO"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].colorGorro != "blanco") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO TIENE UN GORRO BLANCO"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].colorGorro == "blanco") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;
                case 19:
                    if(elegidoCPU.ojosAnteojos == true){

                        abrirPopUp();
                        textoPopUp.innerHTML = "SE VEN SUS OJOS A TRAVES DE SUS ANTEOJOS"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].ojosAnteojos != true) {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO SE VEN SUS OJOS A TRAVES DE SUS ANTEOJOS"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].ojosAnteojos == true) {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;
                case 20:
                    if(elegidoCPU.pelo =="azul"){

                        abrirPopUp();
                        textoPopUp.innerHTML = "TIENE PELO AZUL"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].pelo != "azul") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                    }else{

                        abrirPopUp();
                        textoPopUp.innerHTML = "NO TIENE PELO AZUL"
                        for (let i = 0; i < emojis.length; i++) {       
                            if (emojis[i].pelo == "azul") {
                                if(tarjetas[i].classList.contains("descartado")==false){
                                    misEmojisOut ++;}
                                 tarjetas[i].classList.add("descartado");
                                tarjetasCajaPreguntas[i].classList.add("cancelado");
                                tarjetas[i].innerHTML = "";
                            }
                        }
                        
                    }
                    break;
                    case 21:
                        if(elegidoCPU.color == "verde"){
        
                            abrirPopUp();
                            textoPopUp.innerHTML = "ES DE COLOR VERDE"
                            for (let i = 0; i < emojis.length; i++) {       
                                if (emojis[i].color != "verde") {
                                    if(tarjetas[i].classList.contains("descartado")==false){
                                        misEmojisOut ++;
                                    }
                                    tarjetas[i].classList.add("descartado");
                                    tarjetasCajaPreguntas[i].classList.add("cancelado");
                                    tarjetas[i].innerHTML = "";
                                }
                            }
                        }else{
                            console.log("no es verde");
                            abrirPopUp();
                            textoPopUp.innerHTML = "NO ES DE COLOR VERDE"
                            for (let i = 0; i < emojis.length; i++) {       
                                if (emojis[i].color == "verde") {
                                    if(tarjetas[i].classList.contains("descartado")==false){
                                        misEmojisOut ++;
                                    }
                                    tarjetas[i].classList.add("descartado");
                                    tarjetasCajaPreguntas[i].classList.add("cancelado");
                                    tarjetas[i].innerHTML = "";
                                }
                            }
                            
                        }
                        break;
                        case 22:
                            if(elegidoCPU.color == "amarillo"){
        
                                abrirPopUp();
                                textoPopUp.innerHTML = "ES DE COLOR AMARILLO"
                                for (let i = 0; i < emojis.length; i++) {       
                                    if (emojis[i].color != "amarillo") {
                                        if(tarjetas[i].classList.contains("descartado")==false){
                                            misEmojisOut ++;
                                        }
                                        tarjetas[i].classList.add("descartado");
                                        tarjetasCajaPreguntas[i].classList.add("cancelado");
                                        tarjetas[i].innerHTML = "";
                                    }
                                }
                            }else{
        
                                abrirPopUp();
                                textoPopUp.innerHTML = "NO ES DE COLOR AMARILLO"
                                for (let i = 0; i < emojis.length; i++) {       
                                    if (emojis[i].color == "amarillo") {
                                        if(tarjetas[i].classList.contains("descartado")==false){
                                            misEmojisOut ++;
                                        }
                                        tarjetas[i].classList.add("descartado");
                                        tarjetasCajaPreguntas[i].classList.add("cancelado");
                                        tarjetas[i].innerHTML = "";
                                    }
                                }
                                
                            }
                            break;                                 
            }
                        
    }
    
    btnCerrarPopUp.classList.remove('active');
    btnCerrarPopUp.innerHTML="";
    setTimeout(turnoCPU, 2000);
    contadorPreguntas++;
    horaDeAdivinar();
}

//

//CAJA PREGUNTAS
let cajaSecciones = document.querySelector('.cajaSecciones');
let seccionVarios = document.querySelector('.seccionVarios');
let seccionAccesorios = document.querySelector('.seccionAccesorios');
let seccionFisico = document.querySelector('.seccionFisico');
let elegirSeccion = document.querySelector('.elegirSeccion');

let volverPreguntas = document.querySelector('.volverPreguntas');

let pregunta1 = document.createElement('div');
pregunta1.innerHTML = "ES DE COLOR ROJO?";
let pregunta2 = document.createElement('div');
pregunta2.innerHTML = "ES DE COLOR VIOLETA?"
let pregunta3 = document.createElement('div');
pregunta3.innerHTML = "ES HOMBRE?";
let pregunta4 = document.createElement('div');
pregunta4.innerHTML = "ES MUJER?";
let pregunta5 = document.createElement('div');
pregunta5.innerHTML = "TIENE UN ACCESORIO EN LA CABEZA?";
let pregunta6 = document.createElement('div');
pregunta6.innerHTML = "TIENE ANTEOJOS?";
let pregunta7 = document.createElement('div');
pregunta7.innerHTML = "TIENE CUERNOS?";
let pregunta8 = document.createElement('div');
pregunta8.innerHTML = "TIENE LA BOCA ABIERTA?";
let pregunta9 = document.createElement('div');
pregunta9.innerHTML = "TIENE BARBA?";
let pregunta10 = document.createElement('div');
pregunta10.innerHTML = "TIENE BIGOTE?";
let pregunta11 = document.createElement('div');
pregunta11.innerHTML = "TIENE PELO MARRÓN?";
let pregunta12 = document.createElement('div');
pregunta12.innerHTML = "TIENE PELO NEGRO?";
let pregunta13 = document.createElement('div');
pregunta13.innerHTML = "TIENE PELO RUBIO?";
let pregunta14 = document.createElement('div');
pregunta14.innerHTML = "TIENE UNA BANDANA AZUL?";
let pregunta15 = document.createElement('div');
pregunta15.innerHTML = "TIENE UN GORRO NEGRO?";
let pregunta16 = document.createElement('div');
pregunta16.innerHTML = "TIENE UN GORRO ROSA?";
let pregunta17 = document.createElement('div');
pregunta17.innerHTML = "TIENE UN GORRO ROJO?";
let pregunta18 = document.createElement('div');
pregunta18.innerHTML = "TIENE UN GORRO BLANCO?";
let pregunta19 = document.createElement('div');
pregunta19.innerHTML = "SE VEN SUS OJOS A TRAVÉS DE LOS ANTEOJOS?";
let pregunta20 = document.createElement('div');
pregunta20.innerHTML = "TIENE PELO AZUL?";
let pregunta21 = document.createElement('div');
pregunta21.innerHTML = "ES DE COLOR VERDE?";
let pregunta22 = document.createElement('div');
pregunta22.innerHTML = "ES DE COLOR AMARILLO?";

preguntasEscritas = [pregunta1, pregunta2, pregunta3, pregunta4, pregunta5, pregunta6, pregunta7, pregunta8, pregunta9, pregunta10, pregunta11, pregunta12, pregunta13, pregunta14, pregunta15, pregunta16, pregunta17, pregunta18, pregunta19, pregunta20, pregunta21, pregunta22]

preguntasEscritas.forEach(pregunta => {
    pregunta.classList.add('pregunta');
});


seccionVarios.addEventListener('click', ()=> {
    elegirSeccion.innerHTML = "ELIJA UNA DE LAS"+"<br>SIGUIENTES PREGUNTAS"
    seccionVarios.remove();
    seccionAccesorios.remove();
    seccionFisico.remove();

    cajaSecciones.append(pregunta1);
    cajaSecciones.append(pregunta2);
    cajaSecciones.append(pregunta3);
    cajaSecciones.append(pregunta4);
    cajaSecciones.append(pregunta7);
    cajaSecciones.append(pregunta21);
    cajaSecciones.append(pregunta22);

    volverPreguntas.classList.add('active');


})

seccionAccesorios.addEventListener('click', ()=> {
    elegirSeccion.innerHTML = "ELIJA UNA DE LAS SIGUIENTES PREGUNTAS"
    seccionVarios.remove();
    seccionAccesorios.remove();
    seccionFisico.remove();

    cajaSecciones.append(pregunta5);
    cajaSecciones.append(pregunta6);
    cajaSecciones.append(pregunta14);
    cajaSecciones.append(pregunta15);
    cajaSecciones.append(pregunta16);
    cajaSecciones.append(pregunta17);
    cajaSecciones.append(pregunta18);
    cajaSecciones.append(pregunta19);

    volverPreguntas.classList.add('active');
})

seccionFisico.addEventListener('click', ()=> {
    elegirSeccion.innerHTML = "ELIJA UNA DE LAS SIGUIENTES PREGUNTAS"
    seccionVarios.remove();
    seccionAccesorios.remove();
    seccionFisico.remove();

    cajaSecciones.append(pregunta8);
    cajaSecciones.append(pregunta9);
    cajaSecciones.append(pregunta10);
    cajaSecciones.append(pregunta11);
    cajaSecciones.append(pregunta12);
    cajaSecciones.append(pregunta13);
    cajaSecciones.append(pregunta20);

    volverPreguntas.classList.add('active');
})

function resetearPreguntas(){
    cajaSecciones.append(seccionFisico);
    cajaSecciones.insertBefore(seccionAccesorios, seccionFisico);
    cajaSecciones.insertBefore(seccionVarios, seccionAccesorios);
    elegirSeccion.innerHTML = "ELIJA UNA SECCIÓN DE PREGUNTAS"

    pregunta1.remove();
    pregunta2.remove();
    pregunta3.remove();
    pregunta4.remove();
    pregunta5.remove();
    pregunta6.remove();
    pregunta7.remove();
    pregunta8.remove();
    pregunta9.remove();
    pregunta10.remove();
    pregunta11.remove();
    pregunta12.remove();
    pregunta13.remove();
    pregunta14.remove();
    pregunta15.remove();
    pregunta16.remove();
    pregunta17.remove();
    pregunta18.remove();
    pregunta19.remove();
    pregunta20.remove();
    pregunta21.remove();
    pregunta22.remove();


    volverPreguntas.classList.remove('active');
}

volverPreguntas.addEventListener('click', ()=> {
    resetearPreguntas();
})


//declaro las variables para los emojis que se encuentran en la caja de preguntas
let rickS = document.querySelector('.rickS');
let eliasS = document.querySelector('.eliasS');
let phillipS = document.querySelector('.phillipS');
let frankieS = document.querySelector('.frankieS');
let emmaS = document.querySelector('.emmaS');
let roxyS = document.querySelector('.roxyS');
let markS = document.querySelector('.markS');
let stuartS = document.querySelector('.stuartS');
let nickS = document.querySelector('.nickS');
let maryS = document.querySelector('.maryS');
let courtneyS = document.querySelector('.courtneyS');
let mikeyS = document.querySelector('.mikeyS');
let gerardS = document.querySelector('.gerardS');
let ramonaS = document.querySelector('.ramonaS');
let patrickS = document.querySelector('.patrickS');
let rubyS = document.querySelector('.rubyS');
let pennyS = document.querySelector('.pennyS');
let jennyS = document.querySelector('.jennyS');
let thomasS = document.querySelector('.thomasS');
let rhondaS = document.querySelector('.rhondaS');

let tarjetasCajaPreguntas = [rickS, eliasS, phillipS, frankieS, emmaS, roxyS, markS, stuartS, nickS, maryS, courtneyS, mikeyS, gerardS, ramonaS, patrickS, rubyS, pennyS, jennyS, thomasS, rhondaS];





//AGREGO TODOS LOS EVENTOS PARA PODER REALIZAR TODAS LAS PREGUNTAS
pregunta1.addEventListener('click', () => realizarPregunta(1));
pregunta2.addEventListener('click', () => realizarPregunta(2));
pregunta3.addEventListener('click', () => realizarPregunta(3));
pregunta4.addEventListener('click', () => realizarPregunta(4));
pregunta5.addEventListener('click', () => realizarPregunta(5));
pregunta6.addEventListener('click', () => realizarPregunta(6));
pregunta7.addEventListener('click', () => realizarPregunta(7));
pregunta8.addEventListener('click', () => realizarPregunta(8));
pregunta9.addEventListener('click', () => realizarPregunta(9));
pregunta10.addEventListener('click', () => realizarPregunta(10));
pregunta11.addEventListener('click', () => realizarPregunta(11));
pregunta12.addEventListener('click', () => realizarPregunta(12));
pregunta13.addEventListener('click', () => realizarPregunta(13));
pregunta14.addEventListener('click', () => realizarPregunta(14));
pregunta15.addEventListener('click', () => realizarPregunta(15));
pregunta16.addEventListener('click', () => realizarPregunta(16));
pregunta17.addEventListener('click', () => realizarPregunta(17));
pregunta18.addEventListener('click', () => realizarPregunta(18));
pregunta19.addEventListener('click', () => realizarPregunta(19));
pregunta20.addEventListener('click', () => realizarPregunta(20));
pregunta21.addEventListener('click', () => realizarPregunta(21));
pregunta22.addEventListener('click', () => realizarPregunta(22));

//HAGO UNA FUNCION QUE CIERRE LA CAJA DE PREGUNTAS Y HAGA LA PREGUNTA A LA VEZ
function realizarPregunta(dato){
    buclePreguntasUsuario(dato);
    cerrarCaja();
    resetearPreguntas();
}


//--------- TURNO DE LA CPU

//DECLARO TODOS LOS EMOJIS DEL TABLERO DE LA CPU


let rickCPU = document.querySelector('.rickCPU');
let eliasCPU = document.querySelector('.eliasCPU');
let phillipCPU = document.querySelector('.phillipCPU');
let frankieCPU = document.querySelector('.frankieCPU');
let emmaCPU = document.querySelector('.emmaCPU');
let roxyCPU = document.querySelector('.roxyCPU');
let markCPU = document.querySelector('.markCPU');
let stuartCPU = document.querySelector('.stuartCPU');
let nickCPU = document.querySelector('.nickCPU');
let maryCPU = document.querySelector('.maryCPU');
let courtneyCPU = document.querySelector('.courtneyCPU');
let mikeyCPU = document.querySelector('.mikeyCPU');
let gerardCPU = document.querySelector('.gerardCPU');
let ramonaCPU = document.querySelector('.ramonaCPU');
let patrickCPU = document.querySelector('.patrickCPU');
let rubyCPU = document.querySelector('.rubyCPU');
let pennyCPU = document.querySelector('.pennyCPU');
let jennyCPU = document.querySelector('.jennyCPU');
let thomasCPU = document.querySelector('.thomasCPU');
let rhondaCPU = document.querySelector('.rhondaCPU');


let tarjetas = [rick, elias, phillip, frankie, emma, roxy, mark, stuart, nick, mary, courtney, mikey, gerard, ramona, patrick, ruby, penny, jenny, thomas, rhonda];
let tarjetasCPU = [rickCPU, eliasCPU, phillipCPU, frankieCPU, emmaCPU, roxyCPU, markCPU, stuartCPU, nickCPU, maryCPU, courtneyCPU, mikeyCPU, gerardCPU, ramonaCPU, patrickCPU, rubyCPU, pennyCPU, jennyCPU, thomasCPU,rhondaCPU];

let piensaCPU;


//DECLARO EL BUCLE DE PREGUNTAS PERO PARA LA CPU

let contadorDescartados = 0;

function countCPU (){
    for (let i = 0; i < tarjetasCPU.length; i++) {
        if (tarjetasCPU[i].classList.contains("descartado")) {
            contadorDescartados++;
        }
        
    }
    if (contadorDescartados < 19) {
        contadorDescartados = 0;
    }
}

function buclePreguntasCPU (dato) {
    if (dato <= preguntasParaAdivinar.length) {
            switch (dato){
                case 1:
                    abrirPopUp();
                    if (emojiElegido.color == "rojo") {
                        textoPopUp.innerHTML = "PREGUNTÓ SI ES DE COLOR ROJO, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].color) != "rojo") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI ES DE COLOR ROJO, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].color) == "rojo") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;

                case 2:
                    abrirPopUp();
                    if (emojiElegido.color == "violeta") {
                        textoPopUp.innerHTML = "PREGUNTÓ SI ES DE COLOR VIOLETA, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].color) != "violeta") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI ES DE COLOR VIOLETA, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].color) == "violeta") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;

                case 3:                    
                    abrirPopUp();
                    if (emojiElegido.sexo == "masculino") {
                        textoPopUp.innerHTML = "PREGUNTÓ SI ES HOMBRE, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].sexo) != "masculino") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI ES HOMBRE, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].sexo) == "masculino") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;

                case 4:                
                    abrirPopUp();
                    if (emojiElegido.sexo == "femenino") {
                        textoPopUp.innerHTML = "PREGUNTÓ SI ES MUJER, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].sexo) != "femenino") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI ES MUJER, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].sexo) == "femenino") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;
  
                case 5:
                    abrirPopUp();
                    if (emojiElegido.gorro == true) {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE UN ACCESORIO EN LA CABEZA, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].gorro) != true) {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE UN ACCESORIO EN LA CABEZA, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].gorro) == true) {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;

                case 6:
                    abrirPopUp();
                    if (emojiElegido.ojos == "anteojos") {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE ANTEOJOS, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].ojos) != "anteojos") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE ANTEOJOS, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].ojos) == "anteojos") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;

                case 7:
                    abrirPopUp();
                    if (emojiElegido.cuernos == true) {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE CUERNOS, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].cuernos) != true) {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE CUERNOS, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].cuernos) == true) {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;
           
                case 8:
                    abrirPopUp();
                    if (emojiElegido.boca == "abierta") {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE LA BOCA ABIERTA, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].boca) != "abierta") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE LA BOCA ABIERTA, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].boca) == "abierta") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;
                      
                case 9:
                    abrirPopUp();
                    if (emojiElegido.barba == true) {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE BARBA, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].barba) != true) {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE BARBA, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].barba) == true) {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;
                          
                case 10:
                    abrirPopUp();
                    if (emojiElegido.bigote == true) {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE BIGOTE, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].bigote) != true) {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE BIGOTE, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].bigote) == true) {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;
              
                case 11:
                    abrirPopUp();
                    if (emojiElegido.pelo == "marron") {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE PELO MARRÓN, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].pelo) != "marron") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE PELO MARRÓN, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].pelo) == "marron") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;
     
                case 12:
                    abrirPopUp();
                    if (emojiElegido.pelo == "negro") {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE PELO NEGRO, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].pelo) != "negro") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE PELO NEGRO, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].pelo) == "negro") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;

                case 13:
                    abrirPopUp();
                    if (emojiElegido.pelo == "rubio") {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE PELO RUBIO, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].pelo) != "rubio") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE PELO RUBIO, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].pelo) == "rubio") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;
             
                case 14:
                    abrirPopUp();
                    if (emojiElegido.colorGorro == "azul") {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE UNA BANDANA AZUL, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].colorGorro) != "azul") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE UNA BANDANA AZUL, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].colorGorro) == "azul") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;
               
                case 15:
                    abrirPopUp();
                    if (emojiElegido.colorGorro == "negro") {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE UN GORRO NEGRO, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].colorGorro) != "negro") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE UN GORRO NEGRO, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].colorGorro) == "negro") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;

                case 16:
                    abrirPopUp();
                    if (emojiElegido.colorGorro == "rosa") {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE UN GORRO ROSA, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].colorGorro) != "rosa") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE UN GORRO ROSA, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].colorGorro) == "rosa") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;

                case 17:
                    abrirPopUp();
                    if (emojiElegido.colorGorro == "rojo") {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE UN GORRO ROJO, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].colorGorro) != "rojo") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE UN GORRO ROJO, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].colorGorro) == "rojo") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;

                case 18:
                    abrirPopUp();
                    if (emojiElegido.colorGorro == "blanco") {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE UN GORRO BLANCO, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].colorGorro) != "blanco") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE UN GORRO BLANCO, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].colorGorro) == "blanco") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;

                case 19:
                    abrirPopUp();
                    if (emojiElegido.ojosAnteojos == true) {
                        textoPopUp.innerHTML = "PREGUNTÓ SI SE VEN SUS OJOS A TRAVÉS DE LOS ANTEOJOS, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].ojosAnteojos) != true) {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI SE VEN SUS OJOS A TRAVÉS DE LOS ANTEOJOS, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].ojosAnteojos) == true) {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;

                case 20:
                    abrirPopUp();
                    if (emojiElegido.pelo == "azul") {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE PELO AZUL, Y LA RESPUESTA FUE SI ";
                        for(index=0 ; index < emojis.length ; index++){
                            
                            if ((emojis[index].pelo) != "azul") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }else {
                        textoPopUp.innerHTML = "PREGUNTÓ SI TIENE PELO AZUL, Y LA RESPUESTA FUE NO";
                        for(index=0 ; index < emojis.length ; index++){    
                            
                            if ((emojis[index].pelo) == "azul") {
                                tarjetasCPU[index].classList.add("descartado");
                                tarjetasCPU[index].innerHTML = ""; 
                                emojis[index].descartado = true;  
                            }
                        }
                    }
                    break;
                 
                    case 21:
                        abrirPopUp();
                        if (emojiElegido.color == "verde") {
                            textoPopUp.innerHTML = "PREGUNTÓ SI ES DE COLOR VERDE, Y LA RESPUESTA FUE SI ";
                            for(index=0 ; index < emojis.length ; index++){
                                
                                if ((emojis[index].color) != "verde") {
                                    tarjetasCPU[index].classList.add("descartado");
                                    tarjetasCPU[index].innerHTML = ""; 
                                    emojis[index].descartado = true;  
                                }
                            }
                        }else {
                            textoPopUp.innerHTML = "PREGUNTÓ SI ES DE COLOR VERDE, Y LA RESPUESTA FUE NO";
                            for(index=0 ; index < emojis.length ; index++){    
                                
                                if ((emojis[index].color) == "verde") {
                                    tarjetasCPU[index].classList.add("descartado");
                                    tarjetasCPU[index].innerHTML = ""; 
                                    emojis[index].descartado = true;  
                                }
                            }
                        }
                        break;
                    
                        case 22:
                            abrirPopUp();
                            if (emojiElegido.color == "amarillo") {
                                textoPopUp.innerHTML = "PREGUNTÓ SI ES DE COLOR AMARILLO, Y LA RESPUESTA FUE SI ";
                                for(index=0 ; index < emojis.length ; index++){
                                    
                                    if ((emojis[index].color) != "amarillo") {
                                        tarjetasCPU[index].classList.add("descartado");
                                        tarjetasCPU[index].innerHTML = ""; 
                                        emojis[index].descartado = true;  
                                    }
                                }
                            }else {
                                textoPopUp.innerHTML = "PREGUNTÓ SI ES DE COLOR AMARILLO, Y LA RESPUESTA FUE NO";
                                for(index=0 ; index < emojis.length ; index++){    
                                    
                                    if ((emojis[index].color) == "amarillo") {
                                        tarjetasCPU[index].classList.add("descartado");
                                        tarjetasCPU[index].innerHTML = ""; 
                                        emojis[index].descartado = true;  
                                    }
                                }
                            }
                            break;
                             
            }
                        
    }   
    btnCerrarPopUp.classList.add('active');
    btnCerrarPopUp.innerHTML="ENTENDIDO";
    countCPU(); 
}



//AVISO QUE LE QUEDAN POCOS EMOJIS AL OPONENTE
function pocosEmojis(){ 
    Toastify({

        text: "A TU OPONENTE LE QUEDAN POCOS EMOJIS",
        
        duration: 3500,

        className: "toast"
        
        }).showToast();

    setTimeout(() => {
        Toastify({
    
            text: "DEBERÍAS CONSIDERAR ADIVINAR",
            
            duration: 3500,
    
            className: "toast"
            
            }).showToast();
    }, 1500);    
}

//DEPENDIENDO LA DIFICULTAD ELEGIDA, SE REALIZA CIERTO BUCLE.

function dificultad(){
    if (nivelJuego == "dificil") {
        chequeoPreguntas();
    }
}


//ESTA FUNCIÓN HACE UN CHEQUEO DE LOS EMOJIS QUE NO ESTAN DESCARTADOS EN EL TABLERO DE LA CPU

function chequeoEmojis () {
    for (let i = 0;i < emojis.length; i++) {
          
        if (emojis[i].descartado == true && (emojisAlive.indexOf(emojis[i]) != (-1))) {
            emojisAlive.splice(emojisAlive.indexOf(emojis[i]),1);
        }
 
    }   

}

let preguntaViva = [];

let pregunta1Muerta = (element) => element.color !== "rojo";
let pregunta2Muerta = (element) => element.color !== "violeta";
let pregunta3Muerta = (element) => element.sexo !== "masculino";
let pregunta4Muerta = (element) => element.sexo !== "femenino";
let pregunta5Muerta = (element) => element.gorro !== true;
let pregunta6Muerta = (element) => element.ojos !== "anteojos";
let pregunta7Muerta = (element) => element.cuernos !== true;
let pregunta8Muerta = (element) => element.boca !== "abierta";
let pregunta9Muerta = (element) => element.barba !== true;
let pregunta10Muerta = (element) => element.bigote !== true;
let pregunta11Muerta = (element) => element.pelo !== "marron";
let pregunta12Muerta = (element) => element.pelo !== "negro";
let pregunta13Muerta = (element) => element.pelo !== "rubio";
let pregunta14Muerta = (element) => element.colorGorro !== "azul";
let pregunta15Muerta = (element) => element.colorGorro !== "negro";
let pregunta16Muerta = (element) => element.colorGorro !== "rosa";
let pregunta17Muerta = (element) => element.colorGorro !== "rojo";
let pregunta18Muerta = (element) => element.colorGorro !== "blanco";
let pregunta19Muerta = (element) => element.ojosAnteojos !== true;
let pregunta20Muerta = (element) => element.pelo !== "azul";
let pregunta21Muerta = (element) => element.color !== "verde";
let pregunta22Muerta = (element) => element.color !== "amarillo";

// ESTA FUNCION HACE UN CHEQUEO DE LAS PREGUNTAS QUE LE QUEDAN A LA CPU
// Y SI HAY UNA PREGUNTA QUE LA RESPUESTA ES NEGATIVA PARA TODOS LOS EMOJIS QUE LE QUEDAN
// SIN DESCARTAR, ENTONCES ESA PREGUNTA SE BORRA DE LAS OPCIONES, HACIENDO QUE 
// EL DESEMPEÑO DE LA CPU SEA MÁS EFICIENTE. (NIVEL DIFÍCIL)

function chequeoPreguntas(){
    for (pregunta=1 ; pregunta <=  preguntasParaAdivinar.length; pregunta++) {
        switch (pregunta){
            case 1:
                if(emojisAlive.every(pregunta1Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 1) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                         
                    }
                }
                break;
            case 2:
                if(emojisAlive.every(pregunta2Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 2) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;
            case 3:
                if(emojisAlive.every(pregunta3Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 3) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;
            case 4:
                if(emojisAlive.every(pregunta4Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 4) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;   
            case 5:
                if(emojisAlive.every(pregunta5Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 5) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;  
            case 6:
                if(emojisAlive.every(pregunta6Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 6) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;
            case 7:
                if(emojisAlive.every(pregunta7Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 7) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;
            case 8:
                if(emojisAlive.every(pregunta8Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 8) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;    
            case 9:
                if(emojisAlive.every(pregunta9Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 9) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;    
            case 10:
                if(emojisAlive.every(pregunta10Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 10) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;
            case 11:
                if(emojisAlive.every(pregunta11Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 11) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;
            case 12:
                if(emojisAlive.every(pregunta12Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 12) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;
            case 13:
                if(emojisAlive.every(pregunta13Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 13) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;
            case 14:
                if(emojisAlive.every(pregunta14Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 14) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;
            case 15:
                if(emojisAlive.every(pregunta15Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 15) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;
            case 16:
                if(emojisAlive.every(pregunta16Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 16) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;
            case 17:
                if(emojisAlive.every(pregunta17Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 17) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;
            case 18:
                if(emojisAlive.every(pregunta18Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 18) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;
            case 19:
                if(emojisAlive.every(pregunta19Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 19) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;
            case 20:
                if(emojisAlive.every(pregunta20Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 20) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;
            case 21:
                if(emojisAlive.every(pregunta21Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 21) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;
            case 22:
                if(emojisAlive.every(pregunta22Muerta) == true){
                    for (let i = 0; i < preguntasParaAdivinarCPU.length; i++) {
                        if (preguntasParaAdivinarCPU[i] === 22) {
                            preguntasParaAdivinarCPU.splice(i,1);
                        }
                        
                    }
                }
                break;        
        }
        console.log(emojisAlive.length);
    }
}

// ESTABLEZCO UN CONTADOR PARA CUANDO LE QUEDEN POCOS EMOJIS AL OPONENTE, AVISARLE AL USUARIO.
let contador = 0;

function sumandoContador() {
    tarjetasCPU.forEach(el => {
        if (el.classList.contains("descartado")===true) {
            contador++;
        }
    });
}

function refreshContador(){
    contador=0;
}


// EN ESTE FUNCION SE INCLUYEN VARIAS FUNCIONES A EJECUTAR EN EL TURNO DE LA CPU

function preguntaCPU (){
    shuffle(preguntasParaAdivinarCPU);
    buclePreguntasCPU(preguntasParaAdivinarCPU[0]);
    chequeoEmojis();
    dificultad();
    sumandoContador();
    if (contador >= 16) {
        let quedanPocosEmojis = setTimeout(pocosEmojis, 4000);
        if (misEmojisOut == 19) {
            clearTimeout(quedanPocosEmojis);
        }   
    }
    
    setTimeout(refreshContador, 0);
}

//esta funcion es para que no sea inmediata la pregunta de la CPU
function cpuPiensaRespuesta(){
    piensaCPU = setTimeout(preguntaCPU, 2000);
}

function turnoCPU(){
    textoPopUp.innerHTML = "AHORA ES EL TURNO DE TU OPONENTE";
    cpuPiensaRespuesta();
    setTimeout(() => {
        tableroCPU.classList.add("active");
    }, 500);
}

//ADIVINAR

let reiniciar = document.createElement("div");
reiniciar.classList.add("reiniciar");
reiniciar.innerHTML = "REINICIAR JUEGO";

//declaro las variables para las partidas ganadas y perdidas por el usuario
let ganados = parseInt(localStorage.getItem('ganados'));
let perdidos = parseInt(localStorage.getItem('perdidos'));


function adivinando(emoji, tarjeta) {
    if (elegible == true && tarjeta.classList.contains("descartado") == false) {
        compararElegido(emoji);
    }
}

//funcion para que me avise que solo queda 1.
function horaDeAdivinar (){
    if (misEmojisOut == 19 ) {
        for( let i=0; i < tarjetas.length; i++){
            if(tarjetas[i].classList.contains('descartado')==false){
                tarjetas[i].classList.add('ultimoEmoji');
                btnAbrirCaja.removeEventListener('click', abrirCaja);
                btnAbrirCaja.addEventListener('click', ()=> {
                    abrirPopUp();
                    textoPopUp.innerHTML = "TE QUEDA SOLO 1 EMOJI.<br>HORA DE ADIVINAR!!"
                });
            }
            
        }
    }
}


function compararElegido (emoji){

    if(elegidoCPU == emoji){

        abrirPopUp();
        textoPopUp.innerHTML = "FELICITACIONES "+userNameMayus2+"!!! GANASTE!!!"
        btnCerrarPopUp.remove();
        elijoEmoji.append(reiniciar);
        popUp.classList.add("ganadorFondo");   
        
        if (localStorage.getItem("ganados") == null) {
            localStorage.setItem('ganados', "1")
        }else{
            ganados ++;
            `${ganados}`
            console.log(`${ganados}`);
            localStorage.setItem('ganados', ganados) ;
        }
        
    }else{
        abrirPopUp();
        textoPopUp.innerHTML = "LO SIENTO "+userNameMayus2+", PERO PERDISTE!"
        btnCerrarPopUp.remove();
        elijoEmoji.append(reiniciar);
        popUp.classList.add("perdedorFondo");

        if (localStorage.getItem("perdidos") == null) {
            localStorage.setItem('perdidos', "1")
        }else{
            perdidos ++;
            `${perdidos}`
            localStorage.setItem('perdidos', perdidos) ;
        }
    }
    elijoEmoji.classList.add("veredicto");
}

function reiniciarJuego(){
    location.reload();
}

//creo una variable para saber que solo le queda 1 emoji al oponente

let unEmojiCPU = 0;

function ganoCPU(){    
    if (contadorDescartados >= 19 && unEmojiCPU < 2) {
        unEmojiCPU++;
    }
    if (contadorDescartados >= 19 && unEmojiCPU == 2) {
        console.log("a la maquina le queda solo 1 emoji, perdiste.");
        abrirPopUp();
        textoPopUp.innerHTML = "LO SIENTO "+userNameMayus2+", PERO PERDISTE!"
        btnCerrarPopUp.remove();
        elijoEmoji.append(reiniciar);
        popUp.classList.add("perdedorFondo");
        elijoEmoji.classList.add("veredicto");
        clearTimeout(pocosEmojis);
    }
}

rick.addEventListener('click', () => adivinando(emojis[0], rick));
elias.addEventListener('click', () => adivinando(emojis[1], elias));
phillip.addEventListener('click', () => adivinando(emojis[2], phillip));
frankie.addEventListener('click', () => adivinando(emojis[3], frankie));
emma.addEventListener('click', () => adivinando(emojis[4], emma));
roxy.addEventListener('click', () => adivinando(emojis[5], roxy));
mark.addEventListener('click', () => adivinando(emojis[6], mark));
stuart.addEventListener('click', () => adivinando(emojis[7], stuart));
nick.addEventListener('click', () => adivinando(emojis[8], nick));
mary.addEventListener('click', () => adivinando(emojis[9], mary));
courtney.addEventListener('click', () => adivinando(emojis[10], courtney));
mikey.addEventListener('click', () => adivinando(emojis[11], mikey));
gerard.addEventListener('click', () => adivinando(emojis[12], gerard));
ramona.addEventListener('click', () => adivinando(emojis[13], ramona));
patrick.addEventListener('click', () => adivinando(emojis[14], patrick));
ruby.addEventListener('click', () => adivinando(emojis[15], ruby));
penny.addEventListener('click', () => adivinando(emojis[16], penny));
jenny.addEventListener('click', () => adivinando(emojis[17], jenny));
thomas.addEventListener('click', () => adivinando(emojis[18], thomas));
rhonda.addEventListener('click', () => adivinando(emojis[19], rhonda));

reiniciar.addEventListener('click', ()=> reiniciarJuego());


//AJUSTES

let iconoAjustes = document.querySelector('.iconoAjustes');
let ajustesCaja = document.querySelector('.ajustes');
let listaAjustes = document.querySelector(".listaAjustes");
let listaAjustesItem = document.querySelectorAll(".listaItem");
let iconoPregunta = document.querySelector('.iconoPregunta');

iconoAjustes.addEventListener('click', ()=> {
    if (iconoAjustes.classList.contains("active") == false) {
        ajustesCaja.classList.add("active");
        iconoAjustes.classList.add("active");
        listaAjustes.classList.add("active");
        listaAjustesItem.forEach(function(item) {
            item.classList.add("active");
          });
        iconoPregunta.classList.add('escondido');
        iconoPregunta.classList.remove('aparecido');
        objetivoJuego.classList.remove('active');
        objetivoJuego.classList.add('inactive');


        if (iconoAjustes.classList.contains("inactive") == true) {
            iconoAjustes.classList.remove("inactive");
            ajustesCaja.classList.remove("inactive");
            listaAjustes.classList.remove("inactive");
            listaAjustesItem.forEach(function(item) {
                item.classList.remove("inactive");
            });
        }
    }else{
        ajustesCaja.classList.remove("active");
        iconoAjustes.classList.remove("active");
        iconoAjustes.classList.add("inactive");
        ajustesCaja.classList.add("inactive");
        listaAjustes.classList.add("inactive");
        listaAjustesItem.forEach(function(item) {
            item.classList.add("inactive");
          });
        nivelDiferente.classList.remove('nivelDiferente');  
        iconoPregunta.classList.remove('escondido');
        iconoPregunta.classList.add('aparecido');
    }
    preguntasOverlay.classList.remove('active');
    cajaPreguntas.classList.remove('active');
    preguntasOverlay.classList.remove('overlay');
    historial.classList.remove('resultadoHistorial');
})

//CAMBIO DIFICULTAD

let itemNivel = document.querySelector(".nivel");
let nivelElegido = localStorage.getItem('dificultad');
let nivelAElegir;

function cambiarNivel (){
    if (localStorage.getItem('dificultad')=='normal') {
        nivelDiferente.innerHTML = 'CAMBIAR A DIFÍCIL';
    }else{
        nivelDiferente.innerHTML = 'CAMBIAR A FÁCIL';
    }
}


let nivelDiferente = document.createElement("li");
let itemHistorial = document.querySelector(".historial");

// SE CREA EL ITEM PARA CAMBIAR DE DIFICULTAD
itemNivel.addEventListener('click', ()=> {
    if (nivelDiferente.classList.contains('nivelDiferente')==false) {
        listaAjustes.insertBefore(nivelDiferente, itemHistorial);
        nivelDiferente.classList.add("subItem","nivelDiferente");
        cambiarNivel();
    }else{
        nivelDiferente.classList.remove('nivelDiferente');
    }
    historial.classList.remove('resultadoHistorial');
})

//LE AÑADO LA FUNCIONALIDAD AL ITEM PARA CAMBIAR DE DIFICULTAD
nivelDiferente.addEventListener('click', ()=> {
    if (localStorage.getItem('dificultad') == 'normal') {
        localStorage.setItem('dificultad', 'dificil');
        nivelElegido = localStorage.getItem('dificultad');
    }else{
        localStorage.setItem('dificultad', 'normal');
        nivelElegido = localStorage.getItem('dificultad');
    }
    ajustesCaja.classList.remove("active");
    iconoAjustes.classList.remove("active");
    iconoAjustes.classList.add("inactive");
    ajustesCaja.classList.add("inactive");
    listaAjustes.classList.add("inactive");
    listaAjustesItem.forEach(function(item) {
        item.classList.add("inactive");});
    nivelDiferente.remove();
    iconoPregunta.classList.remove('escondido');
    iconoPregunta.classList.add('aparecido');
})

//ITEM REINICIAR PARTIDA

itemReiniciar = document.querySelector('.itemReiniciar');

itemReiniciar.addEventListener('click', ()=> reiniciarJuego());

// OBJETIVO DEL JUEGO // SIGNO PREGUNTA

signoPregunta = document.querySelector('.iconoPregunta');
objetivoJuego = document.querySelector('.objetivoJuego');


signoPregunta.addEventListener('click', ()=> {
    if (objetivoJuego.classList.contains('inactive')) {
        objetivoJuego.classList.add('active');
        objetivoJuego.classList.remove('inactive');
    } else {
        objetivoJuego.classList.remove('active');
        objetivoJuego.classList.add('inactive');
    }
    preguntasOverlay.classList.remove('active');
    cajaPreguntas.classList.remove('active');
    preguntasOverlay.classList.remove('overlay');
})


// HISTORIAL

let historial = document.createElement("li");
function historialActual (){
    if (ganados > 0) {
        if (Number.isInteger(ganados) == false) {
            ganados = 0;
        }
        if (Number.isInteger(perdidos) == false ) {
            perdidos = 0;
        }
        historial.innerHTML = 'PARTIDAS GANADAS: '+ganados+'<br>PARTIDAS PERDIDAS: '+perdidos;    
    }else{
        historial.innerHTML = "NO SE REGISTRAN PARTIDAS JUGADAS"
    }
    
}


itemHistorial.addEventListener('click', ()=> {
    if (historial.classList.contains('resultadoHistorial')==false) {
        listaAjustes.insertBefore(historial, itemReiniciar);
        historial.classList.add("subItem","resultadoHistorial");
    }else{
        historial.classList.remove('resultadoHistorial');
    }
    historialActual();
    nivelDiferente.classList.remove('nivelDiferente');
})



if (window.matchMedia("(max-width: 420px)").matches) {
    iconoPregunta.classList.add('w410');
}


// FIN DEL JUEGO.