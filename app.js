const filmes = [
    {
        "id": 1,
        "titulo": "O Poderoso Chefão",
        "descricao": "A saga da família Corleone.",
        "conteudo": "O Poderoso Chefão é um filme de 1972 dirigido por Francis Ford Coppola. A história segue a família Corleone, uma das mais poderosas famílias da máfia italiana nos Estados Unidos. Quando o patriarca, Don Vito Corleone, é baleado, seu filho Michael precisa assumir os negócios da família e levar adiante seu legado.",
        "diretor": "Francis Ford Coppola",
        "elenco": "Marlon Brando, Al Pacino, James Caan",
        "ano": 1972,
        "duracao": "175 minutos",
        "genero": "Crime, Drama",
        "imagem": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "avaliacao": 9.2
    },
    {
        "id": 2,
        "titulo": "O Senhor dos Anéis: O Retorno do Rei",
        "descricao": "A conclusão da trilogia épica.",
        "conteudo": "O filme conclui a jornada de Frodo e Sam para destruir o Um Anel no Monte da Perdição, enquanto Aragorn lidera as forças do bem contra o exército de Sauron na Batalha dos Campos de Pelennor. Vencedor de 11 Oscars, incluindo Melhor Filme.",
        "diretor": "Peter Jackson",
        "elenco": "Elijah Wood, Viggo Mortensen, Ian McKellen",
        "ano": 2003,
        "duracao": "201 minutos",
        "genero": "Aventura, Fantasia",
        "imagem": "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        "avaliacao": 9.0
    },
    {
        "id": 3,
        "titulo": "Interestelar",
        "descricao": "Uma jornada através do espaço e tempo.",
        "conteudo": "Em um futuro onde a Terra está se tornando inabitável, um grupo de astronautas viaja através de um buraco de minhoca em busca de um novo lar para a humanidade. O filme explora temas de amor, sacrifício e a relatividade do tempo.",
        "diretor": "Christopher Nolan",
        "elenco": "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        "ano": 2014,
        "duracao": "169 minutos",
        "genero": "Ficção Científica, Drama",
        "imagem": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        "avaliacao": 8.6
    },
    {
        "id": 4,
        "titulo": "Parasita",
        "descricao": "Uma família pobre infiltra uma família rica.",
        "conteudo": "A família Kim, vivendo em condições precárias, encontra uma oportunidade quando o filho começa a dar aulas de inglês para a filha de uma família rica. Aos poucos, todos os membros da família Kim conseguem se infiltrar na casa dos Park, mas segredos perigosos ameaçam revelar sua verdadeira identidade.",
        "diretor": "Bong Joon-ho",
        "elenco": "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong",
        "ano": 2019,
        "duracao": "132 minutos",
        "genero": "Thriller, Drama",
        "imagem": "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        "avaliacao": 8.5
    }
];

function carregarFilmes() {
    const container = document.getElementById('lista-filmes');
    container.innerHTML = '';

    filmes.forEach(filme => {
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