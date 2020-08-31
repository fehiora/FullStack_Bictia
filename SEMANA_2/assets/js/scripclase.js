//Ejercicio 1 25/08/2020

// var nombre = prompt ('Escribe tu nombre: ')
// var apodo = prompt ('Escribe tu apodo')

// document.write ("Bienvenid@ " + nombre + " cuyo apodo es " +apodo)

//Ejercicio 2 /25/08/2020

//Funcion tradicional que está siendo llamada desde html

// Inicializando variables globales (solo se deben definir) si dejo las variables por fuera no debo inicializarlas dentro de la función

// var nombre;
// var apodo

// function pedirNombre(){
//     nombre = prompt ('Escribe tu nombre: ')
//     console.log("Este es el boton de nombre " + nombre)
// }

// //Funcion tipo flecha que requiere ser llamada con un evento de escucha

// btnApodo.addEventListener('click', ()=>{
//     apodo = prompt ('Escribe tu apodo')
//     console.log("Este es el boton de apodo ' " + apodo + "'")
// })

// //Optimizando para pedir todo en con un solo botón

// function darMensaje(){
//     var mensaje = `mi nombre es ${nombre} y mi apodo es ${apodo}`
//     document.write (mensaje)
// }

//Funciones 26/08/2020

//Suma

function suma(num1, num2) {
    return num1 + num2
}
console.log(suma(2, 6))

//Resta

function resta(num1, num2) {
    return num1 - num2
}
console.log(resta(2, 6))

//Multiplicación

function multiplicacion(num1, num2) {
    return num1 * num2
}
console.log(multiplicacion(2, 6))

//División

function division(num1, num2) {
    return num1 / num2
}
console.log(division(2, 6))


function diaSemana(dia) {
    
    switch (dia) {
        case "lunes":
            alert('Es lunes, dia de trabajo')
            break;
        case "martes":
            alert('Es martes, dia de trabajo')
            break;
        case "miercoles":
            alert('Es miércoles, ombliguito de semana')
            break;
        case "jueves":
            alert('Es jueves, dia de trabajo')
            break;
        case "viernes":
            alert('Es viernes, y tu cuerpo lo sabe')
            break;
        case "sabado":
            alert('Es sábado, medio dia de trabajo')
            break;
        default:
            alert('Es domingo, dia de descanso')
            break;
    }
}