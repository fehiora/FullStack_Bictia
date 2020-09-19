// alert('My Script List')

//Paso 1: Traigo por id el elemento del DOM donde voy a escribir la información
//que se encuentra en el local Storage

const tablaArtista = document.getElementById('escribirArtista')

//Paso 2: realizo la función para traer la información del local Storage
//es necesario parsearlo para que llegue con las propiedades de objeto
// por qué no es necesario pasarlo a una cadena???
const traerArtistasStorage = () => {
    const str_artistasEnStorage = localStorage.getItem('artistas')

    if (!str_artistasEnStorage){
        return false;
    }else{

        const artistasEnStorage = JSON.parse(str_artistasEnStorage)
        console.log(artistasEnStorage)
        //Paso 3: Recorrer el arreglo para poder escribirlo luego en la tabla
        for (i = 0; i < artistasEnStorage.length; i++) {
            tablaArtista.innerHTML += `
            <tr>
                <th>${i +1}</th>
                <td>${artistasEnStorage[i].nombre_objeto}</td>
                <td>${artistasEnStorage[i].nacionalidad_objeto}</td>
                <td>${artistasEnStorage[i].genero_objeto}</td>
            </tr>
            `
        }
    }
}

traerArtistasStorage()

document.getElementById('limpiar').addEventListener('click', ()=> {
    localStorage.clear()
    tablaArtista.innerHTML = ""
})