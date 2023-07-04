if (localStorage.getItem('token') == null) {
  alert('Você precisa estar logado para acessar essa página');
  window.location.href = "assets/html/login.html";
}

let userLogado = JSON.parse(localStorage.getItem('userLogado'));
let profileImage = document.querySelector('.profile-image');
let username = document.querySelector('.username');
let name = document.querySelector('.name');

profileImage.src = userLogado.photo;
username.textContent = userLogado.username;
name.textContent = userLogado.nome;

function sair() {
  localStorage.removeItem('token');
  localStorage.removeItem('userLogado');
  window.location.href = "/assets/html/login.html";
}

function acessarPerfil() {
  window.location.href = "/assets/html/perfil.html";
}


function qrcode() {
  var userLogado = localStorage.getItem("userLogado");
  if (userLogado) {
      window.location.href = "/assets/html/paginadeticket.html";
  }
}

function cadastroEvento() {
  var userLogado = localStorage.getItem("userLogado");
  if (userLogado) {
    window.location.href = "/assets/html/Cadastrodeevento.html";
  }
}

function paginadeeventos(){
  var userLogado = localStorage.getItem("userLogado");
  if (userLogado) {
    window.location.href = "/assets/html/paginadeeventos.html";
  }
}
function criarDivs() {
  var objetosJSON = localStorage.getItem("eventos");
  var objetos = JSON.parse(objetosJSON);

  if (objetos && objetos.length > 0) {
    objetos.forEach(function(objetos) {
      var div = document.createElement("div");
      div.id = "CAIXAEVENTO";
      div.innerHTML = 
        <>
        <h2>${objetos.title}</h2>
        <p>ID: ${objetos.id}</p>
        <p>Gênero: ${objetos.genre}</p>
        <p>Data: ${objetos.date}</p>
        <p>Local: ${objetos.location}</p>
        <p>Descrição: ${objetos.description}</p>
        </>
      ;
      document.body.main ;appendChild(div);
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  criarDivs();
});
function exibirObjetosLocalStorage() {
  var objetosJSON = localStorage.getItem("EVENTOS");
  var objetos = JSON.parse(objetosJSON);

  if (objetos && objetos.length > 0) {
    objetos.forEach(function(objeto, index) {
      console.log("Objeto " + (index + 1) + ":");
      console.log(objeto);
    });
  }
}

document.addEventListener("DOMContentLoaded", function() {
  exibirObjetosLocalStorage();
});


