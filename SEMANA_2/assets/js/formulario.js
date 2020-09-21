function validarFormulario(evento) {
    evento.preventDefault()
    const inputName = document.getElementById('name')
    const inputLastName = document.getElementById('lastname')
    const inputAge = document.getElementById('age')
    const inputEmail = document.getElementById('email')
    const inputPasword = document.getElementById('pasword')
    const inputTyC = document.getElementById('inputTyC')

    if (inputName.value == '') {
        mensajeNombre.innerText = '* Debe diligenciar el campo'
        inputName.classList.add('fondoAlert')

    }
    if (inputLastName.value == '') {
        mensajeApellido.innerText = '* Debe diligenciar el campo'
        inputLastName.classList.add('fondoAlert')
    }
    if (inputAge.value == '') {
        mensajeEdad.innerText = '* Debe diligenciar el campo'
        inputAge.classList.add('fondoAlert')
    }
    if (inputEmail.value == '') {
        mensajeEmail.innerText = '* Debe diligenciar el campo'
        inputEmail.classList.add('fondoAlert')
    }
    if (inputPasword.value == '') {
        mensajePsw.innerText = '* Debe diligenciar el campo'
        inputPasword.classList.add('fondoAlert')
    }
    if (inputTyC.checked == false) {
        mensajeTyC.innerText = '*Acepta T y C'
    }

    if (inputName != '' && inputLastName != '' && inputAge != '' && inputEmail != '' && inputPasword != '' && inputTyC.checked == true) {
        swal("Muy bien", "Registro exitoso", "success")
        setTimeout(() => {
            window.location = './assets/html/calculadora.html'
        }, 2000)
    } else {
        swal("error", "Hay campos sin diligenciar", "error")
    }


    //  pruebas porque quiero que escriba debajo de cada input sin tener que hacer un if por cada uno pero no me cambia el valor
    //if () {
    //     // mensajeAlerta.innerText = '* Debe diligenciar el campo' 
    //     // alert('Debe diligenciar todos los campos')
    //     // if (inputName == '' || inputLastName == ''){
    //     //     mensajeNombre.innerText = '* Debe diligenciar el campo'    
    //     //     mensajeApellido.innerText = '* Debe diligenciar el campo'    
    //     // }
    // }        

}