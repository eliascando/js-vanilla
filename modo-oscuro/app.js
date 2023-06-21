/* Escribir en div */
let text = document.getElementById("text");
let label = document.getElementById("label");

text.addEventListener("input",(e)=>{
    label.innerHTML = e.target.value;
});

/* Cambiar a modo oscuro */
let toogle = document.getElementById("toogle-dark-mode");
let button = document.getElementById("dark-mode-button");

button.addEventListener("click",()=>{ 
    document.body.classList.toggle("dark-mode");
    toogle.checked = !toogle.checked;
});