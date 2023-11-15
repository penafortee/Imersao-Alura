function conversao() {
  var real = document.getElementById("valor").value;
  if (real == "" || real <= 0) {
    document.getElementById("valorReal").innerHTML =
      "Por favor, digite um valor.";
  } else {
    var dolar = parseFloat(real) * 4.93;
    var valorConvertido = dolar.toFixed(2);

    document.getElementById("valorReal").innerHTML = "R$ " + valorConvertido;
  }
}
