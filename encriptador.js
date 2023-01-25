var encryptedText = '';


function encriptador(){
    var inputText = document.getElementById("texto").value;
    // reemplazar las letras "e", "i", "a", "o" y "u" por las "llaves" de encriptación correspondientes
    encryptedText = inputText.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    // mostrar el texto encriptado en un elemento HTML
    document.getElementById("encriptado").innerHTML = encryptedText;
}

function desencriptador(){
    var inputText = document.getElementById("texto").value;
    // reemplazar las letras "e", "i", "a", "o" y "u" por las "llaves" de encriptación correspondientes
    var descriptadoText = inputText.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    // mostrar el texto encriptado en un elemento HTML
    document.getElementById("desencriptado").innerHTML = descriptadoText;
}

function limpiar(){
    document.getElementById("texto").value = "";
    document.getElementById("encriptado").innerHTML = "";
    document.getElementById("desencriptado").innerHTML = "";
}

function copy() {
  const parrafo = document.getElementById("encriptado");
  const range = document.createRange();
  range.selectNodeContents(parrafo);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  document.execCommand("copy");
  // Muestra un mensaje de éxito o error dependiendo del resultado de la copia
  if (document.queryCommandSupported("copy")) {
    alert("Texto copiado al portapapeles");
  } else {
    alert("Tu navegador no soporta esta función");
  }

  limpiar();
}
  
  
  






