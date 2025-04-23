const filmes = [
    {
        "id": 1,
        "titulo": "O Poderoso Chefão",
        "descricao": "A saga da família Corleone.",
        "conteudo": "O Poderoso Chefão é um filme de 1972 dirigido por Francis Ford Coppola...",
        "diretor": "Francis Ford Coppola",
        "elenco": "Marlon Brando, Al Pacino, James Caan",
        "ano": 1972,
        "duracao": "175 minutos",
        "genero": "Crime, Drama",
        "imagem": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "avaliacao": 9.2,
        "destaque": true,
        "imagens_complementares": [
            { "url": "https://exemplo.com/cena1.jpg", "legenda": "Cena do casamento" },
            { "url": "https://exemplo.com/cena2.jpg", "legenda": "Michael Corleone" }
        ]
    },
    {
        "id": 2,
        "titulo": "O Senhor dos Anéis: O Retorno do Rei",
        "descricao": "A conclusão da trilogia épica.",
        "conteudo": "O filme conclui a jornada de Frodo e Sam para destruir o Um Anel...",
        "diretor": "Peter Jackson",
        "elenco": "Elijah Wood, Viggo Mortensen, Ian McKellen",
        "ano": 2003,
        "duracao": "201 minutos",
        "genero": "Aventura, Fantasia",
        "imagem": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "avaliacao": 9.0,
        "destaque": true,
        "imagens_complementares": [
            { "url": "https://exemplo.com/cena3.jpg", "legenda": "Batalha final" },
            { "url": "https://exemplo.com/cena4.jpg", "legenda": "Frodo e Sam" }
        ]
    },
    {
        "id": 3,
        "titulo": "Interestelar",
        "descricao": "Uma jornada através do espaço e tempo.",
        "conteudo": "Em um futuro onde a Terra está se tornando inabitável...",
        "diretor": "Christopher Nolan",
        "elenco": "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        "ano": 2014,
        "duracao": "169 minutos",
        "genero": "Ficção Científica, Drama",
        "imagem": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        "avaliacao": 8.6,
        "destaque": true,
        "imagens_complementares": [
            { "url": "https://exemplo.com/cena5.jpg", "legenda": "Nave espacial" },
            { "url": "https://exemplo.com/cena6.jpg", "legenda": "Planeta desconhecido" }
        ]
    },
    {
        "id": 4,
        "titulo": "Parasita",
        "descricao": "Uma família pobre infiltra uma família rica.",
        "conteudo": "A família Kim, vivendo em condições precárias...",
        "diretor": "Bong Joon-ho",
        "elenco": "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
        "ano": 2019,
        "duracao": "132 minutos",
        "genero": "Thriller, Drama",
        "imagem": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        "avaliacao": 8.5,
        "destaque": false,
        "imagens_complementares": [
            { "url": "https://exemplo.com/cena7.jpg", "legenda": "Família Kim" },
            { "url": "https://exemplo.com/cena8.jpg", "legenda": "Casa dos Park" }
        ]
    },
    {
        "id": 5,
        "titulo": "Clube da Luta",
        "descricao": "Um homem desiludido forma um clube secreto.",
        "conteudo": "Um homem deprimido que sofre de insônia conhece um estranho...",
        "diretor": "David Fincher",
        "elenco": "Brad Pitt, Edward Norton, Helena Bonham Carter",
        "ano": 1999,
        "duracao": "139 minutos",
        "genero": "Drama",
        "imagem": "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "avaliacao": 8.8,
        "destaque": true,
        "imagens_complementares": [
            { "url": "https://exemplo.com/cena9.jpg", "legenda": "Cena do porão" },
            { "url": "https://exemplo.com/cena10.jpg", "legenda": "Regras do clube" }
        ]
    },
    {
        "id": 6,
        "titulo": "Pulp Fiction",
        "descricao": "Histórias interligadas de criminosos em Los Angeles.",
        "conteudo": "As vidas de dois assassinos da máfia, um boxeador...",
        "diretor": "Quentin Tarantino",
        "elenco": "John Travolta, Uma Thurman, Samuel L. Jackson",
        "ano": 1994,
        "duracao": "154 minutos",
        "genero": "Crime, Drama",
        "imagem": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "avaliacao": 8.9,
        "destaque": false,
        "imagens_complementares": [
            { "url": "https://exemplo.com/cena11.jpg", "legenda": "Vincent e Mia" },
            { "url": "https://exemplo.com/cena12.jpg", "legenda": "Jules e Vincent" }
        ]
    },
    {
        "id": 7,
        "titulo": "O Lobo de Wall Street",
        "descricao": "A ascensão e queda de um corretor da bolsa.",
        "conteudo": "Jordan Belfort é um ambicioso corretor da bolsa...",
        "diretor": "Martin Scorsese",
        "elenco": "Leonardo DiCaprio, Jonah Hill, Margot Robbie",
        "ano": 2013,
        "duracao": "180 minutos",
        "genero": "Biografia, Comédia, Crime",
        "imagem": "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_.jpg",
        "avaliacao": 8.2,
        "destaque": true,
        "imagens_complementares": [
            { "url": "https://exemplo.com/cena13.jpg", "legenda": "Jordan Belfort" },
            { "url": "https://exemplo.com/cena14.jpg", "legenda": "Escritório da Stratton Oakmont" }
        ]
    },
    {
        "id": 8,
        "titulo": "Cidade de Deus",
        "descricao": "A vida nas favelas do Rio de Janeiro.",
        "conteudo": "Buscapé é um jovem pobre, negro e sensível...",
        "diretor": "Fernando Meirelles",
        "elenco": "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen",
        "ano": 2002,
        "duracao": "130 minutos",
        "genero": "Crime, Drama",
        "imagem": "https://m.media-amazon.com/images/M/MV5BOTMwYjc5ZmItYTFjZC00ZGQ3LTlkNTMtMjZiNTZlMWQzNzI5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "avaliacao": 8.6,
        "destaque": false,
        "imagens_complementares": [
            { "url": "https://exemplo.com/cena15.jpg", "legenda": "Favela" },
            { "url": "https://exemplo.com/cena16.jpg", "legenda": "Zé Pequeno" }
        ]
    },
    {
        "id": 9,
        "titulo": "Matrix",
        "descricao": "Um hacker descobre a verdade sobre a realidade.",
        "conteudo": "Um jovem programador é atormentado por estranhos pesadelos...",
        "diretor": "Lana Wachowski, Lilly Wachowski",
        "elenco": "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
        "ano": 1999,
        "duracao": "136 minutos",
        "genero": "Ação, Ficção Científica",
        "imagem": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "avaliacao": 8.7,
        "destaque": true,
        "imagens_complementares": [
            { "url": "https://exemplo.com/cena17.jpg", "legenda": "Neo" },
            { "url": "https://exemplo.com/cena18.jpg", "legenda": "Cena da bala" }
        ]
    },
    {
        "id": 10,
        "titulo": "Titanic",
        "descricao": "Um romance épico no navio mais famoso do mundo.",
        "conteudo": "Jack Dawson, um jovem artista, ganha uma passagem para o Titanic...",
        "diretor": "James Cameron",
        "elenco": "Leonardo DiCaprio, Kate Winslet, Billy Zane",
        "ano": 1997,
        "duracao": "194 minutos",
        "genero": "Drama, Romance",
        "imagem": "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",
        "avaliacao": 7.8,
        "destaque": false,
        "imagens_complementares": [
            { "url": "https://exemplo.com/cena19.jpg", "legenda": "Jack e Rose" },
            { "url": "https://exemplo.com/cena20.jpg", "legenda": "Navio afundando" }
        ]
    },
    {
        "id": 11,
        "titulo": "O Silêncio dos Inocentes",
        "descricao": "Uma jovem agente do FBI procura um serial killer.",
        "conteudo": "Clarice Starling, uma jovem treinanda do FBI...",
        "diretor": "Jonathan Demme",
        "elenco": "Jodie Foster, Anthony Hopkins, Scott Glenn",
        "ano": 1991,
        "duracao": "118 minutos",
        "genero": "Crime, Thriller",
        "imagem": "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "avaliacao": 8.6,
        "destaque": true,
        "imagens_complementares": [
            { "url": "https://exemplo.com/cena21.jpg", "legenda": "Hannibal Lecter" },
            { "url": "https://exemplo.com/cena22.jpg", "legenda": "Clarice Starling" }
        ]
    }
];

function carregarFilmes() {
    const container = document.getElementById('lista-filmes');
    container.innerHTML = '';

    filmes.splice(3, 11).forEach(filme => {
        const filmeHTML = `
      <article class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="filme card h-100">
          <img src="${filme.imagem}" class="card-img-top" alt="${filme.titulo}">
          <div class="card-body">
            <h2 class="h5 card-title">${filme.titulo}</h2>
            <p class="card-text">${filme.descricao}</p>
            <a href="detalhes.html?id=${filme.id}" class="btn btn-primary">Ver detalhes</a>
          </div>
        </div>
      </article>
    `;
        container.innerHTML += filmeHTML;
    });
}

function carregarDetalhesFilme() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const filme = filmes.find(f => f.id == id);

    if (filme) {
        document.title = filme.titulo + " - Catálogo de Filmes";

        const detalhesContainer = document.getElementById('detalhes-filme');
        detalhesContainer.innerHTML = `
      <div class="row">
        <div class="col-md-4">
          <img src="${filme.imagem}" class="img-fluid rounded" alt="${filme.titulo}">
        </div>
        <div class="col-md-8">
          <h1>${filme.titulo}</h1>
          <p><strong>Ano:</strong> ${filme.ano}</p>
          <p><strong>Diretor:</strong> ${filme.diretor}</p>
          <p><strong>Elenco:</strong> ${filme.elenco}</p>
          <p><strong>Gênero:</strong> ${filme.genero}</p>
          <p><strong>Duração:</strong> ${filme.duracao}</p>
          <p><strong>Avaliação:</strong> ${filme.avaliacao}/10</p>
          <h3 class="mt-4">Sinopse</h3>
          <p>${filme.conteudo}</p>
          <a href="index.html" class="btn btn-secondary mt-3">Voltar para a lista</a>
        </div>
      </div>
    `;
    } else {
        document.getElementById('detalhes-filme').innerHTML = `
      <div class="alert alert-danger">
        Filme não encontrado. <a href="index.html">Voltar para a lista</a>
      </div>
    `;
    }
}

if (window.location.pathname.includes('detalhes.html')) {
    document.addEventListener('DOMContentLoaded', carregarDetalhesFilme);
} else {
    document.addEventListener('DOMContentLoaded', carregarFilmes);
}