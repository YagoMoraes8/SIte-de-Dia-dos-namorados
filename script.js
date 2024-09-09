document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 5000);

    function atualizarContador() {
        const startDate = new Date('2023-12-02T16:30:00');
        const now = new Date();
        const diff = now - startDate;

        const anos = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const meses = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const dias = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diff % (1000 * 60)) / 1000);

        document.querySelector('#contador-tempo').innerHTML = 
            `${anos} anos, ${meses} meses, ${dias} dias <br>` +
            `${horas} horas, ${minutos} minutos e ${segundos} segundos`;
    }

    atualizarContador();
    setInterval(atualizarContador, 1000);

    // Função para criar corações flutuantes fora do container
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Limita os corações para dentro da área visível da página
        heart.style.top = `${Math.random() * 80}vh`; // Limita a altura para evitar rolagem
        heart.style.left = `${Math.random() * 90}vw`; // Ajusta a largura para manter dentro da tela

        document.body.appendChild(heart);

        // Remove o coração após o fim da animação
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Cria corações iniciais e adiciona mais a cada intervalo
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
    setInterval(createHeart, 2000);

    // Função para criar corações caindo dentro do container
    function createFallingHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart', 'inside');

        // Posição aleatória dentro do container
        heart.style.left = `${Math.random() * 80}%`; // Mantém os corações dentro da largura do container
        heart.style.top = '-10%'; // Começa fora da parte superior do container

        document.querySelector('.container').appendChild(heart);

        // Remove o coração após o fim da animação
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }

    // Adiciona corações caindo dentro do container
    setInterval(createFallingHeart, 1500);
});
