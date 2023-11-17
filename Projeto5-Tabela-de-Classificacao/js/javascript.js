var fallen = {
  nome: "Gabriel Toledo, FALLEN",
  vitoria: "20",
  derrotas: "12",
  kd: "71.8%",
  headshot: "30.6%",
  time: "FURIA",
  imagem:
    "https://img-cdn.hltv.org/playerbodyshot/m1kdOT3mQXrpZGOkScisbF.png?ixlib=java-2.1.0&w=400&s=873d915d3a51c03fe7b0a50df8ab0751",
};

var kscerato = {
  nome: "Kaike Cerato, KSCERATO",
  vitoria: "350",
  derrotas: "150",
  kd: "75.0%",
  headshot: "49.2%",
  time: "FURIA",
  imagem:
    "https://img-cdn.hltv.org/playerbodyshot/kXyU3YIoVx6myQkorQeQBU.png?ixlib=java-2.1.0&w=400&s=778b751aeda0ce6f7013a06795f75adf",
};

var arte = {
  nome: "Andrei Piovezan, ARTE",
  vitoria: "350",
  derrotas: "150",
  kd: "68.3%",
  headshot: "35.8%",
  time: "FURIA",
  imagem:
    "https://img-cdn.hltv.org/playerbodyshot/_3O392E7CZ4izAqQvuLlQq.png?ixlib=java-2.1.0&w=400&s=9a44f43dce171611e9911fcf92977289",
};

var chelo = {
  nome: "Marcelo Cespedes, CHELO",
  vitoria: "20",
  derrotas: "12",
  kd: "71.7%",
  headshot: "60.4%",
  time: "FURIA",
  imagem:
    "https://img-cdn.hltv.org/playerbodyshot/KCYyEuYuqSH296DD9HzQDz.png?ixlib=java-2.1.0&w=400&s=5bd31aaa00d5d0ddb5b8783d5f9c0f39",
};

var yuurih = {
  nome: "Yuri Santos, YUURIH",
  vitoria: "350",
  derrotas: "150",
  kd: "73.1%",
  headshot: "44.2%",
  time: "FURIA",
  imagem:
    "https://img-cdn.hltv.org/playerbodyshot/zlAhZQJEjEJNp9PKjygBJL.png?ixlib=java-2.1.0&w=400&s=8d7c304e1b4bc7d5d95c5a26509ef9c3",
};

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function exibirNaTela() {
  elementoTabela.innerHTML = `
      <tr>
      <td><img class = 'jogador-img' src="${fallen.imagem}" alt="Imagem de ${fallen.nome}" width="50"></td>
          <td>${fallen.nome}</td>
          <td>${fallen.vitoria}</td>
          <td>${fallen.derrotas}</td>
          <td>${fallen.kd}</td>
          <td>${fallen.headshot}</td>
          <td>${fallen.time}</td>
          <td><button onClick="adicionarVitoria(fallen)">Atualizar Vitória</button></td>
      </tr>
      <tr>
      <td><img class = 'jogador-img' src="${kscerato.imagem}" alt="Imagem de ${kscerato.nome}" width="50"></td>
      <td>${kscerato.nome}</td>
      <td>${kscerato.vitoria}</td>
      <td>${kscerato.derrotas}</td>
      <td>${kscerato.kd}</td>
      <td>${kscerato.headshot}</td>
      <td>${kscerato.time}</td>
      <td><button onClick="adicionarVitoria(kscerato)">Atualizar Vitória</button></td>
  </tr>
  <tr>
  <td><img class = 'jogador-img' src="${arte.imagem}" alt="Imagem de ${arte.nome}" width="50"></td>
      <td>${arte.nome}</td>
      <td>${arte.vitoria}</td>
      <td>${arte.derrotas}</td>
      <td>${arte.kd}</td>
      <td>${arte.headshot}</td>
      <td>${arte.time}</td>
  <td><button onClick="adicionarVitoria(arte)">Atualizar Vitória</button></td>
</tr>
<td><img class = 'jogador-img' src="${chelo.imagem}" alt="Imagem de ${chelo.nome}" width="50"></td>
      <td>${chelo.nome}</td>
      <td>${chelo.vitoria}</td>
      <td>${chelo.derrotas}</td>
      <td>${chelo.kd}</td>
      <td>${chelo.headshot}</td>
      <td>${chelo.time}</td>
  <td><button onClick="adicionarVitoria(arte)">Atualizar Vitória</button></td>
</tr>
<td><img class = 'jogador-img' src="${yuurih.imagem}" alt="Imagem de ${yuurih.nome}" width="50"></td>
      <td>${yuurih.nome}</td>
      <td>${yuurih.vitoria}</td>
      <td>${yuurih.derrotas}</td>
      <td>${yuurih.kd}</td>
      <td>${yuurih.headshot}</td>
      <td>${yuurih.time}</td>
  <td><button onClick="adicionarVitoria(arte)">Atualizar Vitória</button></td>
</tr>
  `;
}

function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos = jogador.pontos + 1;
  exibirNaTela();
}
