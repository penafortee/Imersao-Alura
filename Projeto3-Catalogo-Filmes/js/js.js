var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",
  "https://static.wixstatic.com/media/da06f2_9e0748f8e4fc45eba701ee2bd5581c11~mv2.jpg/v1/fill/w_640,h_998,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/da06f2_9e0748f8e4fc45eba701ee2bd5581c11~mv2.jpg",
  "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
  "https://upload.wikimedia.org/wikipedia/pt/thumb/0/04/A_m%C3%BAmia.jpg/220px-A_m%C3%BAmia.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/96/25/55/20455845.JPG",
  "https://br.web.img3.acsta.net/medias/nmedia/18/87/19/12/19872940.jpg",
  "https://br.web.img3.acsta.net/medias/nmedia/18/96/27/30/20456789.jpg",
  "https://m.media-amazon.com/images/S/pv-target-images/95c37522ea259b38d73d228bf5f1bff04b8506f0bef4d8abd5059767757f155c.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/c/c0/Bride-of-Chucky.jpg",
  "https://br.web.img2.acsta.net/pictures/14/10/10/18/18/494547.jpg",
];
//for (var i = 0; i < listaFilmes.length; i++) {
//document.write("<img src =" + listaFilmes[i] + ">");
//var elemento = document.getElementById(listaFilmes);
//}

var titulosFilmes = [
  "<strong>SCHOOL OF ROCK</strong>",
  "<strong>ARRIVAL</strong>",
  "<strong>HOMEM-ARANHA<br>NO ARANHA VERSO</strong>",
  "<strong>THE MUMMY</strong>",
  "<strong>PÂNICO</strong>",
  "<strong>PÂNICO 2</strong>",
  "<strong>PÂNICO 3</strong>",
  "<strong>PÂNICO 4</strong>",
  "<strong>BRIDE OF CHUCKY</strong>",
  "<strong>BRINQUEDO ASSASSINO</strong>",
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<div>");
  document.write("<img class='filme-imagem' src =" + listaFilmes[i] + ">");
  document.write("<p class='titulo-filme'>" + titulosFilmes[i] + "</p>");
  document.write("</div>");
  var elemento = document.getElementById(listaFilmes);
}
