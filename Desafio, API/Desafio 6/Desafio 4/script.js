// Função para exibir números pares de 1 a 20
function exibirNumerosPares() {
    const resultadosDiv = document.getElementById('resultados');
    let resultado = ''; // Inicializa uma string vazia para os resultados

    // Loop para encontrar e exibir números pares
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) { // Verifica se o número é par
            resultado += `${i} `; // Adiciona o número à string com um espaço
        }
    }

    resultadosDiv.innerText = resultado.trim(); // Exibe os resultados na página e remove espaços extras
}
