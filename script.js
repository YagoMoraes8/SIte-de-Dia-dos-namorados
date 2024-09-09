document.addEventListener('DOMContentLoaded', () => {
    // Carrossel de imagens
    const images = document.querySelectorAll('.carousel-images img');
    let currentIndex = 0;

    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    }, 5000);

    // Função para atualizar o contador de tempo
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

    // Atualiza o contador a cada segundo
    atualizarContador();
    setInterval(atualizarContador, 1000);

    // Função para criar corações fora do container
    function createHeartOutside() {
        const heart = document.createElement('div');
        heart.classList.add('heart', 'outside');
        
        // Define uma posição aleatória na tela, fora da div ".container"
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        let top, left;

        do {
            top = Math.random() * 100;
            left = Math.random() * 100;
        } while (top >= containerRect.top / window.innerHeight * 100 &&
                 left >= containerRect.left / window.innerWidth * 100 &&
                 top <= (containerRect.top + containerRect.height) / window.innerHeight * 100 &&
                 left <= (containerRect.left + containerRect.width) / window.innerWidth * 100);

        heart.style.top = `${top}vh`;
        heart.style.left = `${left}vw`;

        document.body.appendChild(heart);

        // Remove o coração após o fim da animação
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Função para criar corações caindo dentro do container
    function createHeartInside() {
        const heart = document.createElement('div');
        heart.classList.add('heart', 'inside');
        
        const container = document.querySelector('.container');
        heart.style.top = `-${Math.random() * 10}%`; /* Começa em uma posição aleatória um pouco acima do container */
        heart.style.left = `${Math.random() * 100}%`; /* Posição lateral aleatória dentro do container */
        
        container.appendChild(heart);

        // Remove o coração após o fim da animação
        setTimeout(() => {
            heart.remove();
        }, 6000); /* A mesma duração da animação */
    }

    // Cria mais corações fora do container a cada intervalo de tempo
    for (let i = 0; i < 100; i++) { // Aumenta para 100 corações inicialmente fora do container
        createHeartOutside();
    }
    setInterval(createHeartOutside, 1000); // Cria um coração fora do container a cada 1 segundo

    // Cria corações dentro do container a cada intervalo de tempo
    for (let i = 0; i < 50; i++) { // Mantém 50 corações inicialmente dentro do container
        createHeartInside();
    }
    setInterval(createHeartInside, 500); // Cria um coração dentro do container a cada 500 ms
});
