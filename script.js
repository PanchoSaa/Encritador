function encriptar() {
    const texto = document.getElementById('inputText').value;

    if (/[^a-z\s]/.test(texto)) {
        alert("El texto contiene caracteres inválidos. Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    if (texto.trim() === '') {
        mostrarImagen();
        return;
    } else {
        ocultarImagen();
    }

    let resultado = texto.replace(/e/g, "enter")
                         .replace(/i/g, "imes")
                         .replace(/a/g, "ai")
                         .replace(/o/g, "ober")
                         .replace(/u/g, "ufat");

    document.getElementById('outputText').value = resultado;
}

function desencriptar() {
    const texto = document.getElementById('inputText').value;

    if (/[^a-z\s]/.test(texto)) {
        alert("El texto contiene caracteres inválidos. Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    if (texto.trim() === '') {
        mostrarImagen();
        return;
    } else {
        ocultarImagen();
    }

    let resultado = texto.replace(/enter/g, "e")
                         .replace(/imes/g, "i")
                         .replace(/ai/g, "a")
                         .replace(/ober/g, "o")
                         .replace(/ufat/g, "u");

    document.getElementById('outputText').value = resultado;
}

function mostrarImagen() {
    document.getElementById('placeholderImage').style.display = 'block';
    document.getElementById('outputText').style.display = 'none';
}

function ocultarImagen() {
    document.getElementById('placeholderImage').style.display = 'none';
    document.getElementById('outputText').style.display = 'block';
}


function copiarTexto() {
    const resultado = document.getElementById('outputText');
    resultado.select();
    resultado.setSelectionRange(0, 99999); // Para dispositivos móviles
    navigator.clipboard.writeText(resultado.value).then(() => {
        alert("Texto copiado: " + resultado.value);
    }, () => {
        alert("Error al copiar el texto.");
    });
}
