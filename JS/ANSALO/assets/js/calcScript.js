//Requiriendo los valores para trabajar con ellos

const numeros = document.querySelectorAll('.numero')
const operador = document.querySelectorAll('.operador')
const pantalla = document.getElementById('pantalla')

var valorAcumulado = 0
var operacionAcumulada = ''
var reiniciarPantalla = false

//Funciones

const suma = (a, b) => {
    return parseInt(a) + parseInt(b)
}

const resta = (a, b) => {
    return parseInt(a) - parseInt(b)
}

const multiplicacion = (a, b) => {
    return parseInt(a) * parseInt(b)
}

const division = (a, b) => {
    return parseInt(a) / parseInt(b)
}

// Función para ejecutar las operaciones definidas anteriormente
// paso como parámetro la opción asociada a cada botón y 
// el valor de las variables temporales donde estoy guardando los números

const realizarOperacion = (operacion, a, b) => {

    switch (operacion) {
        case '+':
            return suma(a, b)
        case '-':
            return resta(a, b)
        case '*':
            return multiplicacion(a, b)
        case '/':
            return division(a, b)
    }

}


//Función para manejar los botones que tiene números

const agregarNumero = (evento) => {

    evento.preventDefault()
    let botonNumero = evento.target
    let valorBoton = botonNumero.innerText
    console.log(`Valor del boton numero oprimido es: ${valorBoton}`)

    if (!reiniciarPantalla) {
        pantalla.value = pantalla.value + valorBoton
    } else {
        valorAcumulado = pantalla.value
        pantalla.value = valorBoton
        reiniciarPantalla = false
    }

}

//Función para manejar los botones que tienen signos

const manejarOperacion = (evento) => {

    evento.preventDefault()
    let botonOperacion = evento.target
    let operacionSeleccionada = botonOperacion.innerText
    console.log(`La operacion seleccionada es: ${operacionSeleccionada}`)

    if (!operacionAcumulada && !pantalla.value) {

        operacionAcumulada = ''
        pantalla.value = ''

    } else if (!operacionAcumulada && pantalla.value) {

        operacionAcumulada = operacionSeleccionada

    } else {

        let valor_a = valorAcumulado
        let valor_b = pantalla.value

        valorAcumulado = realizarOperacion(operacionAcumulada, valor_a, valor_b)
        pantalla.value = valorAcumulado

        if (operacionSeleccionada != '=') {
            operacionAcumulada = operacionSeleccionada
        } else {
            operacionAcumulada = ''
        }

    }

    reiniciarPantalla = true

}

// For para recorrer la variable números porque que con query selector se pasa como un string

for (let i = 0; i < numeros.length; i++) {
    numeros[i].addEventListener('click', agregarNumero)
}

// For para recorrer la variable operador porque que con query selector se pasa como un string

for (let i = 0; i < operador.length; i++) {
    operador[i].addEventListener('click', manejarOperacion)
}

//Función para borrar la pantalla

borradoCompleto.onclick = function () {
    if (pantalla.value != '') {
        pantalla.value = ''
        valorAcumulado = 0
        operacionAcumulada = ''
        reiniciarPantalla = false
    }
}