// alert ('mi sccript')


//Paso 1: traer el formulario por id, como es elemento DOM me 
//va a traer toda la información que lo compone
const traerFormulario = document.getElementById('formularioRegistro')
console.log(traerFormulario)

//Paso 2: Una vez se trae el formulario se hace una función (en este caso se llama "traerFormulario") que
//permita traer la información del contenido al darle submit que es el evento 
//al darle click en botón enviar.

//Paso 3: Creo un array que me vaya guardando los artistaObjeto que voy digitando
//está fuera de la función porque tiene scope global

const arrayArtista = []

traerFormulario.addEventListener('submit', (e) => {
    //preventDefault evita que el formulario que por defecto se envía
    //se envíe y me permita capturar la información y guardarla en el objeto
    e.preventDefault()

    const nombreArtista = document.getElementById('nombre').value
    console.log(nombreArtista)

    const nacionalidadArtista = document.getElementById('nacionalidad').value
    console.log(nacionalidadArtista)

    const generoArtista = document.getElementById('genero').value
    console.log(generoArtista)

    const artistaObjeto = {
        nombre_objeto: nombreArtista,
        nacionalidad_objeto: nacionalidadArtista,
        genero_objeto: generoArtista
    }
    console.log(artistaObjeto)

    guardarStorage(artistaObjeto)
})

//Paso 4: creo una función para guardar lo que está en artistaObjeto en el localStorage
//para que esta función no se ejecute al cargar la página, debe llamarse desde la función
//traer formulario porque si no empieza a guardar información del array vacía 

const guardarStorage = (artistaObjeto) => {
    //Para que vaya acumulando los datos del objeto en el local storage, hay que verificar
    //si existen y si no que los vaya creando y acumulando.
    //en el if pregunta si la key con la que van guardando los artistas en el storage
    // es null por lo cual si es verdadero va a empezar a crearlo y si no quiere decir
    //que ya hay contenido en el arreglo (arrayArtista) y por tanto tiene que guardar

    if (localStorage.getItem('artistas') == null) {
        //como el array está definido de manera global, por eso lo puedo usar en esta función
        arrayArtista.push(artistaObjeto)
        console.log(arrayArtista)
        //Paso 5: Para que en el Local Storage no guarde un objeto,objeto (lo cual no existe)
        //se debe convertir los datos a un strin de JSON  
        const artistasEnString = JSON.stringify(arrayArtista)
        localStorage.setItem('artistas', artistasEnString)
    } else {
        //Paso 6: para que el array que tengo en forma de strig se convierta den objeto y pueda
        //accedar a su informaición, se debe parsear a formato JSON
        const artistaEnStorage = JSON.parse(localStorage.getItem('artistas'))
        console.log(artistaEnStorage)
        artistaEnStorage.push(artistaObjeto)
        const artistasEnString = JSON.stringify(artistaEnStorage)
        localStorage.setItem('artistas', artistasEnString)
    }
}