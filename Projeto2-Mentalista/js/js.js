function jogar() {
  var numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1);
  var inteirar = 0;
  console.log(numeroSecreto);

  var chute;

  while (chute != numeroSecreto) {
    if (inteirar != 0) {
      alert("Você já fez " + inteirar + " tentativas!");
    }
    chute = prompt("Digite um número entre 1 e 1000");

    if (chute == numeroSecreto) {
      alert("Acertou! Está com sorte!");
    } else if (chute > numeroSecreto) {
      alert("Errou! O número secreto é menor que " + chute);
    } else if (chute < numeroSecreto) {
      alert("Errou! O número secreto é maior que " + chute);
    }

    inteirar += 1;
  }
}
