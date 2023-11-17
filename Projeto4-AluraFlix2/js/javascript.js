function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;

  // Verifica se o filme já está na lista
  if (filmeJaExiste(filmeFavorito)) {
    alert("Este filme já está na lista.");
    return;
  }

  var elementoListaFilmes = document.getElementById("listaFilmes");

  var imgTest = new Image();
  imgTest.src = filmeFavorito;

  imgTest.onload = function () {
    // Adiciona o link do filme à lista
    salvarFilme(filmeFavorito);

    // Atualiza a exibição dos filmes
    exibirFilmes();

    // Limpa o campo de entrada
    document.getElementById("filme").value = "";
  };

  imgTest.onerror = function () {
    alert("Por favor, insira uma URL válida de imagem.");
  };
}

function filmeJaExiste(filmeLink) {
  // Obtém a lista de filmes do armazenamento local
  var filmesSalvos = JSON.parse(localStorage.getItem("filmes")) || [];

  // Verifica se o filme já está na lista
  return filmesSalvos.includes(filmeLink);
}

function salvarFilme(filmeLink) {
  // Verifica se o armazenamento local já contém a chave "filmes"
  var filmesSalvos = JSON.parse(localStorage.getItem("filmes")) || [];

  // Adiciona o novo filme à lista
  filmesSalvos.push(filmeLink);

  // Atualiza o armazenamento local com a nova lista de filmes
  localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
}

function exibirFilmes() {
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = "";

  var filmesSalvos = JSON.parse(localStorage.getItem("filmes")) || [];

  for (var i = 0; i < filmesSalvos.length; i++) {
    elementoListaFilmes.innerHTML +=
      "<img class='filme-imagem2' src=" + filmesSalvos[i] + ">";
  }
}

// Faz conexão com o body do html em <body onload="exibirFilmes()">
window.addEventListener("load", exibirFilmes);
