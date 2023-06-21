/*const titulo = document.getElementById('titulo');
console.log(titulo.innerHTML);

const topping = document.getElementsByClassName('topping')
console.log(topping);

const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');
console.log(toppingsNaranja);

const primerTopping = document.querySelector('.topping')
console.log(primerTopping.style);
primerTopping.style.backgroundColor = 'blue';
primerTopping.style.color = '#6dff00';
primerTopping.style.textTransform = 'uppercase';*/

/*const listaToppings = document.getElementById('lista-toppings');

console.log(listaToppings.innerText);
console.log(listaToppings.textContent);
console.log(listaToppings.innerHTML);*/

//const titulo = document.getElementById('titulo');
//console.log(titulo.innerText)
//titulo.innerText = 'Mis Toppings Favoritos';

//const enlace = document.getElementsByTagName('a');
//enlace[0].setAttribute('href','http://www.google.com');

/*const primerTopping = document.querySelector('.topping');
console.log(primerTopping.classList);
primerTopping.classList.add('texto-verde');*/

/*const listaToppings = document.getElementById('lista-toppings');
const toppingNuevo = document.createElement('li');

toppingNuevo.classList.add('topping','fondo-marron');
toppingNuevo.innerText = 'Queso extra';


listaToppings.append(toppingNuevo);

// toppingNuevo.remove();

// recorrer el DOM
console.log(listaToppings.previousElementSibling);*/

const toppings = document.getElementsByClassName('topping');

for(const topping of toppings){
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    })
}