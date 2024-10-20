/**
 * Função para somar números de 1 até o valor máximo.
 * @param {number} maximo - O valor máximo até onde somar.
 * @returns {number} - A soma dos números.
 */
function somarNumeros(maximo) {
    let soma = 0;  // Inicializa a variável para armazenar a soma
    let numero = 1; // Inicializa o contador

    // Loop while para somar todos os números de 1 até o valor máximo
    while (numero <= maximo) {
        soma += numero;
        numero++;
    }

    return soma; // Retorna o resultado da soma
}

// Define o valor máximo
const MAXIMO = 100;

// Calcula a soma
const resultado = somarNumeros(MAXIMO);

// Atualiza o conteúdo do parágrafo com o resultado
document.getElementById('resultado').textContent = `A soma de todos os números de 1 a ${MAXIMO} é: ${resultado}`;
