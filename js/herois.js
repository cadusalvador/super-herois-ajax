const header = document.querySelector('header');
const section = document.querySelector('section');

var requisicaoURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
var requisicao = new XMLHttpRequest();

requisicao.open('GET', requisicaoURL);
requisicao.responseType = 'json';
requisicao.send();

requisicao.onload = function() {
    const superHerois = requisicao.response;
    preencherCabecalho(superHerois);
    mostrarHerois(superHerois);    
}

function preencherCabecalho(obj) {
    const cabecalhoPrincipal = document.createElement('h1');
    cabecalhoPrincipal.textContent = obj['squadName'];
    header.appendChild(cabecalhoPrincipal);

    const paragrafoCabecalho = document.createElement('p');
    paragrafoCabecalho.textContent = 'Cidade: ' + obj['homeTown'] + ' // Fundação: ' + obj['formed'];
    header.appendChild(paragrafoCabecalho);
}

function mostrarHerois(obj) {
    const herois = obj['members'];

    for (let i = 0; i < herois.length; i++) {
        const artigo = document.createElement('article');
        const nomeHeroi = document.createElement('h2');
        const identidadeSecreta = document.createElement('p');
        const idade = document.createElement('p');
        const superPoderes = document.createElement('p');
        const listaPoderes = document.createElement('ul');

        nomeHeroi.textContent = herois[i].name;
        identidadeSecreta.textContent = 'Identidade Secreta: ' + herois[i].secretIdentity;
        idade.textContent = 'Idade: ' + herois[i].age;
        superPoderes.textContent = 'Super Poderes: ';

        const superPoderesLista = herois[i].powers;
        for (let i = 0; i < superPoderesLista.length; i++) {
            const itemLista = document.createElement('li');
            itemLista.textContent = superPoderesLista[i];
            listaPoderes.appendChild(itemLista);
        }

        artigo.appendChild(nomeHeroi);
        artigo.appendChild(identidadeSecreta);
        artigo.appendChild(idade);
        artigo.appendChild(superPoderes);
        artigo.appendChild(listaPoderes);

        section.appendChild(artigo);
    }
}