var encryptedText =  '';
var descriptadoText = '';
var inputText = '';
let isValid = true;

function encriptador(){
    validInputText();
    if(isValid){
      inputText = document.getElementById("texto").value;
      // reemplazar las letras "e", "i", "a", "o" y "u" por las "llaves" de encriptación correspondientes
      encryptedText = inputText.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
      // mostrar el texto encriptado en un elemento HTML
      document.getElementById("encriptado").innerHTML = encryptedText;
      showMessage();
    }
}

function desencriptador(){
    validInputText();
    if(isValid){
      inputText = document.getElementById("texto").value;
      // reemplazar las letras "e", "i", "a", "o" y "u" por las "llaves" de encriptación correspondientes
      descriptadoText = inputText.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
      // mostrar el texto encriptado en un elemento HTML
      document.getElementById("desencriptado").innerHTML = descriptadoText;
      showMessage();
    }
}

function limpiar(){
    document.getElementById("texto").value = "";
    document.getElementById("encriptado").innerHTML = "";
    document.getElementById("desencriptado").innerHTML = "";
    inputText = null;

    showMessage();
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
  
function showMessage(){
  if(inputText !=null ){
    document.getElementById("message").style.display = "block";
    document.getElementById("message-start").style.display = "none";
  }

  if(inputText === null || encriptador === ''){
    document.getElementById("message").style.display = "none";
    document.getElementById("message-start").style.display = "block";
  }
}
  
function validInputText() {
  let text = document.getElementById("texto").value;
  if (text === null || text === "") {
    alert("No has ingresado texto");
    isValid = false;
  }else{
    isValid = true;
  }
}






