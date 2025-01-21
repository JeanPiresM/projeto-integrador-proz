const arrayEventos = [
  {
    tituloEvento: "Wine South America 2025",
    imgEvento:
      "https://portalbrasil.com.br/wp-content/uploads/2024/06/wine-south-america.jpg ",
    textoEvento:
      "A Wine South America é a principal feira de vinhos da América Latina, promovendo um grande encontro de profissionais do setor, incluindo produtores de vinhos, distribuidores e compradores. O evento oferece uma plataforma única para networking, rodadas de negócios e degustações de vinhos nacionais e internacionais. Durante os dias da feira, são realizadas também palestras e workshops sobre as últimas tendências do mercado e inovação no setor vinícola.",
    dataEvento: "Data: 6 a 8 de maio de 2025",
    localEvento: "Local: Bento Gonçalves, RS",
    linkEvento: "https://www.winesa.com.br/",
  },
  {
    tituloEvento: "Fenachamp 2025",
    imgEvento:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMn9CuqlwyvtuT5PZ0JluMh3-UK-F4d3y6cA&s",
    textoEvento:
      "A Fenachamp é o maior evento dedicado ao espumante brasileiro, realizado na cidade de Garibaldi, na Serra Gaúcha. Durante o evento, os visitantes podem degustar os melhores espumantes da região, participar de workshops, e conhecer mais sobre o processo de produção das bebidas. Além disso, o evento conta com shows, apresentações culturais e a deliciosa gastronomia local, tornando-se um verdadeiro festival de experiências sensoriais. A Fenachamp também é uma ótima oportunidade para quem deseja conhecer as vinícolas que produzem espumantes de qualidade reconhecida mundialmente.",
    dataEvento: "Data: 2 a 26 de outubro de 2025",
    localEvento: "Local: Garibaldi, RS",
    linkEvento: "https://vinhobrasileiro.org/eventos/fenachamp-2025",
  },
  {
    tituloEvento: "ProWine São Paulo 2025",
    imgEvento:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNyj8hpMZ9lT8OkkI2anl-xgHm5R-tY2hCxQ&s",
    textoEvento:
      "A ProWine São Paulo é uma das maiores feiras internacionais de negócios do setor vinícola, reunindo produtores, importadores, distribuidores e especialistas da indústria do vinho. O evento oferece uma plataforma estratégica para exposição de vinhos, bebidas alcoólicas e produtos relacionados. Profissionais do setor têm a chance de participar de degustações exclusivas, rodadas de negócios e palestras com especialistas da área, além de discutir inovações e tendências do mercado global de vinhos.",
    dataEvento: "Data: 30 de setembro a 2 de outubro de 2025",
    localEvento: "Local: São Paulo, SP",
    linkEvento: "https://prowinesaopaulo.com/",
  },
];

for (let i = 0; i < arrayEventos.length; i++) {
  // console.log(arrayEventos)

  const article = document.createElement("article");

  article.innerHTML = `
   <h3>${arrayEventos[i].tituloEvento}</h3>
        <div class="top">
          <img src=${arrayEventos[i].imgEvento} alt="Imagem do evento">
          <p>${arrayEventos[i].textoEvento}</p>
        </div>
        <span><strong>${arrayEventos[i].localEvento}</strong></span>
        <span><strong>${arrayEventos[i].dataEvento}</strong></span>
        <a href=${arrayEventos[i].linkEvento} target="_blank">Saiba Mais &#8594;</a>
  `;

  const section = document.querySelector("section");

  section.appendChild(article);
}
