//Definición de variables a utilizar

const arregloLetras = ["A","B","C","D","E","F","G","H","I","J"]
const arregloNumeros = ["1","2","3","4","5","6","7","8","9","0"]

let inpuntLetras = document.getElementById('letras')
let inputNumeros = document.getElementById('numeros')


//Función para escribir letras y números en sus inpunts respectivos

const escribirBoton = (indiceBoton) => {

    let letraSelecionada = arregloLetras[indiceBoton]
    let numeroSeleccionado = arregloNumeros[indiceBoton]
    

    if(inpuntLetras.value != arregloLetras.join("")){

        let stringLetrasPrerrequisito = ""

        if(inpuntLetras.value.includes(letraSelecionada)){
            alert("El valor " + letraSelecionada + " ya está escrito")
            return
        }

        if (indiceBoton > 0){
            stringLetrasPrerrequisito = arregloLetras.slice(0,indiceBoton).join("")
        }

        if (inpuntLetras.value == stringLetrasPrerrequisito){
            inpuntLetras.value = inpuntLetras.value + letraSelecionada
        }else{
            alert ("No ha escrito " + stringLetrasPrerrequisito)
        }

    }else{
        
        let stringNumerosPrerrequisito = ""

        if(inputNumeros.value.includes(numeroSeleccionado)){
            alert("El valor " + numeroSeleccionado + " ya está escrito")
            return
        }

        if (indiceBoton > 0){
            stringNumerosPrerrequisito = arregloNumeros.slice(0,indiceBoton).join("")
        }

        if (inputNumeros.value == stringNumerosPrerrequisito){
            inputNumeros.value = inputNumeros.value + numeroSeleccionado
        }else{
            alert ("No ha escrito " + stringNumerosPrerrequisito)
        }
    }

    
}


//Funcion para limpiar ambos inpunts (letras y números, una vez están todos digitados)

function botonReset(){

    let capturaLetras = inpuntLetras.value
    let caputraNumeros = inputNumeros.value

    if(capturaLetras == arregloLetras.join("") && caputraNumeros == arregloNumeros.join("")){
        inpuntLetras.value = ""
        inputNumeros.value = ""
    }else{
        alert("No ha escrito todas las letras y números")
    }

}

//Función para usar el botón que va a la calculadora

function botonCalc(){
    window.location = './assets/pages/calculadora.html'
}