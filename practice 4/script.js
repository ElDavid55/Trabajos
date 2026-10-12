const nombreInput = document.getElementById("nombre");
const correoInput = document.getElementById("correo");
const telefonoInput = document.getElementById("numero");

const nombreError = document.getElementById("Errornombre");
const correoError = document.getElementById("Errorcorreo");
const telefonoError = document.getElementById("Errornumero");

const addTaskBtn = document.getElementById("Ingresar");
const taskList = document.getElementById("taskList");

function validarNombre(){
    const nombre = nombreInput.value.trim();
    nombreError.textContent = "";
    nombreInput.classList.remove("input-error");

    if(nombre === ""){
        return;
    } else if(!/^[A-Za-záéíóúÁÉÍÓÚñÑ]+(?:\s+[A-Za-záéíóúÁÉÍÓÚñÑ]+)*$/.test(nombre)){
        nombreError.textContent = "Ingrese solo letras";
        nombreInput.classList.add("input-error");
        return false;
    }
    return true;
}

function validarCorreo(){
    const correo = correoInput.value.trim();
    correoError.textContent = "";
    correoInput.classList.remove("input-error");

    if(correo === ""){
        return;
    } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
        correoError.textContent = "Ingresa el correo correctamente";
        correoInput.classList.add("input-error");
        return false;
    }
    return true;
}

function validarNumero(){
    const numero = telefonoInput.value.trim();
    telefonoError.textContent = "";
    telefonoInput.classList.remove("input-error");
    const sin_espacio=numero.replace(/\s/g, "");
    
    if(numero === ""){
        return;
    }else if(!/^[0-9\s]+$/.test(numero)){
        telefonoError.textContent = "Debe de tener solo numeros";
        telefonoInput.classList.add("input-error");
        return false;
    } else if(sin_espacio.length !== 10){
        telefonoError.textContent = "Debe tener 10 digitos";
        telefonoInput.classList.add("input-error");
        return false;
    }   
    return true;
}

function register(){
    const nombreOk = validarNombre();
    const correoOk = validarCorreo();
    const telefonoOk = validarNumero();

    if(nombreOk && correoOk && telefonoOk){
        const nombre = nombreInput.value.trim();
        const correo = correoInput.value.trim();
        const numero = telefonoInput.value.trim();

        let li = document.createElement("li");
        console.log(li);
        li.innerHTML = `${nombre} - ${correo} - ${numero}`;
        taskList.appendChild(li);

        nombreInput.value = "";
        correoInput.value = "";
        telefonoInput.value = "";


    }
}

function init(){
    addTaskBtn.addEventListener('click', register);
    taskList.style.display = 'none';


    nombreInput.addEventListener('blur', validarNombre);
    correoInput.addEventListener('blur', validarCorreo);
    telefonoInput.addEventListener('blur', validarNumero);
}

window.onload = init;