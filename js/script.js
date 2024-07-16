const movie = {
    title: "",
    url: "http://caminho.com/imagem",
};

const figure = document.createElement("figcaption");
const figura = document.createElement("figura");
const title = document.createElement("figcaption");
const listaImagem = document.querySelector(".lista-imagem");

figure.classList.add("wrapper-imagem");

figura.src = "imagens/banner-01.jpeg";
figura.alt = "One Punch Man";
figura.classList.add("img")

title.textContent = "One Punch Man";
title.classList.add("caption");

figure.insertAdjacentElement("beforeend", figura);
// figure.insertAdjacentElement("beforeend", title);

//listaImagem.insertAdjacentElement("beforeend", figure);


