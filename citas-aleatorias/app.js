let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generarEnteroAleatorio (min, max){
    minimo = Math.ceil(min);
    maximo = Math.floor(max);
    // Sin incluir max en los valores posibles.
    return Math.floor(Math.random() * (maximo-minimo) + minimo);
}

function cambiarCita(){
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.textContent = `"${citas[indiceAleatorio].texto}"`;
    autorElem.textContent = `${citas[indiceAleatorio].autor}`;
}

cambiarCita();

botonElem.addEventListener('click', cambiarCita)