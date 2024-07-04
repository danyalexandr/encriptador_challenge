
// obtienes el dato del textarea, encriptas y asignas al elemento de resultado, limpias
function encriptarTexto() {
    // Obtener el texto del campo de entrada
    let dato = document.getElementById("textarea__cifrar").value;
    let textoEncriptado = '';

    // Verificar si el campo está vacío
    if (dato === '') {
        document.querySelector('.contenido__no__encontrado').style.visibility = 'visible';
        //return; // Salir de la función si el campo está vacío
    } else {
        document.querySelector('.contenido__no__encontrado').style.visibility = 'hidden';
    }

    for (let i = 0; i < dato.length; i++) {
        if (dato[i] === 'e') {
            textoEncriptado += 'enter';
        } else if (dato[i] === 'i') {
            textoEncriptado += 'imes';
        } else if (dato[i] === 'a') {
            textoEncriptado += 'ai';
        } else if (dato[i] === 'o') {
            textoEncriptado += 'ober';
        } else if (dato[i] === 'u') {
            textoEncriptado += 'ufat';
        } else {
            textoEncriptado += dato[i];
        }
    }

    asignarTextoPorId('contenido__texto__descifrado', textoEncriptado);
    asignarTextoPorId('textarea__cifrar', '');

}

// Desencripta el texto
function desencriptarTexto(){
    let textoEncriptado = document.getElementById("contenido__texto__descifrado").innerHTML;
    let textoDesencriptado = textoEncriptado
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    console.log("Texto desencriptado: " + textoDesencriptado);
    asignarTextoPorId('contenido__texto__descifrado', textoDesencriptado);
}

//asigna texto a los elementos para evitar el hard code
function asignarTextoPorId(id, texto){
    let elementoHTML = document.getElementById(id);
    elementoHTML.innerHTML = texto.toString();
}

asignarTextoPorId('textarea__cifrar', "Ingrese el texto aqui");
asignarTextoPorId('contenido__texto__descifrado', "");
asignarTextoPorId('contenido__texto__no__encontrado', "Ningun mensaje fue encontrado");
asignarTextoPorId('contenido__texto__a__ingresar', "Ingresa el texto que deseas encriptar o desencriptar");