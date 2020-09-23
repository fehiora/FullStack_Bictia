const numeros = document.querySelectorAll('.numero')

function recorrer(){
    alert ('hola')
}

for (let i = 0; i< numeros.length; i++) {
    numeros [i].addEventListener('click', recorrer)    
}