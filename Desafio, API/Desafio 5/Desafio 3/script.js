function avaliarNota() {
    // Obtém a nota do input
    const nota = parseFloat(document.getElementById('nota').value);

    // Verifica se a nota está dentro do intervalo válido
    if (isNaN(nota) || nota < 0 || nota > 100) {
        alert('Por favor, insira uma nota válida entre 0 e 100.');
        return;
    }

    // Determina a nota com base no intervalo
    let resultado;
    if (nota >= 90) {
        resultado = 'A';
    } else if (nota >= 80) {
        resultado = 'B';
    } else if (nota >= 70) {
        resultado = 'C';
    } else if (nota >= 60) {
        resultado = 'D';
    } else {
        resultado = 'F';
    }

    // Exibe o resultado no div 'resultado'
    document.getElementById('resultado').innerText = `Nota: ${resultado}`;
}
