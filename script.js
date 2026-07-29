function responder(alternativa) {

    const resposta = document.getElementById("resposta");

    if (alternativa === "A") {

        resposta.textContent =
            "✅ Correto! O microscópio utiliza lentes para ampliar a imagem de objetos muito pequenos.";

    } else {

        resposta.textContent =
            "❌ Não é essa. Tente novamente! Pense em qual instrumento é utilizado para observar objetos muito pequenos.";

    }

}