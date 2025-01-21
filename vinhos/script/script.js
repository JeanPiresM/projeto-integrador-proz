// Função carrossel:
let indexImagem = 0;
const imagens = document.querySelectorAll('.carrossel-imagens img');
const totalImagens = imagens.length;

function mostrarImagem(index) {
    const carrosselImagens = document.querySelector('.carrossel-imagens');
    const deslocamento = -index * 20.3; // Ajusta a posição do carrossel
    carrosselImagens.style.transform = `translateX(${deslocamento}%)`;
}

function mudarImagem(direcao) {
    indexImagem += direcao;
    
    if (indexImagem >= totalImagens) {
        indexImagem = 0; // Retorna para a primeira imagem
    } else if (indexImagem < 0) {
        indexImagem = totalImagens - 1; // Vai para a última imagem
    }

    mostrarImagem(indexImagem);
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarImagem(indexImagem); // Inicia com a primeira imagem
});









