function operacion(operador) {

    let num1 = parseInt(document.getElementById('num1').value)
    let num2 = parseInt(document.getElementById('num2').value)
    let resultado = document.getElementById('resultado')
    let borrar1 = )document.getElementById('num1'
    let borrar2 = document.getElementById('num2')
    console.log (borrar1)

  
    switch (operador) {
        case "+":
            resultado.innerHTML = ('El resultado de la suma es ' + (num1 + num2))
            break;
        case "-":
            resultado.innerHTML = ('El resultado de la resta es ' + (num1 - num2))
            break;
        case "*":
            resultado.innerHTML = ('El resultado de la multiplicación es ' + (num1 * num2))
            break;
        case "/":
            resultado.innerHTML = ('El resultado de la división es ' + (num1 / num2))
            break;
        case "C":
            borrar1.value = "" 
            borrar2.value = ""
            resultado.innerHTML = "Gracias por usar la calculadora!!!"
            break;
        default:
            alert('No seleccionó ninguna operación')
            break;
    }
}