const formulario = document.getElementById('formulario-validacion');
const inputs = document.querySelectorAll('#formulario-validacion input');

const inputNombre = document.getElementById("exampleFormContro1");
const inputAsunto = document.getElementById("exampleFormControlInput3");
const inputEmail = document.getElementById("exampleFormControlInput2");
const aviso = document.querySelector(".aviso");
const mensajeExito = document.getElementById('formulario__mensaje-exito');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s ]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	asunto: /^[a-zA-ZÀ-ÿ\s ]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const campos = {
    nombre: false,
    asunto: false,
    email: false
    
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, inputNombre);
        break;
        case "email":
            validarCampo(expresiones.email, e.target, inputEmail);
        
        break;
        case "asunto":
            validarCampo(expresiones.asunto, e.target, inputAsunto);
        
        break;

    }

}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        campo.style.border = "3px solid lightgreen";
        campos[campo] = true;
    } else {

        campo.style.border = "3px solid coral";
        campos[campo] = false;
        
    }
}
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
	e.preventDefault();
    formulario.reset(); 

});

