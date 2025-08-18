let amigos = [];

function adicionarAmigo() {
    
    const input = document.querySelector("#amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Informação inválida, por favor, digite um nome válido!");
        return;
    }

    amigos.push(nome);

    const lista = document.querySelector("#listaAmigos");
    const item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);

    input.value = "";
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um amigo antes de sortear!");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    const resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<li> O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

