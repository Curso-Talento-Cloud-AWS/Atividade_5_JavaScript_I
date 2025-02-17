let titulo = document.getElementById("titulo");
let link = document.querySelector("a");

titulo.innerText = "Atividade 4 JavaScript I";
link.innerText = "PROZ Educação";

let lista_nao_ordenada = document.querySelector("ul");
let lista_ordenada = document.getElementById("lista-ordenada");

lista_nao_ordenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

lista_ordenada.innerHTML = `
    <li><a href="https://www.google.com.br/" target="_blank">Link 1</a></li>
    <li><a href="https://www.youtube.com/" target="_blank">Link 2</a></li>
    <li><a href="https://www.instagram.com/" target="_blank">Link 3</a></li>
`;