const API = 'https://pokeapi.co/api/v2/pokemon/1'


const obtenerDatos = (apiUrl) =>{
    return fetch(apiUrl)
        .then ((response) => response.json())
        .then ((json) => {
            pintarEnHtml(json);

            // console.log("nombre: ", json.name)
            // console.log("imagen: ", json.sprites.front_default)
        })
        .catch((error) => {
            console.log("Error :", error)
        })    
}

obtenerDatos(API)

const pintarEnHtml = (pokemon) => {
    let html = "";
    html += '<div>'
    html += `<img src="${pokemon.sprites.front_default}"/>`
    html += `<p>${pokemon.name}</p>`
    html += '</div>'
    document.getElementById("unPokemon").innerHTML = html;
}

//Varios Pokemones

const pintarVariosEnHtml = (pokemon) => {
    let html = "";
    html += '<div>'
    html += `<img src="${pokemon.sprites.front_default}"/>`
    html += `<p>${pokemon.name}</p>`
    html += '</div>'
    document.getElementById("variosPokemon").innerHTML += html;
}


function variosPokemones (id){
    console.log(`https://pokeapi.co/api/v2/pokemon/${id}`)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((json) => {
        pintarVariosEnHtml(json)
    })
    .catch((error) => {
        console.log("Error :", error)
    }) 
        
}

// variosPokemones(1)
// variosPokemones(4)
// variosPokemones(7)
// variosPokemones(25)

for (let i=1; i<152; i++){
    variosPokemones(i)
}
