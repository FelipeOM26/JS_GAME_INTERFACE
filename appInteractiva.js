





function asignarValor(elemento, texto) {

    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;


}

let secret;
let capturar;
let numIntentos;
let intentos = 1;
let numerosSorteados = [];


function configuracion() {


    capturar = parseInt(document.getElementById('number').value);
    numIntentos = parseInt(document.getElementById('intento').value);

    numeroAleatorio();


    if (isNaN(capturar) || isNaN(numIntentos)) {
        asignarValor('texto', 'Configura tu juego, Venga!');
    } else {
        asignarValor('texto', 'A JUGAR!');
        document.getElementById('configuracionContainer').style.display = 'none';
        configuracionContainer.classList.add('hidden');
    }



}
var numeroGenerado;

function numeroAleatorio() {




    numeroGenerado = Math.floor(Math.random() * capturar) + 1;
    console.log("aleatorio:" + numeroGenerado);
    console.log(numerosSorteados);

    if (numerosSorteados.length === capturar) {

        asignarValor('texto', 'Ya sorteaste todos los numeros');
        return;

    } else if (numerosSorteados.includes(numeroGenerado)) {

        return numeroAleatorio();
    } else {

        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }



}


function clean() {
    document.querySelector('#numeroUsuario').value = '';
}


function clickTry() {


    let numeroUser;

    if (isNaN(capturar) || isNaN(numIntentos)) {

        asignarValor('texto', 'Alto! Configura tu juego');
        return;
    }

    numeroUser = parseInt(document.getElementById('numeroUsuario').value);

    console.log(intentos);

    if (isNaN(numeroUser)) {

        asignarValor('texto', 'Ingrese un dato Valido');
        return;
    }

    if (numeroUser === numeroGenerado) {
        asignarValor('texto', `ADIVINASTE!, FELICIDADES `);
        document.getElementById('clean').removeAttribute('disabled');

        return;
    } else if (numeroUser > numeroGenerado) {
        asignarValor('texto', 'TSS!, EL NUMERO ES MENOR!');

    } else {

        asignarValor('texto', 'UFF!, EL NUMERO ES MAYOR!');
    }


    if (intentos >= numIntentos) {
        asignarValor('texto', `Se terminaron tus intentos, Numero secreto:${numeroGenerado}`);
        document.getElementById('clean').removeAttribute('disabled');
    }

    intentos++;
    clean();





}

function mensajeIniciales() {

    asignarValor('texto', 'BIENVENIDO')

}

function reiniciarBotonesConfiguracion() {
    document.querySelector('#intento').value = '';
    document.querySelector('#number').value = '';

}
function reiniciarValores() {

    numeroGenerado = '';
    intentos = 1;


}



function limpiarJuego() {

    mensajeIniciales();
    clean();
    reiniciarBotonesConfiguracion();
    reiniciarValores();

    console.log(reiniciarValores());

    document.getElementById('configuracionContainer').style.display = 'block';
    configuracionContainer.classList.add('visible');



}













