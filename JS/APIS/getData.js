//URL de la API
//Las APIs se consumen a través de promesas

const API = 'https://rickandmortyapi.com/api/character'

console.log('API')

//Obtener resultado de API
// api va en minúscula porque es un parámetro
//fetch es una función de js que trabaja con promesas
const getData = (api) => {
    return fetch(api)
        .then((response) => response.json())//si responde algo, lo que sea lo va a convertir en un json
        .then((json)=> {
            llenarDatos(json), paginacion(json.info);
        })
        .catch((error) => {
            console.log("Error :", error)
        })
}

const llenarDatos = (data) => {
    let html = ""
    data.results.forEach(() => {
        
    });
}
//Ejecutargetdata
getData(API)


//Función para la paginación


const paginacion = (infoApi) => {

    let prevDisable =""
    let nextDisable =""

    if (infoApi.prev == null) {
        prevDisable = "disabled"
    } else {
        prevDisable = ""
    }

    if (infoApi.next == null) {
        nextDisable = "disabled"
    } else {
        nextDisable = ""
    }

    let html = '';
    html += `<li class="page-item ${prevDisable}"><a class="page-link" onclick="getData('${infoApi.prev}')"+>Previous</a></li>`;
    html += `<li class="page-item ${nextDisable}"><a class="page-link" onclick="getData('${infoApi.next}')">Next</a></li>`;
    document.getElementById("pagination").innerHTML = html
}

// Así las deje prevDisabled = !info.prev && 'disabled'; 
//        nextDisabled = !info.next && 'disabled'; 
//operador ternario

