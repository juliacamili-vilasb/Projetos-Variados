/**
 * Função para iniciar a contagem regressiva.
 */
function iniciarContagemRegressiva() {
    // Seleciona o elemento onde a contagem será exibida
    const contadorElement = document.getElementById('contador');
    let tempoRestante = 10; // Inicializa o tempo restante

    // Define um intervalo de 1 segundo para atualizar a contagem
    const intervalo = setInterval(() => {
        // Atualiza o texto do elemento com o valor atual da contagem
        contadorElement.textContent = tempoRestante;

        // Diminui o tempo restante
        tempoRestante--;

        // Quando o tempo restante chega a 0, exibe "Lançar!" e limpa o intervalo
        if (tempoRestante < 0) {
            contadorElement.textContent = 'Lançar!';
            clearInterval(intervalo);
        }
    }, 1000); // 1000 milissegundos = 1 segundo
}

// Inicia a contagem regressiva quando o script é carregado
iniciarContagemRegressiva();
