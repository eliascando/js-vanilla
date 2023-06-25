//obtener objeto del formlario
const formulario = document.querySelector('#formulario');
const email = formulario.id;
const password = formulario.password;

//Validar numeros
id.addEventListener('input', (e) => {
    let value = e.target.value;
  
    if (!isNaN(Number(value))) {
      console.log('Es un número');
    } else {
      console.log('No es un número');
    }
});

password.addEventListener('input', (e)=>{
    let value = e.target.value;
    if(value.length < 8){
        console.log('La contraseña debe tener al menos 8 caracteres');
    }else{
        console.log('Contraseña válida');
    }
});