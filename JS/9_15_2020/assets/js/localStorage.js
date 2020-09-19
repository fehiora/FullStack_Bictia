const saludarUsuario = document.getElementById('saludar')

saludarUsuario.addEventListener('click', ()=> {
    const namePrompt = prompt('Escribe tu nombre')
    localStorage.setItem('nombre', namePrompt)
})

