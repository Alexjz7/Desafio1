// Función para encriptar el texto
function encrypt() {
  var texto = document.getElementById("text").value.toLowerCase();
  var encryptedText = "";

  // Lógica de encriptación
  for (var i = 0; i < texto.length; i++) {
    var char = texto.charAt(i);
    var encryptedChar = "";

    switch (char) {
      case "e":
        encryptedChar = "enter";
        break;
      case "i":
        encryptedChar = "imes";
        break;
      case "a":
        encryptedChar = "ai";
        break;
      case "o":
        encryptedChar = "ober";
        break;
      case "u":
        encryptedChar = "ufat";
        break;
      default:
        encryptedChar = char;
        break;
    }

    encryptedText += encryptedChar;
  }

  document.getElementById("result").value = encryptedText;
}

// Función para desencriptar el texto
function decrypt() {
  var encryptedText = document.getElementById("result").value.toLowerCase();
  var decryptedText = "";

  // Lógica de desencriptación
  for (var i = 0; i < encryptedText.length; i++) {
    var char = encryptedText.charAt(i);
    var decryptedChar = "";

    switch (char) {
      case "enter":
        decryptedChar = "e";
        break;
      case "imes":
        decryptedChar = "i";
        break;
      case "ai":
        decryptedChar = "a";
        break;
      case "ober":
        decryptedChar = "o";
        break;
      case "ufat":
        decryptedChar = "u";
        break;
      default:
        decryptedChar = char;
        break;
    }

    decryptedText += decryptedChar;
  }

  document.getElementById("text").value = decryptedText;
}
