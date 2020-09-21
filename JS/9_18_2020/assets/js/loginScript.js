// alert('script')

const traerFormulario = document.getElementById('formularioLoggin')
console.log(traerFormulario)

traerFormulario.addEventListener('submit', (e)=>{
    e.preventDefault()

    const email = document.getElementById('emailLoggin').value
    const clave = document.getElementById('claveLoggin').value

    if (localStorage.getItem('usuarios')){
        const arrayValidarUsuario = JSON.parse(localStorage.getItem('usuarios'))
        

        for(let i=0; i < arrayValidarUsuario.length; i++){

            // console.log(arrayValidarUsuario[i])
            console.log(arrayValidarUsuario[i].email)
            console.log(arrayValidarUsuario[i].clave)

            // usar el indice del arreglo con la variable de iteración
            if(email == arrayValidarUsuario[i].email && clave == arrayValidarUsuario[i].clave){
                alert('Ingreso exitoso')
                // añadir aqui una función que redirija a pagina de usuario
                setTimeout(() =>{
                    window.location = '../pages/task.html'
                },300)
                return true
            }
        }

        alert('datos erroneos')

    }else{
        alert("No hay datos almacenados")
    }
    
})