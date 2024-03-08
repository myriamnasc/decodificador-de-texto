function encriptar () {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let boneco = document.getElementById("boneco");

    let textoCriptado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

      if (texto.length != 0) {
        document.getElementById("texto").value = textoCriptado;
        tituloMensagem.textContent = "Texto criptografado com êxito";
        paragrafo.textContent = "";
        boneco.src = "./img/criptografado.jpg";
      } else {
        boneco.src = "./img/descriptografado.jpg";
        tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
        paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
        
      }
}

function desencriptar () {
    let texto = document.getElementById("texto").value;
    let tituloMensagem = document.getElementById("titulo-mensagem");
    let paragrafo = document.getElementById("paragrafo");
    let boneco = document.getElementById("boneco");
  
    let textoCriptado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCriptado;
        tituloMensagem.textContent = "Texto descriptografado com êxito";
        paragrafo.textContent = "";
        boneco.src = "./img/descriptografado.jpg"
      } else {
        boneco.src = "./img/boneco.jpg";
        tituloMensagem.textContent = "Nenhuma mensagem foi encontrada";
        paragrafo.textContent = "Digite um texto que você deseja criptografar ou descriptografar.";
        
      }
}