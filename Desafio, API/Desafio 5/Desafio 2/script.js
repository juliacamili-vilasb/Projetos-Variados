function verificarIdade() {
    // Obtém a idade do input
    const idade = parseInt(document.getElementById('idade').value);

    // Verifica se a idade é um número e é válida
    if (isNaN(idade) || idade < 0) {
        alert('Por favor, insira uma idade válida.');
        return;
    }

    // Determina a mensagem com base na idade
    const resultado = idade >= 18 ? 'Você é maior de idade' : 'Você é menor de idade';

    // Exibe a mensagem no div 'resultado'
    document.getElementById('resultado').innerText = resultado;
}
