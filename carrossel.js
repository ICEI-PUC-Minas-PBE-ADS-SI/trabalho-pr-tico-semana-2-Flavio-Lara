const filmesCarrossel = [
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
        "imagemMobile": "https://http2.mlstatic.com/D_NQ_NP_886885-MLA74803991293_022024-B.webp",
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
        "imagemMobile": "https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg",
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
        "imagemMobile": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEimUBDlX10lXuPQPZndwvcF9QXKwF_bgj1gAk7OX1krOEPeLgm6bjKisyWjO-dz62qU54m3j2urLrE22N7pnslqovPg6X199HhLcjvVJGfU1wZtRvk7Q4YpIguozmRtFlDfOeWJs5b9zEY/s1600/Interstellar.jpg",
        "imagem": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        "avaliacao": 8.6,
        "destaque": true,
        "imagens_complementares": [
            { "url": "https://exemplo.com/cena5.jpg", "legenda": "Nave espacial" },
            { "url": "https://exemplo.com/cena6.jpg", "legenda": "Planeta desconhecido" }
        ]
    },
];

function carregarFilmesCarrossel() {
    const container = document.getElementById('carousel-inner');
    container.innerHTML = '';

    const filmesPorSlide = 1;
    const totalSlides = Math.ceil(filmesCarrossel.length / filmesPorSlide);

    const isMobile = window.innerWidth <= 768;

    for (let i = 0; i < totalSlides; i++) {
        const filmesSlice = filmesCarrossel.slice(i * filmesPorSlide, (i + 1) * filmesPorSlide);

        let filmesHTML = filmesSlice.map(filme => {
            const imagem = isMobile ? filme.imagem : filme.imagemMobile;

            return `
                <div class="col-10 col-md-8 mx-auto">
                    <div class="filme card h-100 m-2">
                        <img src="${imagem}" class="card-img-top" alt="${filme.titulo}">
                        <div class="card-body">
                            <h2 class="h6 card-title">${filme.titulo}</h2>
                            <p class="card-text">${filme.descricao}</p>
                            <a href="detalhes.html?id=${filme.id}" class="btn btn-primary btn-sm">Ver detalhes</a>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        container.innerHTML += `
            <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <div class="row justify-content-center">
                    ${filmesHTML}
                </div>
            </div>
        `;
    }
}

if (window.location.pathname.includes('detalhes.html')) {
    document.addEventListener('DOMContentLoaded', carregarDetalhesFilme);
} else {
    document.addEventListener('DOMContentLoaded', carregarFilmesCarrossel);
}