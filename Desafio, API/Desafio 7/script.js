function gerarNumeros() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpa resultados anteriores

    for (let i = 0; i < quantidade; i++) {
        const numeros = gerarCombinacao();
        resultadosDiv.innerHTML += `<p>${numeros.join(', ')}</p>`;
    }
}

function gerarCombinacao() {
    const numeros = new Set();

    while (numeros.size < 6) {
        const numero = Math.floor(Math.random() * 60) + 1;
        numeros.add(numero);
    }

    return Array.from(numeros).sort((a, b) => a - b);
}
